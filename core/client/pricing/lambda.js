/**
 * Created by jk on 24.05.17.
 */

"use strict";

const eu_west_1_prices = {
     128: 0.000000208,
     192: 0.000000313,
     256: 0.000000417,
     320: 0.000000521,
     384: 0.000000625,
     448: 0.000000729,
     512: 0.000000834,
     576: 0.000000938,
     640: 0.000001042,
     704: 0.000001146,
     768: 0.000001250,
     832: 0.000001354,
     896: 0.000001459,
     960: 0.000001563,
    1024: 0.000001667,
    1088: 0.000001771,
    1152: 0.000001875,
    1216: 0.000001980,
    1280: 0.000002084,
    1344: 0.000002188,
    1408: 0.000002292,
    1472: 0.000002396,
    1536: 0.000002501
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
 * @param c.BilledDuration
 * @param c.Duration
 * @param c.MemorySize
 * @param c.MaxMemoryUsed
 * @returns {{}}    monetaryCost, runtimeWaste, monetaryRuntimeWaste, memoryWaste
 */
module.exports = c => {

    let costs= {};

    // execution cost
    costs.monetaryCost = c.BilledDuration * eu_west_1_prices[c.MemorySize];

    // runtime waste
    costs.runtimeWaste = c.BilledDuration - c.Duration;

    // monetary runtime waste
    costs.monetaryRuntimeWaste = costs.runtimeWaste * eu_west_1_prices[c.MemorySize];

    // memory waste
    costs.memoryWaste = c.MemorySize - c.MaxMemoryUsed;

    // TODO monetary memory waste

    return costs;

};