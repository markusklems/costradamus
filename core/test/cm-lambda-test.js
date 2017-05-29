/**
 * Created by Joern Kuhlenkamp on 24.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const LambdaModel = require('../client/pricing/lambda');

describe('AWS Lambda function.', function () {

    let input, output;

    before( () => {
        input = require('./in/lambda.json');
        output = LambdaModel( input );
    });

    it('MonetaryCost: 300 MS * 0.000000208 USD / 100 MS => { "val": 0.624, "type": "USD" }', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val).to.equal(0.624);
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('USD');
        done();
    });

    it('RuntimeWaste: 300 MS - 250.00 MS => { "val": 50, "type": "MS" }', done => {
        expect(output.RuntimeWaste.val).to.be.a('number');
        expect(output.RuntimeWaste.val).to.equal(50);
        expect(output.RuntimeWaste.type).to.be.a('string');
        expect(output.RuntimeWaste.type).to.equal('MS');
        done();
    });

    it('MonetaryRuntimeWaste: 50 MS * 0.000000208 USD / 100 MS => { "val": 0.104, "type": "MS" }', done => {
        expect(output.MonetaryRuntimeWaste.val).to.be.a('number');
        expect(output.MonetaryRuntimeWaste.val).to.equal(0.104);
        expect(output.MonetaryRuntimeWaste.type).to.be.a('string');
        expect(output.MonetaryRuntimeWaste.type).to.equal('MS');
        done();
    });

    it('MemoryWaste: 128 MB - 48 MB => { "val": 80, "type": "MB" }', done => {
        expect(output.MemoryWaste.val).to.be.a('number');
        expect(output.MemoryWaste.val).to.equal(80);
        expect(output.MemoryWaste.type).to.be.a('string');
        expect(output.MemoryWaste.type).to.equal('MB');
        done();
    });

});