/* eslint no-undef: 0 */
const { expect } = require('chai');
const csvtoyaml = require('../index');

describe('csvtoyaml', () => {
  it('outputs a Promise object', () => {
    const yamlReader = csvtoyaml(`${__dirname}/test.csv`);
    expect(yamlReader).to.be.a('promise');
  });

  it('reads data from a csv file and output yaml', async () => {
    const data = await csvtoyaml(`${__dirname}/test.csv`);
    expect(data).to.equal('---\n  - \n    a: "1"\n    b: "2"\n');
  });

  it('throws an Error with helpful message if the user forgets to pass a filename', async () => {
    try {
      await csvtoyaml();
    } catch (e) {
      expect(e.constructor === Error);
      expect(e.message).to.equal('csvtoyaml requires a single argument: a string pointing to a csv file.');
    }
  });
});
