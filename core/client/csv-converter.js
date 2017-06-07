/**
 * Created by jk on 02.06.17.
 */

"use strict";

const fs = require('fs');
const path = require('path');
const program = require('commander');
const EventEmitter = require('events').EventEmitter;
const Util = require('util');

/**
 *  Helper Functions
 */

const appendLine = (line) => {
    fs.appendFile(output_path, line + '\n', (err) => {});
};

const convertSubsegments = (parent_name, parent_id, subs) => {
    for(let key in subs) {
        fields = [];

        fields.push(parent_name+'-'+subs[key].name);
        fields.push(subs[key].id);
        if(subs[key].hasOwnProperty('aws') && subs[key]['aws'].hasOwnProperty('resource_names') && subs[key]['aws']['resource_names'].hasOwnProperty('0')) {
            fields.push(subs[key]['aws']['resource_names'][0]);
        } else {
            fields.push('N/A');
        }
        fields.push(parent_id);
        fields.push(subs[key]['start_time']);
        fields.push(subs[key]['end_time']);


        /**
        for(let k in subs[key].cost) {
            if (subs[key].cost.hasOwnProperty(k)) {
                //fields.push(k);
                fields.push(subs[key].cost[k].val);
                fields.push(subs[key].cost[k].type);
            }
        }
         */

        if(subs[key].hasOwnProperty('cost')) {
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

        line = fields.join(delimiter);
        appendLine(line);

        if(subs[key].subsegments !== 'undefined') {
            convertSubsegments(parent_name+'-'+subs[key].name, subs[key].id, subs[key].subsegments);
        }
    }
};


/**
 * CLI
 */

program
    .version('1.0.0')
    .option('-t, --trace-id [value]', 'Trace id.')
    // .option('-d, --input-dir [value]', 'Directory containing pruned trace files.')
    .parse(process.argv);



let trace_id = program['traceId'] || '1-5930549c-763e04889a0bb576ba23ae9f';
//let output_file = program['outputFile'] || '1-5930549c-763e04889a0bb576ba23ae9f';

console.log(program['traceId']);

const input_path = path.join(__dirname, '..', '..', 'experiments', 'results', 'baseline-us-east-1', `${trace_id}-pruned.json`);
const output_path = path.join(__dirname, 'data', `${trace_id}.csv`);

let t = JSON.parse(fs.readFileSync(input_path)); //trace
// console.log(Util.inspect(t, {depth:1}));

const delimiter = ', ';
let fields = [];
fields.push('Trace_Id');
fields.push(t.Id);
fields.push('Trace_Latency [ms]');
fields.push(t.Duration);
let line = fields.join(delimiter) + '\n';
appendLine(line);

fields = ['name', 'id', 'resource', 'parent_id', 'start', 'end', 'MC-val', 'MC-unit','PAW-val', 'PAW-unit', 'PTW-val', 'PTW-unit', 'MAW-val', 'MAW-unit', 'MTW-val', 'MTW-unit', 'c_1_name', 'c_1_val', 'c_1_type', 'c_2_name', 'c_2_val', 'c_2_type', 'c_3_name', 'c_3_val', 'c_3_type', 'c_4_name', 'c_4_val', 'c_4_type'];
line = fields.join(delimiter) + '\n';
appendLine(line);

for(let s in t.Segments) {
    fields = [];
    s = t.Segments[s].Document;

    fields.push(s.name);
    fields.push(s.id);
    if(s.hasOwnProperty('aws') && s['aws'].hasOwnProperty('resource_names') && s['aws']['resource_names'].hasOwnProperty('0')) {
        fields.push(s['aws']['resource_names'][0]);
    } else {
        fields.push('N/A');
    }
    fields.push(s['parent_id']);
    fields.push(s['start_time']);
    fields.push(s['end_time']);


    if(s.hasOwnProperty('cost') && s.cost !== 'undefined') {
        if(s['cost'].hasOwnProperty('MonetaryCost')) {
            fields.push(s['cost']['MonetaryCost'].val);
            fields.push(s['cost']['MonetaryCost'].type);
        } else {
            fields.push(' ');
            fields.push(' ');
        }
        if(s['cost'].hasOwnProperty('ProvisioningAmountWaste')) {
            fields.push(s['cost']['ProvisioningAmountWaste'].val);
            fields.push(s['cost']['ProvisioningAmountWaste'].type);
        } else {
            fields.push(' ');
            fields.push(' ');
        }
        if(s['cost'].hasOwnProperty('ProvisioningTimeWaste')) {
            fields.push(s['cost']['ProvisioningTimeWaste'].val);
            fields.push(s['cost']['ProvisioningTimeWaste'].type);
        } else {
            fields.push(' ');
            fields.push(' ');
        }
        if(s['cost'].hasOwnProperty('MeteringAmountWaste')) {
            fields.push(s['cost']['MeteringAmountWaste'].val);
            fields.push(s['cost']['MeteringAmountWaste'].type);
        } else {
            fields.push(' ');
            fields.push(' ');
        }
        if(s['cost'].hasOwnProperty('MeteringTimeWaste')) {
            fields.push(s['cost']['MeteringTimeWaste'].val);
            fields.push(s['cost']['MeteringTimeWaste'].type);
        } else {
            fields.push(' ');
            fields.push(' ');
        }
    }

    /**
    for(let key in s.cost) {
            // fields.push(key);
            fields.push(s.cost[key].val);
            fields.push(s.cost[key].type);
        }
    }
     */

    for(let key in s.consumptions) {
        if (s.consumptions.hasOwnProperty(key)) {
            fields.push(key);
            fields.push(s.consumptions[key].val);
            fields.push(s.consumptions[key].type.toUpperCase());
        }
    }

    line = fields.join(delimiter);
    appendLine(line);

    if(s.subsegments !== 'undefined') {
        convertSubsegments(s.name, s.id, s.subsegments);
    }

    /**
    for(let key in s.subsegments) {
        fields = [];

        fields.push(s.name+'-'+s.subsegments[key].name);
        fields.push(s.subsegments[key].id);
        fields.push(s['parent_id']);
        fields.push(s.subsegments[key]['start_time']);
        fields.push(s.subsegments[key]['end_time']);

        for(let k in s.subsegments[key].cost) {
            if (s.subsegments[key].cost.hasOwnProperty(k)) {
                fields.push(k);
                fields.push(s.subsegments[key].cost[k].val);
                fields.push(s.subsegments[key].cost[k].type);
            }
        }

        for(let k in s.subsegments[key].consumptions) {
            if (s.subsegments[key].consumptions.hasOwnProperty(k)) {
                fields.push(k);
                fields.push(s.subsegments[key].consumptions[k].val);
                fields.push(s.subsegments[key].consumptions[k].type);
            }
        }

        line = fields.join(delimiter);
        appendLine(line);
    }
     */
}



