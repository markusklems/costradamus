/**
 * Created by Joern Kuhlenkamp on 24.05.17.
 */

'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const LambdaModel = require('../client/pricing/lambda');


describe('AWS Lambda Function (Duration = 281 ms, MaxMemoryUsed = 43 MB, BilledDuration = 300 ms, MemorySize = 1024 MB).', function() {

  let input, output;

  before(() => {
    input = require('./in/lambda-weird.json');
    output = LambdaModel(input);
  });

  it('MonetaryCost: 5001 NANO-USD', done => {
    expect(output.MonetaryCost.val).to.be.a('number');
    expect(output.MonetaryCost.val).to.equal(5001);
    expect(output.MonetaryCost.type).to.be.a('string');
    expect(output.MonetaryCost.type).to.equal('NANO-USD');
    done();
  });

  it('ProvisioningAmountWaste: 0 B', done => {
    expect(output.ProvisioningAmountWaste.val).to.be.a('number');
    expect(output.ProvisioningAmountWaste.val).to.equal(0);
    expect(output.ProvisioningAmountWaste.type).to.be.a('string');
    expect(output.ProvisioningAmountWaste.type).to.equal('B');
    done();
  });

  it('ProvisioningTimeWaste: 0 MS', done => {
    expect(output.ProvisioningTimeWaste.val).to.be.a('number');
    expect(output.ProvisioningTimeWaste.val).to.equal(0);
    expect(output.ProvisioningTimeWaste.type).to.be.a('string');
    expect(output.ProvisioningTimeWaste.type).to.equal('MS');
    done();
  });

  it('MeteringAmountWaste: 981 B', done => {
    expect(output.MeteringAmountWaste.val).to.be.a('number');
    expect(output.MeteringAmountWaste.val).to.equal(981);
    expect(output.MeteringAmountWaste.type).to.be.a('string');
    expect(output.MeteringAmountWaste.type).to.equal('MB');
    done();
  });

  it('MeteringTimeWaste: 19 MS', done => {
    expect(output.MeteringTimeWaste.val).to.be.a('number');
    expect(output.MeteringTimeWaste.val).to.equal(19);
    expect(output.MeteringTimeWaste.type).to.be.a('string');
    expect(output.MeteringTimeWaste.type).to.equal('MS');
    done();
  });

  /**
  it('MonetaryCost: BilledDuration = 300 ms, MemorySize = 1024 MB => 5001 NANO-USD.', done => {
    expect(output.MonetaryCost.val).to.be.a('number');
    expect(output.MonetaryCost.val).to.equal(5001);
    expect(output.MonetaryCost.type).to.be.a('string');
    expect(output.MonetaryCost.type).to.equal('NANO-USD');
    done();
  });

  it('RuntimeWaste: BilledDuration = 300 ms, Duration = 281.48 ms => 1852 us.', done => {
    expect(output.RuntimeWaste.val).to.be.a('number');
    expect(output.RuntimeWaste.val).to.equal(18520);
    expect(output.RuntimeWaste.type).to.be.a('string');
    expect(output.RuntimeWaste.type).to.equal('US');
    done();
  });

  it('MonetaryRuntimeWaste: RuntimeWaste = 1.852 ms, MemorySize = 1024 MB => 309 NANO-USD.', done => {
    expect(output.MonetaryRuntimeWaste.val).to.be.a('number');
    expect(output.MonetaryRuntimeWaste.val).to.equal(309);
    expect(output.MonetaryRuntimeWaste.type).to.be.a('string');
    expect(output.MonetaryRuntimeWaste.type).to.equal('NANO-USD');
    done();
  });

  it('MemoryWaste: MemorySize = 1024 MB, MaxMemoryUsed = 43 MB => 981 MB.', done => {
    expect(output.MemoryWaste.val).to.be.a('number');
    expect(output.MemoryWaste.val).to.equal(981);
    expect(output.MemoryWaste.type).to.be.a('string');
    expect(output.MemoryWaste.type).to.equal('MB');
    done();
  });
   */

});
