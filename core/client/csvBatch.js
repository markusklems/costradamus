/**
 * Created by jk on 07.06.17.
 */

'use strict';

/**
 * Imports
 */
const fs = require('fs');
const path = require('path');
const program = require('commander');
const Util = require('util');

/**
 *  Output File
 */
let appendLine;
const delimiter = ', ';                                     // Column delimiter for output file
// Header line of output file
const header = [
    'trace_id', 'name', 'id', 'resource', 'parent_id',      // Invocation
    'start', 'end', 'latency', 'latency-unit',              // Invocation latency
    'MC-val', 'MC-unit',                                    // Monetary Consumption
    'PAW-val', 'PAW-unit',                                  // Provisioning Amount Waste
    'PTW-val', 'PTW-unit',                                  // Provisioning Time Waste
    'MAW-val', 'MAW-unit',                                  // Metered Amount Waste
    'MTW-val', 'MTW-unit',                                  // Metered Time Waste
    'c_1_name', 'c_1_val', 'c_1_type',                      // Consumption of capacity type 1
    'c_2_name', 'c_2_val', 'c_2_type',                      // Consumption of capacity type 2
    'c_3_name', 'c_3_val', 'c_3_type',                      // Consumption of capacity type 3
    'c_4_name', 'c_4_val', 'c_4_type'                       // Consumption of capacity type 4
];

/**
 *  Helper Functions
 */
const getLineAppender = (filePath) => {
    return (line) => { fs.appendFileSync(filePath, line + '\n') }
};

/**
 *  CLI
 */
let inputDir, skipUnbilled, singleFile;


const convertSubsegments = (trace_id, parent_name, parent_id, subs) => {
    for(let key in subs) {
        const fields = [];
        fields.push(trace_id);
        fields.push(parent_name+'-'+subs[key].name);
        fields.push(subs[key].id);
        if(subs[key].hasOwnProperty('aws') && subs[key]['aws'].hasOwnProperty('resource_names') && subs[key]['aws']['resource_names'].hasOwnProperty('0')) {
            fields.push(subs[key]['aws']['resource_names'][0]);
        } else {
            fields.push('N/A');
        }
        fields.push(parent_id);
        fields.push(subs[key]['start_time']*1000);
        fields.push(subs[key]['end_time']*1000);
        fields.push((subs[key]['end_time']*1000)-(subs[key]['start_time']*1000));
        fields.push('MS');

        let usesCostTracing = false;
        if(subs[key].hasOwnProperty('cost')) {
            usesCostTracing = true;
            if(subs[key]['cost'].hasOwnProperty('MonetaryCost') && subs[key]['cost'].MonetaryCost !== 'undefined') {
                fields.push(subs[key]['cost']['MonetaryCost'].val);
                fields.push(subs[key]['cost']['MonetaryCost'].type);
            } else {
                fields.push(' ');
                fields.push(' ');
            }
            if(subs[key]['cost'] !== 'undefined' && subs[key]['cost'].hasOwnProperty('ProvisioningAmountWaste')) {
                fields.push(subs[key]['cost']['ProvisioningAmountWaste'].val);
                fields.push(subs[key]['cost']['ProvisioningAmountWaste'].type);
            } else {
                fields.push(' ');
                fields.push(' ');
            }
            if(subs[key]['cost'] !== 'undefined' && subs[key]['cost'].hasOwnProperty('ProvisioningTimeWaste')) {
                fields.push(subs[key]['cost']['ProvisioningTimeWaste'].val);
                fields.push(subs[key]['cost']['ProvisioningTimeWaste'].type);
            } else {
                fields.push(' ');
                fields.push(' ');
            }
            if(subs[key]['cost'] !== 'undefined' && subs[key]['cost'].hasOwnProperty('MeteringAmountWaste')) {
                fields.push(subs[key]['cost']['MeteringAmountWaste'].val);
                fields.push(subs[key]['cost']['MeteringAmountWaste'].type);
            } else {
                fields.push(' ');
                fields.push(' ');
            }
            if(subs[key]['cost'] !== 'undefined' && subs[key]['cost'].hasOwnProperty('MeteringTimeWaste')) {
                fields.push(subs[key]['cost']['MeteringTimeWaste'].val);
                fields.push(subs[key]['cost']['MeteringTimeWaste'].type);
            } else {
                fields.push(' ');
                fields.push(' ');
            }
        }

        for(let k in subs[key].consumptions) {
            if (subs[key].consumptions.hasOwnProperty(k)) {
                fields.push(k);
                fields.push(subs[key].consumptions[k].val);
                fields.push(subs[key].consumptions[k].type);
            }
        }

        const line = fields.join(delimiter);
        if( !skipUnbilled ) appendLine(line);
        if( skipUnbilled && usesCostTracing) appendLine(line);

        if(subs[key].subsegments !== 'undefined') {
            convertSubsegments(trace_id, parent_name+'-'+subs[key].name, subs[key].id, subs[key].subsegments);
        }
    }
};



