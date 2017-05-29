/**
 * Created by jk on 24.05.17.
 */

"use strict";

// Price per 1ms in USD per 1mio invocation, SOURCE: (https://aws.amazon.com/lambda/pricing, accessed: 2017/05/29)
const _prices = {
    'eu-west-1': {
        128: 0.00208,
        192: 0.313,
        256: 0.417,
        320: 0.521,
        384: 0.625,
        448: 0.729,
        512: 0.834,
        576: 0.938,
        640: 1.042,
        704: 1.146,
        768: 1.250,
        832: 1.354,
        896: 1.459,
        960: 1.563,
        1024: 1.667,
        1088: 1.771,
        1152: 1.875,
        1216: 1.980,
        1280: 2.084,
        1344: 2.188,
        1408: 2.292,
        1472: 2.396,
        1536: 2.501
    }
};

/**
 *
 * @param region    Calculate prices based on this AWS region.
 * @param memory    Amount of provisioned memory for this AWS Lambda function.
 * @returns {*}
 * @private
 */
const _price = (region, memory) => {
    return _prices[region][memory];
};

/**
 * Derives cost and waste metrics from consumption inputs. Metrics:
 *      - Monetary Cost:            Infrastructure cost for the invocation in USD.
 *      - Runtime Waste:            Billed and unused runtime of the invocation in milliseconds.
 *      - Monetary Runtime Waste:   Infrastructure cost of the Runtime Waste for the invocation in USD.
 *      - Memory Waste:             Amount of provisioned memory that has never been used by this invocation in MB.
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

    const region = 'eu-west-1';

    // Check input params for strings
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
    costs.MonetaryCost.type = 'USD';
    costs.MonetaryCost.val = c.BilledDuration.val * _price(region, c.MemorySize.val);
    console.log('MonetaryCost: ' +costs.MonetaryCost.val);

    // Runtime waste
    costs.RuntimeWaste = {};
    costs.RuntimeWaste.type = 'MS';
    costs.RuntimeWaste.val = c.BilledDuration.val - c.Duration.val;
    console.log('RuntimeWaste: ' +costs.RuntimeWaste.val);

    // monetary runtime waste
    costs.MonetaryRuntimeWaste = {};
    costs.MonetaryRuntimeWaste.type = 'MS';
    costs.MonetaryRuntimeWaste.val = costs.RuntimeWaste.val * _price(region, c.MemorySize.val);
    console.log('MonetaryRuntimeWaste: ' +costs.MonetaryRuntimeWaste.val);

    // memory waste
    costs.MemoryWaste = {};
    costs.MemoryWaste.type = 'MB';
    costs.MemoryWaste.val = c.MemorySize.val - c.MaxMemoryUsed.val;
    console.log('MemoryWaste: ' +costs.MemoryWaste.val);

    // TODO monetary memory waste

    return costs;

};