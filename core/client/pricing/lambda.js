/**
 * Created by jk on 24.05.17.
 */

"use strict";

// Price per 100ms in nano USD, SOURCE: (https://aws.amazon.com/lambda/pricing, accessed: 2017/05/29)
const _prices = {
    'us-west-1': {
        128: 208,
        192: 313,
        256: 417,
        320: 521,
        384: 625,
        448: 729,
        512: 834,
        576: 938,
        640: 1042,
        704: 1146,
        768: 1250,
        832: 1354,
        896: 1459,
        960: 1563,
        1024: 1667,
        1088: 1771,
        1152: 1875,
        1216: 1980,
        1280: 2084,
        1344: 2188,
        1408: 2292,
        1472: 2396,
        1536: 2501
    }
};

const _meteredDurationInMs = 100;

/**
 * Derives cost and waste metrics from consumption inputs. Metrics:
 *      - Monetary Cost:            Infrastructure cost for the invocation in NANO-USD.
 *      - Runtime Waste:            Billed and unused runtime of the invocation in microseconds.
 *      - Monetary Runtime Waste:   Infrastructure cost of the Runtime Waste for the invocation in NANO-USD.
 *      - Memory Waste:             Lower bound for the amount of memory that has never been used by this invocation in MB.
 *                                  This metric can be tricky for AWS Lambda because configured memory does
 *                                  proportionally increase other selected compute resources, e.g., cpu.
 *
 * @param c.Duration:           Total runtime of an invocation. { val: '233.22', type: 'ms' },
 * @param c.BilledDuration:     Billed runtime of an invocation. { val: '300', type: 'ms' },
 * @param c.MemorySize:         Provisioned amount of memory for an invocation. { val: '128', type: 'MB' },
 * @param c.MaxMemoryUsed:      Maximum amount of used memory for an invocation. { val: '45', type: 'MB' } }
 * @returns {{}}                monetaryCost, runtimeWaste, monetaryRuntimeWaste, memoryWaste
 */
module.exports = c => {

    let costs = {};

    const region = 'us-west-1';

    if (isNaN(c.Duration.val) || isNaN(c.BilledDuration.val) || isNaN(c.MemorySize.val) || isNaN(c.MaxMemoryUsed.val)) {
        new Error('InvalidParameterError: ' + c);
    }

    if (c.Duration.type !== 'MS' || c.BilledDuration.type !== 'MS') {
        new Error('InvalidParameterError: Durations must be specified in MS.' + c);
    }

    if (c.MemorySize.type !== 'MB' || c.MaxMemoryUsed.type !== 'MB') {
        new Error('InvalidParameterError: Memory must be specified in MB. ' + c);
    }

    if (typeof c.Duration.val === 'string')         c.Duration.val = +c.Duration.val;
    if (typeof c.BilledDuration.val === 'string')   c.BilledDuration.val = +c.BilledDuration.val;
    if (typeof c.MemorySize.val === 'string')       c.MemorySize.val = +c.MemorySize.val;
    if (typeof c.MaxMemoryUsed.val === 'string')    c.MaxMemoryUsed.val = +c.MaxMemoryUsed.val;


    // monetary execution cost
    costs.MonetaryCost = {};
    costs.MonetaryCost.type = 'NANO-USD';
    costs.MonetaryCost.val = c.BilledDuration.val / _meteredDurationInMs * _prices[region][c.MemorySize.val];
    // console.log('MonetaryCost: ' +costs.MonetaryCost.val);

    // Runtime waste
    costs.RuntimeWaste = {};
    costs.RuntimeWaste.type = 'US';
    console.log('BilledDuration: ' +c.BilledDuration.val+ ' [' +typeof c.BilledDuration.val+'], Duration: ' +c.Duration.val+ ' [' +typeof c.Duration.val+']');
    const durationInUs = c.Duration.val * 1000;
    const roundedDurationInUs = parseInt(durationInUs.toFixed(0));
    costs.RuntimeWaste.val = ((c.BilledDuration.val * 1000) - roundedDurationInUs);
    // console.log('RuntimeWaste: ' +costs.RuntimeWaste.val);

    // monetary runtime waste
    costs.MonetaryRuntimeWaste = {};
    costs.MonetaryRuntimeWaste.type = 'NANO-USD';
    const monetaryRuntimeWaste = costs.RuntimeWaste.val / _meteredDurationInMs / 1000 * _prices[region][c.MemorySize.val];
    const roundedMonetaryRuntimeWaste = parseInt(monetaryRuntimeWaste.toFixed(0));
    costs.MonetaryRuntimeWaste.val = roundedMonetaryRuntimeWaste;
    // console.log('MonetaryRuntimeWaste: ' +costs.MonetaryRuntimeWaste.val);

    // memory waste
    costs.MemoryWaste = {};
    costs.MemoryWaste.type = 'MB';
    costs.MemoryWaste.val = c.MemorySize.val - c.MaxMemoryUsed.val;
    // console.log('MemoryWaste: ' +costs.MemoryWaste.val);

    // TODO monetary memory waste

    return costs;

};