/**
 * Created by jk on 24.05.17.
 */

"use strict";

// ..., SOURCE: (https://aws.amazon.com/kinesis/streams/pricing, accessed: 2017/05/29)


const _shard = {
    'us-east-1': {
        BASE: {
            READ: {
                price_val: 15000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 2000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 1000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            },
            WRITE: {
                price_val: 15000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 1000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 25000,
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            }
        },
        EXTENDED: {
            READ: {
                price_val: 35000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 2000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 1000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            },
            WRITE: {
                price_val: 35000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 1000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 25000,
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            }
        }
    },
    'eu-west-1': {
        BASE: {
            READ: {
                price_val: 17000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 2000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 1000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            },
            WRITE: {
                price_val: 17000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 1000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 25000,
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            }
        },
        EXTENDED: {
            READ: {
                price_val: 40000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 2000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 1000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            },
            WRITE: {
                price_val: 40000000,
                price_unit: 'NANO-USD',
                provisioning_amount_val: 1000000,
                provisioning_amount_unit: 'B',
                provisioning_duration_val: 3600000,
                provisioning_duration_unit: 'MS',
                metering_amount_val: 25000,
                metering_amount_unit: 'B',
                metering_duration_val: 1000,
                metering_duration_unit: 'MS'
            }
        }
    }
};

const _payload = {
    'us-east-1': {
        READ: {
            price_val: 0,
            price_unit: 'NANO-USD',
            provisioning_amount_val: 25000,          // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
            provisioning_amount_unit: 'B',
            provisioning_duration_val: 1000,
            provisioning_duration_unit: 'MS',
            metering_amount_val: 25000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
            metering_amount_unit: 'B',
            metering_duration_val: 1000,
            metering_duration_unit: 'MS'
        },
        WRITE: {
            price_val: 14,
            price_unit: 'NANO-USD',
            provisioning_amount_val: 25000,
            provisioning_amount_unit: 'B',
            provisioning_duration_val: 1000,
            provisioning_duration_unit: 'MS',
            metering_amount_val: 25000,
            metering_amount_unit: 'B',
            metering_duration_val: 1000,
            metering_duration_unit: 'MS'
        }
    },
    'eu-west-1': {
        READ: {
            price_val: 0,
            price_unit: 'NANO-USD',
            provisioning_amount_val: 25000,         // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
            provisioning_amount_unit: 'B',
            provisioning_duration_val: 1000,
            provisioning_duration_unit: 'MS',
            metering_amount_val: 1000,              // WE DID NOT FIND AN EXPLICIT STATEMENT FOR THIS PARAMETER
            metering_amount_unit: 'B',
            metering_duration_val: 1000,
            metering_duration_unit: 'MS'
        },
        WRITE: {
            price_val: 16.5,
            price_unit: 'NANO-USD',
            provisioning_amount_val: 25000,
            provisioning_amount_unit: 'B',
            provisioning_duration_val: 1000,
            provisioning_duration_unit: 'MS',
            metering_amount_val: 25000,
            metering_amount_unit: 'B',
            metering_duration_val: 1000,
            metering_duration_unit: 'MS'
        }
    }
};




const _prices = {
    'us-east-1': {
        UNIT: {
            READ: 0,
            WRITE: 0.014
        },
        SHARD: {
            BASE: 0.015,
            EXTENDED: 0.035
        }
    },
    'eu-west-1': {
        UNIT: {
            READ: 0,
            WRITE: 0.0165
        },
        SHARD: {
            BASE: 0.017,
            EXTENDED: 0.04
        }
    },
    'eu-central-1': {
        UNIT: {
            READ: 0,
            WRITE: 0.0175
        },
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

    const region = 'us-east-1';
    const retention = 'BASE';

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
    costs.MonetaryCost.type = 'NANO-USD';

    const op_type = c.Operation.val;

    const used_amount_in_bytes = c.PayloadSize.val * 1000;
    const used_duration_in_ms = c.Latency.val;

    const shard_metered_amount_in_bytes = Math.ceil( used_amount_in_bytes / _shard[region][retention][op_type]['metering_amount_val'] ) * _shard[region][retention][op_type]['metering_amount_val'];
    const shard_metered_duration_in_ms = Math.ceil( used_duration_in_ms / _shard[region][retention][op_type]['metering_duration_val'] ) * _shard[region][retention][op_type]['metering_duration_val'];
    const shardMonetaryCost = shard_metered_amount_in_bytes / _shard[region][retention][op_type]['provisioning_amount_val'] * shard_metered_duration_in_ms / _shard[region][retention][op_type]['provisioning_duration_val'] * _shard[region][retention][op_type]['price_val'];

    const payload_metered_amount_in_bytes = Math.ceil( used_amount_in_bytes / _payload[region][op_type]['metering_amount_val'] ) * _payload[region][op_type]['metering_amount_val'];
    const payload_metered_duration_in_ms = Math.ceil( used_duration_in_ms / _payload[region][op_type]['metering_duration_val'] ) * _payload[region][op_type]['metering_duration_val'];
    const payloadMonetaryCost = payload_metered_amount_in_bytes / _payload[region][op_type]['provisioning_amount_val'] * payload_metered_duration_in_ms / _payload[region][op_type]['provisioning_duration_val'] * _payload[region][op_type]['price_val'];

    //console.log('metered_amount_in_bytes: '+shard_metered_amount_in_bytes+', measured_duration_in_ms: ' +shard_metered_duration_in_ms);

    const monetaryCost = shardMonetaryCost + payloadMonetaryCost;
    
    costs.MonetaryCost.val = parseInt( monetaryCost.toFixed(0) );


    /**
    costs.MonetaryCost.type = 'USD';

    const shardPricePerMioReq = _prices[region]['SHARD'][retention] / 3 * c.Latency.val / 3600 * c.PayloadSize.val;

    const unitsCostPerMioReq = _prices[region]['UNIT'][c.Operation.val] * Math.ceil(c.PayloadSize.val / 25);

    costs.MonetaryCost.val = shardPricePerMioReq + unitsCostPerMioReq;
    */

    return costs;

};