const csvtoyaml = require('../index');
const {expect} = require('chai');
const path = require('path');
const fs = require('fs');

describe('csvtoyaml', () => {
  it('outputs a Promise object', () => {
    const yamlReader = csvtoyaml(`${__dirname}/test.csv`);
    expect(yamlReader).to.be.a('promise');
  });

  it('reads data from a csv file and output yaml', async function() {
    const data = await csvtoyaml(`${__dirname}/test.csv`);
    expect(data).to.equal('---\n  - \n    a: "1"\n    b: "2"\n');
  });

  it('has a helpful error message if the user forgets to pass a filename', async function() {
    try {
      await csvtoyaml();
    } catch(e) {
      expect(e).to.equal('csvtoyaml requires a single argument: a string pointing to a csv file.');
    }
  });
});
