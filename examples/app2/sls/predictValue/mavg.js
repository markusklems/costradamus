/**
 * Created by jk on 16.05.17.
 */

'use strict';

const util = require('util');

const input = [
    {
        id: 'DE00056366740S2031372170000000000010001080000',
        value: '+000000030+1',
        timestamp: 1494499998
    },
    {
        id: 'DE00056366740S2031372170000000000010001080000',
        value: '+000000020+1',
        timestamp: 1494499999
    },
    {
        id: 'DE00056366740S2031372170000000000010001080000',
        value: '+000000010+1',
        timestamp: 1494500000
    }
];

const intervals = 1;

const sort = (prop, objects) => {
    const arr = Array.from(objects);
    /**
    for(let o in objects) {
        arr.push(objects[o]);
    }
     */
    return arr.sort( (a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
};

const toNumber = stringValue => {
    const number = Number(stringValue.slice(0,10));
    let exponent = Number(stringValue.slice(-2));
    const result = Math.pow(number, exponent);
    // console.log('Transformed ' +stringValue+ ' to ' +result);
    return result;
};

const toString = numberValue => {
    numberValue = Math.floor(numberValue);
    // console.log('Floor value: ' +numberValue);
    if (numberValue > 100000000)    return '+'          +numberValue+ '+1';
    if (numberValue > 10000000)     return '+0'         +numberValue+ '+1';
    if (numberValue > 1000000)      return '+00'        +numberValue+ '+1';
    if (numberValue > 100000)       return '+000'       +numberValue+ '+1';
    if (numberValue > 10000)        return '+0000'      +numberValue+ '+1';
    if (numberValue > 1000)         return '+00000'     +numberValue+ '+1';
    if (numberValue > 100)          return '+000000'    +numberValue+ '+1';
    if (numberValue > 10)           return '+0000000'   +numberValue+ '+1';
    if (numberValue >= 0)           return '+00000000'  +numberValue+ '+1';
};

const mavg = (data) => {

    // console.log('Data: ' +util.inspect(data));
    // console.log('Intervals: ' +intervals);
    data = sort('timestamp', data);

    const distance = data[data.length - 1].timestamp - data[data.length - 2].timestamp;

    for(let i = 0; i < data.length; i++) {
        let sum = 0, n = 0, value, timestamp;
        for(let p in data) {
            // console.log('Point: ' +util.inspect(data[p]));
            sum += toNumber(data[p].value);
            n++;
        }
        value = sum/n;
        timestamp = data[data.length - 1].timestamp + distance;
        data.push({
            id: data[0].id,
            timestamp: timestamp,
            value: toString(value)
        });
        data.shift();
    }

    // console.log('Moving average: ' +util.inspect(data));
    return data;

};

module.exports = mavg;