/**
 * Converts all pruned trace files in a directory to csv files
 *
 * @param dir           Directory containing pruned trace files
 * @param billedOnly    Extract only downstream invocations with consumption data.
 */
const convert = (dir, billedOnly) => {

    let inputFile, outputFile;

    // Read all files from dir with suffix '-pruned.json'.
    const files = fs.readdirSync(dir);

    if(singleFile) {
        outputFile = path.join(dir, 'complete-pruned.csv');
        if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
        appendLine = getLineAppender(outputFile);
        appendLine(header.join(delimiter));
    }
    for (const f in files) {

        if(files[f].indexOf('-pruned.json') === -1) continue;       // Check for pruned trace file

        console.log('Converting file: ' +files[f]);

        inputFile = path.join(dir, files[f]);
        if (!singleFile) {
            outputFile = path.join(dir, files[f].replace('-pruned.json', '-pruned.csv'));
            if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);   // Delete existing output file
            appendLine = getLineAppender(outputFile);  // Init output writer with output file
        }

        const t = JSON.parse(fs.readFileSync(inputFile));           // Parse content of input file

        if (!singleFile) appendLine(header.join(delimiter));        // Writer header to output file

        for(let s in t.Segments) {                                  // Iterate over all segements in the trace
            let fields = [];
            s = t.Segments[s].Document;
            fields.push(t.Id);                                      // Trace id
            fields.push(s.name);                                    // Name of downstream operation
            fields.push(s.id);                                      // Segment id / invocation id
            if (s.hasOwnProperty('aws')
                && s['aws'].hasOwnProperty('resource_names')
                && s['aws']['resource_names'].hasOwnProperty('0')) {

                fields.push(s['aws']['resource_names'][0]);
            } else {
                fields.push('N/A');
            }
            fields.push(s['parent_id']);                            // trace id of parent invocation
            fields.push(s['start_time']*1000);
            fields.push(s['end_time']*1000);
            fields.push((s['end_time']*1000)-(s['start_time']*1000));
            fields.push('MS');

            let usesCostTracing = false;
            if (s.hasOwnProperty('cost') && s.cost !== 'undefined') {
                usesCostTracing = true;
                if (s['cost'].hasOwnProperty('MonetaryCost')) {
                    fields.push(s['cost']['MonetaryCost'].val);
                    fields.push(s['cost']['MonetaryCost'].type);
                } else {
                    fields.push(' ');
                    fields.push(' ');
                }
                if (s['cost'].hasOwnProperty('ProvisioningAmountWaste')) {
                    fields.push(s['cost']['ProvisioningAmountWaste'].val);
                    fields.push(s['cost']['ProvisioningAmountWaste'].type);
                } else {
                    fields.push(' ');
                    fields.push(' ');
                }
                if (s['cost'].hasOwnProperty('ProvisioningTimeWaste')) {
                    fields.push(s['cost']['ProvisioningTimeWaste'].val);
                    fields.push(s['cost']['ProvisioningTimeWaste'].type);
                } else {
                    fields.push(' ');
                    fields.push(' ');
                }
                if (s['cost'].hasOwnProperty('MeteringAmountWaste')) {
                    fields.push(s['cost']['MeteringAmountWaste'].val);
                    fields.push(s['cost']['MeteringAmountWaste'].type);
                } else {
                    fields.push(' ');
                    fields.push(' ');
                }
                if (s['cost'].hasOwnProperty('MeteringTimeWaste')) {
                    fields.push(s['cost']['MeteringTimeWaste'].val);
                    fields.push(s['cost']['MeteringTimeWaste'].type);
                } else {
                    fields.push(' ');
                    fields.push(' ');
                }
            }

            for (let key in s.consumptions) {
                if (s.consumptions.hasOwnProperty(key)) {
                    fields.push(key);
                    fields.push(s.consumptions[key].val);
                    fields.push(s.consumptions[key].type.toUpperCase());
                }
            }

            const line = fields.join(delimiter);
            if( !skipUnbilled ) appendLine(line);
            if( skipUnbilled && usesCostTracing) appendLine(line);

            if (s.subsegments !== 'undefined') {
                convertSubsegments(t.Id, s.name, s.id, s.subsegments);
            }
        }
    }
};

module.exports = convert;

/**
 * CLI
 */

program
    .version('1.0.0')
    .option('-d, --input-dir <dir>', 'Directory containing pruned trace files.')
    .option('-b, --billed-only [value]', 'Extract only invocations with consumption data? [true, false].')
    .option('-s, --single-file [value]', 'Write complete output to a single file? [true, false].')
    .parse(process.argv);

inputDir = program['inputDir'];
skipUnbilled = (program['billedOnly'] == 'true');
singleFile = program['singleFile'];

console.log(' -d, --input-dir: ' +inputDir);
console.log(' -b, --billed-only, Select only invocations with consumption data? : ' +skipUnbilled);
console.log(' -s, --single-file, Write all outputs to a single file? : ' +singleFile);

convert(inputDir, skipUnbilled);