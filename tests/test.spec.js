const csvtoyaml = require('../index');
const {expect} = require('chai');
const path = require('path');
const fs = require('fs');

describe('csvtoyaml', () => {
  it('outputs a Promise object', (done) => {
    const yamlReader = csvtoyaml(`${__dirname}/test.csv`);

    expect(yamlReader).to.be.a('promise');
    done();
  });
});
