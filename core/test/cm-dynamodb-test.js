/**
 * Created by Joern Kuhlenkamp on 29.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const model = require('../client/pricing/dynamodb');

describe('AWS DynamoDB Table (QUERY) - ', () => {

    let input, output;

    before( () => {
        input = require('./in/dynamodb-query.json');
        output = model( input );
    });

    it('MonetaryCost: 10KB, 3RCU => 0.098USD / 1 mio. req', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(0.098);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('USD');
        done();
    });

    it('PayloadWaste: 10KB, 3RCU => 2KB / req.', done => {
        expect(output.PayloadWaste.val).to.be.a('number');
        expect(output.PayloadWaste.val).to.equal(2);
        expect(output.PayloadWaste.type).to.be.a('string');
        expect(output.PayloadWaste.type).to.equal('KB');
        done();
    });

    /**
    it('MonetaryPayloadWaste: 6KB, 2RCU => { "val": , "type": "USD" }', done => {
        expect(output.MonetaryRuntimeWaste.val).to.be.a('number');
        expect(output.MonetaryRuntimeWaste.val).to.equal(0.000065);
        expect(output.MonetaryRuntimeWaste.type).to.be.a('string');
        expect(output.MonetaryRuntimeWaste.type).to.equal('USD');
        done();
    });
     */

});

describe('AWS DynamoDB Table (PUT) - ', () => {

    let input, output;

    before( () => {
        input = require('./in/dynamodb-put.json');
        output = model( input );
    });

    it('MonetaryCost: 2.5KB, 3RCU => 0.49USD / 1 mio req.', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(0.49);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('USD');
        done();
    });

    it('PayloadWaste: 2.5KB, 3RCU => 0.5 KB / req.', done => {
        expect(output.PayloadWaste.val).to.be.a('number');
        expect(output.PayloadWaste.val).to.equal(0.5);
        expect(output.PayloadWaste.type).to.be.a('string');
        expect(output.PayloadWaste.type).to.equal('KB');
        done();
    });

    /**
    it('MonetaryPayloadWaste: 1.5KB, 2RCU => { "val": , "type": "USD" }', done => {
        expect(output.MonetaryRuntimeWaste.val).to.be.a('number');
        expect(output.MonetaryRuntimeWaste.val).to.equal(0.000325);
        expect(output.MonetaryRuntimeWaste.type).to.be.a('string');
        expect(output.MonetaryRuntimeWaste.type).to.equal('USD');
        done();
    });
    */
});