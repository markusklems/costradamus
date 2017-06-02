/**
 * Created by Joern Kuhlenkamp on 29.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const model = require('../client/pricing/dynamodb');

describe('AWS DynamoDB Table (10KB, 3RCU, 800ms) - ', () => {

    let input, output;

    before( () => {
        // input = require('./in/dynamodb-query.json');
        input = {
            "PayloadSize":      { "val": "10000",    "type": "B" },
            "CapacityUnits":    { "val":     "3",    "type": "RCU" },
            "Latency":          { "val":   "800",    "type": "MS" }
        };
        output = model( input );
    });

    it('MonetaryCost: 108 NANO-USD', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(108);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('NANO-USD');
        done();
    });

    it('ProvisioningAmountWaste: 190000 B', done => {
        expect(output.ProvisioningAmountWaste.val).to.be.a('number');
        expect(output.ProvisioningAmountWaste.val).to.equal(190000);
        expect(output.ProvisioningAmountWaste.type).to.be.a('string');
        expect(output.ProvisioningAmountWaste.type).to.equal('B');
        done();
    });

    it('ProvisioningTimeWaste: 3599200 MS', done => {
        expect(output.ProvisioningTimeWaste.val).to.be.a('number');
        expect(output.ProvisioningTimeWaste.val).to.equal(3599200);
        expect(output.ProvisioningTimeWaste.type).to.be.a('string');
        expect(output.ProvisioningTimeWaste.type).to.equal('MS');
        done();
    });

    it('MeteringAmountWaste: 2000 B', done => {
        expect(output.MeteringAmountWaste.val).to.be.a('number');
        expect(output.MeteringAmountWaste.val).to.equal(2000);
        expect(output.MeteringAmountWaste.type).to.be.a('string');
        expect(output.MeteringAmountWaste.type).to.equal('B');
        done();
    });

    it('MeteringTimeWaste: 200 MS', done => {
        expect(output.MeteringTimeWaste.val).to.be.a('number');
        expect(output.MeteringTimeWaste.val).to.equal(200);
        expect(output.MeteringTimeWaste.type).to.be.a('string');
        expect(output.MeteringTimeWaste.type).to.equal('MS');
        done();
    });

});

describe('AWS DynamoDB Table (2.5KB, 3WCU, 800ms) - ', () => {

    let input, output;

    before( () => {
        // input = require('./in/dynamodb-put.json');
        input = {
            "PayloadSize":      { "val": "2500",    "type": "B" },
            "CapacityUnits":    { "val":    "3",    "type": "WCU" },
            "Latency":          { "val":  "800",    "type": "MS" }
        };
        output = model( input );
    });

    it('MonetaryCost: 542 NANO-USD', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(542);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('NANO-USD');
        done();
    });

    it('ProvisioningAmountWaste: 7500 B', done => {
        expect(output.ProvisioningAmountWaste.val).to.be.a('number');
        expect(output.ProvisioningAmountWaste.val).to.equal(7500);
        expect(output.ProvisioningAmountWaste.type).to.be.a('string');
        expect(output.ProvisioningAmountWaste.type).to.equal('B');
        done();
    });

    it('ProvisioningTimeWaste: 3599200 MS', done => {
        expect(output.ProvisioningTimeWaste.val).to.be.a('number');
        expect(output.ProvisioningTimeWaste.val).to.equal(3599200);
        expect(output.ProvisioningTimeWaste.type).to.be.a('string');
        expect(output.ProvisioningTimeWaste.type).to.equal('MS');
        done();
    });

    it('MeteringAmountWaste: 500 B', done => {
        expect(output.MeteringAmountWaste.val).to.be.a('number');
        expect(output.MeteringAmountWaste.val).to.equal(500);
        expect(output.MeteringAmountWaste.type).to.be.a('string');
        expect(output.MeteringAmountWaste.type).to.equal('B');
        done();
    });

    it('MeteringTimeWaste: 200 MS', done => {
        expect(output.MeteringTimeWaste.val).to.be.a('number');
        expect(output.MeteringTimeWaste.val).to.equal(200);
        expect(output.MeteringTimeWaste.type).to.be.a('string');
        expect(output.MeteringTimeWaste.type).to.equal('MS');
        done();
    });

});

describe('AWS DynamoDB Table (2.5KB, 3WCU, 700ms) - ', () => {

    let input, output;

    before( () => {
        // input = require('./in/dynamodb-put.json');
        input = {
            "PayloadSize":      { "val": "2500",    "type": "B" },
            "CapacityUnits":    { "val":    "3",    "type": "WCU" },
            "Latency":          { "val":  "700",    "type": "MS" }
        };
        output = model( input );
    });

    it('MonetaryCost: 542 NANO-USD', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(542);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('NANO-USD');
        done();
    });

    it('ProvisioningAmountWaste: 7500 B', done => {
        expect(output.ProvisioningAmountWaste.val).to.be.a('number');
        expect(output.ProvisioningAmountWaste.val).to.equal(7500);
        expect(output.ProvisioningAmountWaste.type).to.be.a('string');
        expect(output.ProvisioningAmountWaste.type).to.equal('B');
        done();
    });

    it('ProvisioningTimeWaste: 3599200 MS', done => {
        expect(output.ProvisioningTimeWaste.val).to.be.a('number');
        expect(output.ProvisioningTimeWaste.val).to.equal(3599300);
        expect(output.ProvisioningTimeWaste.type).to.be.a('string');
        expect(output.ProvisioningTimeWaste.type).to.equal('MS');
        done();
    });

    it('MeteringAmountWaste: 500 B', done => {
        expect(output.MeteringAmountWaste.val).to.be.a('number');
        expect(output.MeteringAmountWaste.val).to.equal(500);
        expect(output.MeteringAmountWaste.type).to.be.a('string');
        expect(output.MeteringAmountWaste.type).to.equal('B');
        done();
    });

    it('MeteringTimeWaste: 200 MS', done => {
        expect(output.MeteringTimeWaste.val).to.be.a('number');
        expect(output.MeteringTimeWaste.val).to.equal(300);
        expect(output.MeteringTimeWaste.type).to.be.a('string');
        expect(output.MeteringTimeWaste.type).to.equal('MS');
        done();
    });

});