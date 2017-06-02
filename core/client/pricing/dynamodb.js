/**
 * Created by jk on 24.05.17.
 */

"use strict";

// Price for 1 mio write capacity units per hour in USD, SOURCE: (https://aws.amazon.com/dynamodb/pricing/, accessed: 2017/05/29)


const _dynamo = {
  'us-east-1': {
    WRITE: {
      price_val: 6500000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 10,
      provisioning_amount_unit: 'WCU', // WRITE CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600 s = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 1000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    },
    READ: {
      price_val: 6500000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 50,
      provisioning_amount_unit: 'RCU', // READ CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 4000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    }
  },
  'eu-west-1': {
    WRITE: {
      price_val: 7350000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 10,
      provisioning_amount_unit: 'WCU', // WRITE CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600 s = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 1000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    },
    READ: {
      price_val: 7350000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 50,
      provisioning_amount_unit: 'RCU', // READ CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 4000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    }
  },
  'eu-central-1': {
    WRITE: {
      price_val: 7930000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 10,
      provisioning_amount_unit: 'WCU', // WRITE CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600 s = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 1000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    },
    READ: {
      price_val: 7930000, // 0.0065 USD
      price_unit: 'NANO-USD', // 1 NANO-USD = 0.000000001 USD
      provisioning_amount_val: 50,
      provisioning_amount_unit: 'RCU', // READ CAPACITY UNITS
      provisioning_duration_val: 3600000, // 1 h = 3600000 ms
      provisioning_duration_unit: 'MS', // milliseconds (ms)
      metering_amount_val: 4000,
      metering_amount_unit: 'B', // 1000 B = 1 KB
      metering_duration_val: 1000, // 1000 ms = 1 s
      metering_duration_unit: 'MS' // milliseconds (ms)
    }
  }
};

/**
 * Models cost and waste metrics for a single invocation based on a set of consumption metrics.
 *
 * @param c                     Consumption object.
 * @param c.PayloadSize         Size of the item that is written to or queried from a DynamoDB table.
 *                              Example: { val: 1500, type: 'B' }
 * @param c.CapacityUnits       Number of capacity units that are consumed by the operation.
 *                              Example: { val: 2, type: 'WCU' }
 * @param c.Latency             Request-Response latency of the operation.
 *                              Example: { val: 800, type: 'MS' }
 * @param c.Datacenter          AWS region
 *                              Example: { val: 'eu-west-1', type: 'AWSREGION' }
 */
module.exports = c => {

  let costs = {},
    op_type, region;

  if (c.Datacenter === undefined) {
    region = require('../config.js').region;
  } else {
    region = c.Datacenter.val
  }

  if (c.PayloadSize.type !== 'B') {
    new Error('InvalidParameterError: Payload must be specified in B.' + c);
  }

  if (c.CapacityUnits.type !== 'WCU' || c.CapacityUnits.type !== 'RCU') {
    new Error('InvalidParameterError: Durations must be one of [WCU, RCU].' + c);
  }

  if (c.Latency.type !== 'MS') {
    new Error('InvalidParameterError: Durations must be specified in MS.' + c);
  }

  if (isNaN(c.PayloadSize.val) || isNaN(c.CapacityUnits.val) || isNaN(c.Latency.val)) {
    new Error('InvalidParameterError: ' + c);
  }

  if (typeof c.PayloadSize.val === 'string') c.PayloadSize.val = +c.PayloadSize.val;
  if (typeof c.CapacityUnits.val === 'string') c.CapacityUnits.val = +c.CapacityUnits.val;
  if (typeof c.Latency.val === 'string') c.Latency.val = +c.Latency.val;

  if (c.CapacityUnits.type === 'WCU') {
    op_type = 'WRITE';
  } else {
    op_type = 'READ';
  }

  // monetary cost of invocation
  costs.MonetaryCost = {};
  costs.MonetaryCost.type = 'NANO-USD';
  const meteredLatency = Math.ceil(c.Latency.val / _dynamo[region][op_type]['metering_duration_val']) * _dynamo[region][op_type]['metering_duration_val'];
  const monetaryCost = c.CapacityUnits.val / _dynamo[region][op_type]['provisioning_amount_val'] * meteredLatency / _dynamo[region][op_type]['provisioning_duration_val'] * _dynamo[region][op_type]['price_val'];
  const roundedMonetaryCost = parseInt(monetaryCost.toFixed(0));
  costs.MonetaryCost.val = roundedMonetaryCost;
  // console.log('MonetaryCost: ' +roundedMonetaryCost+ ' [' +costs.MonetaryCost.type+ ']');

  // provisioning amount waste
  costs.ProvisioningAmountWaste = {};
  costs.ProvisioningAmountWaste.type = 'B';

  //console.log('provisioning_amount_val: ' +provisioning_amount_val+ ', metering_amount_val: ' +metering_amount_val+ ', ');
  const provisioningAmountWaste = (_dynamo[region][op_type]['provisioning_amount_val'] * _dynamo[region][op_type]['metering_amount_val']) - (c.PayloadSize.val);
  costs.ProvisioningAmountWaste.val = provisioningAmountWaste;
  // console.log('ProvisioningAmountWaste: ' +provisioningAmountWaste+ ' [' +costs.ProvisioningAmountWaste.type+ ']');

  // provisioning time waste
  costs.ProvisioningTimeWaste = {};
  costs.ProvisioningTimeWaste.type = 'MS';
  const provisioningTimeWaste = _dynamo[region][op_type]['provisioning_duration_val'] - c.Latency.val;
  costs.ProvisioningTimeWaste.val = provisioningTimeWaste;
  // console.log('ProvisioningTimeWaste: ' +provisioningTimeWaste+ ' [' +costs.ProvisioningTimeWaste.type+ ']');

  // metering amount waste
  costs.MeteringAmountWaste = {};
  costs.MeteringAmountWaste.type = 'B';
  const meteringAmountWaste = _dynamo[region][op_type]['metering_amount_val'] - ((c.PayloadSize.val) % _dynamo[region][op_type]['metering_amount_val']);
  costs.MeteringAmountWaste.val = meteringAmountWaste;
  // console.log('MeteringAmountWaste: ' +meteringAmountWaste+ ' [' +costs.MeteringAmountWaste.type+ ']');

  // metering time waste
  costs.MeteringTimeWaste = {};
  costs.MeteringTimeWaste.type = 'MS';
  const meteringTimeWaste = _dynamo[region][op_type]['metering_duration_val'] - ((c.Latency.val) % _dynamo[region][op_type]['metering_duration_val']);
  costs.MeteringTimeWaste.val = meteringTimeWaste;
  // console.log('MeteringTimeWaste: ' +meteringTimeWaste+ ' [' +costs.MeteringTimeWaste.type+ ']');

  return costs;

};
