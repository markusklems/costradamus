/**
 * Created by jk on 02.06.17.
 */



const fs = require('fs');
const path = require('path');
const program = require('commander');
const EventEmitter = require('events').EventEmitter;
const Util = require('util');

program
    .version('1.0.0')
    .option('-t, --trace-id [value]', 'Trace id.')
    .parse(process.argv);

console.log(program['input_file']);

let trace_id = program['tnputId'] || '1-5930549c-763e04889a0bb576ba23ae9f';
//let output_file = program['outputFile'] || '1-5930549c-763e04889a0bb576ba23ae9f';


const input_path = path.join(__dirname, 'data', `${trace_id}-pruned.json`);
const output_path = path.join(__dirname, 'data', `${trace_id}.csv`);

let t = JSON.parse(fs.readFileSync(input_path)); //trace
console.log(Util.inspect(t, {depth:1}));

const delimiter = ', ';
let fields = [];
fields.push('Trace_Id');
fields.push(t.Id);
fields.push('Trace_Latency [ms]');
fields.push(t.Duration);
let line = fields.join(delimiter) + '\n\n';
fs.appendFile(output_path, line, (err) => {});

fields = ['name', 'id', 'parent_id', 'start', 'end', 'MonetaryCost', 'ProvisioningAmountWaste', 'ProvisioningTimeWaste', 'MeteringAmountWaste', 'MeteringTimeWaste', 'consumption_1_name', 'consumption_1_val', 'consumption_1_type'];
line = fields.join(delimiter) + '\n';
fs.appendFile(output_path, line, (err) => {});

for(let s in t.Segments) {
    fields = [];
    s = t.Segments[s].Document;

    fields.push(s.name);
    fields.push(s.id);
    fields.push(s['parent_id']);
    fields.push(s['start_time']);
    fields.push(s['end_time']);

    for(let key in s.cost) {
        if (s.cost.hasOwnProperty(key)) {
            fields.push(key);
            fields.push(s.cost[key].val);
            fields.push(s.cost[key].type);
        }
    }

    for(let key in s.consumptions) {
        if (s.consumptions.hasOwnProperty(key)) {
            fields.push(key);
            fields.push(s.consumptions[key].val);
            fields.push(s.consumptions[key].type);
        }
    }

    line = fields.join(delimiter) + '\n';
    fs.appendFile(output_path, line, (err) => {});

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

        line = fields.join(delimiter) + '\n';
        fs.appendFile(output_path, line, (err) => {});
    }
}



