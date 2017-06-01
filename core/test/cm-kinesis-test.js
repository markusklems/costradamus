/**
 * Created by Joern Kuhlenkamp on 29.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const model = require('../client/pricing/kinesis');

describe('AWS Kinesis Stream (Region = eu-west-1, PayloadSize = 256 KB, Operation = READ, Latency = 800 ms):', () => {

  let input, output;

  before(() => {
    input = require('./in/kinesis-read2.json');
    output = model(input);
  });

  it('MonetaryCost: 533 NANO-USD', done => {
    expect(output.MonetaryCost.val).to.be.a('number');
    expect(output.MonetaryCost.val).to.equal(533);
    expect(output.MonetaryCost.type).to.be.a('string');
    expect(output.MonetaryCost.type).to.equal('NANO-USD');
    done();
  });

  /**
  it('ProvisioningAmountWaste: ? B', done => {
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

  /**
  it('MonetaryCost: 256KB, READ => ~0.284', done => {
      expect(output.MonetaryCost.val).to.be.a('number');
      expect(output.MonetaryCost.val.toFixed(3)).to.equal('0.284');
      expect(output.MonetaryCost.type).to.be.a('string');
      expect(output.MonetaryCost.type).to.equal('USD');
      done();
  });


  it('PayloadWaste: 256KB, READ => ?', done => {
      expect(output.PayloadWaste.val).to.be.a('number');
      // expect(output.PayloadWaste.val).to.equal(2);
      expect(output.PayloadWaste.type).to.be.a('string');
      expect(output.PayloadWaste.type).to.equal('KB');
      done();
  });
   */

});

describe('AWS Kinesis Stream (PayloadSize = 128 KB, Operation = WRITE, Latency = 800 ms) - ', () => {

  let input, output;

  before(() => {
    input = require('./in/kinesis-write.json');
    output = model(input);
  });

  it('MonetaryCost: 709 NANO-USD', done => {
    expect(output.MonetaryCost.val).to.be.a('number');
    expect(output.MonetaryCost.val).to.equal(709);
    expect(output.MonetaryCost.type).to.be.a('string');
    expect(output.MonetaryCost.type).to.equal('NANO-USD');
    done();
  });

  /**
  it('MonetaryCost: 128KB, WRITE => ~0.226', done => {
      expect(output.MonetaryCost.val).to.be.a('number');
      expect(output.MonetaryCost.val.toFixed(3)).to.equal('0.226');
      expect(output.MonetaryCost.type).to.be.a('string');
      expect(output.MonetaryCost.type).to.equal('USD');
      done();
  });

  it('PayloadWaste: 128KB, WRITE => ?', done => {
      expect(output.PayloadWaste.val).to.be.a('number');
      // expect(output.PayloadWaste.val).to.equal(0.5);
      expect(output.PayloadWaste.type).to.be.a('string');
      expect(output.PayloadWaste.type).to.equal('KB');
      done();
  });
   */

});
