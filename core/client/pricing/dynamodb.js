/**
 * Created by jk on 24.05.17.
 */

"use strict";

// Price for 1 mio write capacity units per hour in USD, SOURCE: (https://aws.amazon.com/dynamodb/pricing/, accessed: 2017/05/29)
const _prices = {
    'us-west-1': {
        WCU: 650,
        RCU: 130
    },
    'eu-west-1': {
        WCU: 735,
        RCU: 147
    },
    'eu-central-1': {
        WCU: 735,
        RCU: 147
    }
};

const _price = (region, type) => {
  return _prices[region][type];  
};

/**
 * Models cost and waste metrics for a single invocation based on a set of consumption metrics.
 *
 * @param c                     Consumption object.
 * @param c.PayloadSize         Size of the item that is written to or queried from a DynamoDB table.
 *                              Example: { val: 1.5, type: 'KB' }
 * @param c.CapacityUnits       Number of capacity units that are consumed by the operation.
 *                              Example: { val: 2, type: 'WCU' }
 * @param c.Latency             Request-Response latency of the operation.
 *                              Example: { val: 800, type: 'MS' }
 */
module.exports = c => {

    let costs = {};

    const region = 'us-west-1';

    if ( c.PayloadSize.type !== 'KB') {
        new Error('InvalidParameterError: Payload must be specified in KB.' + c);
    }

    if ( c.CapacityUnits.type !== 'WCU' || c.CapacityUnits.type !== 'RCU') {
        new Error('InvalidParameterError: Durations must be one of [WCU, RCU].' + c);
    }

    if ( c.Latency.type !== 'MS') {
        new Error('InvalidParameterError: Durations must be specified in MS.' + c);
    }

    if (isNaN(c.PayloadSize.val) || isNaN(c.CapacityUnits.val) || isNaN(c.Latency.val)) {
        new Error('InvalidParameterError: ' + c);
    }

    if (typeof c.PayloadSize.val === 'string')      c.PayloadSize.val = +c.PayloadSize.val;
    if (typeof c.CapacityUnits.val === 'string')    c.CapacityUnits.val = +c.CapacityUnits.val;
    if (typeof c.Latency.val === 'string')          c.Latency.val = +c.Latency.val;

    // monetary operation cost
    costs.MonetaryCost = {};
    costs.MonetaryCost.type = 'USD';
    costs.MonetaryCost.val = (c.CapacityUnits.val * c.Latency.val * _price('eu-west-1', c.CapacityUnits.type)) / 3600000;
    // console.log('MonetaryCost [USD]: ' +costs.MonetaryCost.val);

    // Runtime waste
    costs.PayloadWaste = {};
    costs.PayloadWaste.type = 'KB';
    if ( c.CapacityUnits.type === 'WCU' )
        costs.PayloadWaste.val = c.CapacityUnits.val - c.PayloadSize.val;
    if ( c.CapacityUnits.type === 'RCU')
        costs.PayloadWaste.val = c.CapacityUnits.val * 4 - c.PayloadSize.val;
    // console.log('PayloadWaste [KB]: ' +costs.PayloadWaste.val);

    // monetary runtime waste
    // costs.MonetaryPayloadWaste = {};
    // costs.MonetaryPayloadWaste.type = 'MS';
    // costs.MonetaryPayloadWaste.val = costs.RuntimeWaste.val * _price(region, c.MemorySize.val);
    // console.log('MonetaryRuntimeWaste: ' +costs.MonetaryRuntimeWaste.val);

    return costs;

};