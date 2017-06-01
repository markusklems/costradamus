/**
 * Created by jk on 24.05.17.
 */

"use strict";

// Price per 100ms in nano USD, SOURCE: (https://aws.amazon.com/lambda/pricing, accessed: 2017/05/29)

const _lambda = {
    'us-west-1': {
        128: {
            price_val:                  208,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    128,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        128,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        192: {
            price_val:                  313,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    192,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        192,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        256: {
            price_val:                  417,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    256,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        256,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        320: {
            price_val:                  521,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    320,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        320,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        384: {
            price_val:                  625,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    384,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        384,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        448: {
            price_val:                  729,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    448,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        448,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        512: {
            price_val:                  834,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    512,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        512,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        576: {
            price_val:                  938,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    576,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        576,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        640: {
            price_val:                  1042,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    640,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        640,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        704: {
            price_val:                  1146,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    704,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        704,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        768: {
            price_val:                  1250,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    768,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        768,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        832: {
            price_val:                  1354,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    832,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        832,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        896: {
            price_val:                  1459,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    896,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        896,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        960: {
            price_val:                  1563,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    960,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        960,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1024: {
            price_val:                  1667,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1024,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1024,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1088: {
            price_val:                  1771,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1088,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1088,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1152: {
            price_val:                  1875,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1152,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1152,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1216: {
            price_val:                  1980,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1216,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1216,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1280: {
            price_val:                  2084,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1280,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1280,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1344: {
            price_val:                  2188,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1344,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1344,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1408: {
            price_val:                  2292,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1408,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1408,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1472: {
            price_val:                  2396,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1472,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1472,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        },
        1536: {
            price_val:                  2501,
            price_unit:                 'NANO-USD',     // 1 NANO-USD = 0.000000001 USD
            provisioning_amount_val:    1536,
            provisioning_amount_unit:   'MB',           // 1 MB = 1000 KB = 1000000 B
            provisioning_duration_val:  100,
            provisioning_duration_unit: 'MS',           // 1 h = 3600 s = 3600000 ms
            metering_amount_val:        1536,
            metering_amount_unit:       'MB',            // 1 MB = 1000 KB = 1000000 B
            metering_duration_val:      100,
            metering_duration_unit:     'MS'            // 1 h = 3600 s = 3600000 ms
        }
    },
    'eu-central-1': {}
};

const _prices = {
    'us-west-1': {
        128: 208, // DONE
        192: 313, // DONE
        256: 417, // DONE
        320: 521, // DONE
        384: 625, // DONE
        448: 729, // DONE
        512: 834, // DONE
        576: 938, // DONE
        640: 1042, // DONE
        704: 1146, // DONE
        768: 1250, // DONE
        832: 1354, // DONE
        896: 1459, // DONE
        960: 1563, // DONE
        1024: 1667, // DONE
        1088: 1771, // DONE
        1152: 1875, // DONE
        1216: 1980, // DONE
        1280: 2084, // DONE
        1344: 2188, // DONE
        1408: 2292, // DONE
        1472: 2396, // DONE
        1536: 2501  // DONE
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

    let costs = {}, mem;

    const region = 'us-west-1';

    if (isNaN(c.Duration.val) || isNaN(c.BilledDuration.val) || isNaN(c.MemorySize.val) || isNaN(c.MaxMemoryUsed.val)) {
        new Error('InvalidParameterError: ' + c);
    }

    if (c.Duration.type.toUpperCase() !== 'MS' || c.BilledDuration.type.toUpperCase() !== 'MS') {
        new Error('InvalidParameterError: Durations must be specified in MS.' + c);
    }

    if (c.MemorySize.type.toUpperCase() !== 'MB' || c.MaxMemoryUsed.type.toUpperCase() !== 'MB') {
        new Error('InvalidParameterError: Memory must be specified in MB. ' + c);
    }

    if (typeof c.Duration.val === 'string')         c.Duration.val = +c.Duration.val;
    if (typeof c.BilledDuration.val === 'string')   c.BilledDuration.val = +c.BilledDuration.val;
    if (typeof c.MemorySize.val === 'string')       c.MemorySize.val = +c.MemorySize.val;
    if (typeof c.MaxMemoryUsed.val === 'string')    c.MaxMemoryUsed.val = +c.MaxMemoryUsed.val;

    mem = c.MemorySize.val;

    const used_amount = c.MaxMemoryUsed.val;
    const used_duration = c.Duration.val;

    const metered_amount = c.MemorySize.val;
    const metered_duration = c.BilledDuration.val;

    // monetary cost of invocation
    costs.MonetaryCost = {};
    costs.MonetaryCost.type = 'NANO-USD';
    const monetaryCost = metered_amount / _lambda[region][mem]['provisioning_amount_val'] * metered_duration / _lambda[region][mem]['provisioning_duration_val'] * _lambda[region][mem]['price_val'];
    const roundedMonetaryCost = parseInt(monetaryCost.toFixed(0));
    costs.MonetaryCost.val = roundedMonetaryCost;
    // console.log('MonetaryCost: ' +roundedMonetaryCost+ ' [' +costs.MonetaryCost.type+ ']');

    // provisioning amount waste
    costs.ProvisioningAmountWaste = {};
    costs.ProvisioningAmountWaste.type = 'B';
    costs.ProvisioningAmountWaste.val = 0;
    // console.log('ProvisioningAmountWaste: ' +costs.ProvisioningAmountWaste.val+ ' [' +costs.ProvisioningAmountWaste.type+ ']');

    // provisioning time waste
    costs.ProvisioningTimeWaste = {};
    costs.ProvisioningTimeWaste.type = 'MS';
    costs.ProvisioningTimeWaste.val = 0;
    // console.log('ProvisioningTimeWaste: ' +costs.ProvisioningTimeWaste.val+ ' [' +costs.ProvisioningTimeWaste.type+ ']');

    // metering amount waste
    costs.MeteringAmountWaste = {};
    costs.MeteringAmountWaste.type = 'MB';
    costs.MeteringAmountWaste.val = metered_amount - used_amount;
    // console.log('MeteringAmountWaste: ' +costs.MeteringAmountWaste.val+ ' [' +costs.MeteringAmountWaste.type+ ']');

    // metering time waste
    costs.MeteringTimeWaste = {};
    costs.MeteringTimeWaste.type = 'MS';
    costs.MeteringTimeWaste.val = metered_duration - used_duration;
    // console.log('MeteringTimeWaste: ' +costs.MeteringTimeWaste.val+ ' [' +costs.MeteringTimeWaste.type+ ']');


    /**
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
    const monetaryRuntimeWaste = costs.RuntimeWaste.val * _prices[region][c.MemorySize.val] / _meteredDurationInMs / 1000;
    const roundedMonetaryRuntimeWaste = parseInt(monetaryRuntimeWaste.toFixed(0));
    costs.MonetaryRuntimeWaste.val = roundedMonetaryRuntimeWaste;
    // console.log('MonetaryRuntimeWaste: ' +costs.MonetaryRuntimeWaste.val);

    // memory waste
    costs.MemoryWaste = {};
    costs.MemoryWaste.type = 'MB';
    costs.MemoryWaste.val = c.MemorySize.val - c.MaxMemoryUsed.val;
    // console.log('MemoryWaste: ' +costs.MemoryWaste.val);

    // TODO monetary memory waste

     */

    return costs;

};