/**
 * Created by jk on 24.05.17.
 */

"use strict";

// ..., SOURCE: (https://aws.amazon.com/kinesis/streams/pricing, accessed: 2017/05/29)
const _prices = {
    'us-west-1': {
        PUTPU: 0.014,
        SHARD: {
            BASE: 0.015,
            EXTENDED: 0.035
        }
    },
    'eu-west-1': {
        PUTPU: 0.0165,
        SHARD: {
            BASE: 0.017,
            EXTENDED: 0.04
        }
    },
    'eu-central-1': {
        PUTPU: 0.0175,
        SHARD: {
            BASE: 0.018,
            EXTENDED: 0.042
        }
    }
};

const _price = (region, type) => {
    //return _prices[region][type];
};

/**
 * Models cost and waste metrics for a single invocation based on a set of consumption metrics.
 *
 * @param c                     Consumption object.
 * @param c.PayloadSize         Size of the message that is written to or retrieved from a Kinesis table.
 *                              Example: { val: 1.5, type: 'KB' }
 * @param c.Operation           Specifies if the operation is a READ or WRITE operation.
 *                              Example: { val: 'READ', type: 'KINESISOPERATION' }
 * @param c.Latency             Request-Response latency of the operation.
 *                              Example: { val: 800, type: 'MS' }
 */
module.exports = c => {

    let costs = {};

    const region = 'us-west-1';

    if ( c.PayloadSize.type !== 'KB') {
        new Error('InvalidParameterError: Payload must be specified in KB.' + c);
    }

    if ( c.Operation.type !== 'KINESISOPERATION' || !(c.Operation.val === 'READ' || c.Operation.val === 'WRITE')) {
        new Error('InvalidParameterError: Operation must be of type \'KINESISOPERATION\' and value [WRITE, READ].' + c);
    }

    if ( c.Latency.type !== 'MS') {
        new Error('InvalidParameterError: Durations must be specified in MS.' + c);
    }

    if (isNaN(c.PayloadSize.val) || isNaN(c.Latency.val)) {
        new Error('InvalidParameterError: ' + c);
    }

    if (typeof c.PayloadSize.val === 'string')      c.PayloadSize.val = +c.PayloadSize.val;
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

     */
    return costs;

};