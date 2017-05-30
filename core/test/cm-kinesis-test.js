/**
 * Created by Joern Kuhlenkamp on 29.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const model = require('../client/pricing/kinesis');

describe('AWS Kinesis Stream (READ, Base Retention) - ', () => {

    let input, output;

    before( () => {
        input = require('./in/kinesis-read.json');
        output = model( input );
    });

    it('MonetaryCost: 256KB, READ => ~0.284', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val.toFixed(3)).to.equal('0.284');
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('USD');
        done();
    });

    /**
    it('PayloadWaste: 256KB, READ => ?', done => {
        expect(output.PayloadWaste.val).to.be.a('number');
        // expect(output.PayloadWaste.val).to.equal(2);
        expect(output.PayloadWaste.type).to.be.a('string');
        expect(output.PayloadWaste.type).to.equal('KB');
        done();
    });
     */

});

describe('AWS Kinesis Stream (WRITE, Base Retention) - ', () => {

    let input, output;

    before( () => {
        input = require('./in/kinesis-write.json');
        output = model( input );
    });

    it('MonetaryCost: 128KB, WRITE => ~0.226', done => {
        expect(output.MonetaryCost.val).to.be.a('number');
        expect(output.MonetaryCost.val.toFixed(3)).to.equal('0.226');
        expect(output.MonetaryCost.type).to.be.a('string');
        expect(output.MonetaryCost.type).to.equal('USD');
        done();
    });

    /**
    it('PayloadWaste: 128KB, WRITE => ?', done => {
        expect(output.PayloadWaste.val).to.be.a('number');
        // expect(output.PayloadWaste.val).to.equal(0.5);
        expect(output.PayloadWaste.type).to.be.a('string');
        expect(output.PayloadWaste.type).to.equal('KB');
        done();
    });
     */

});