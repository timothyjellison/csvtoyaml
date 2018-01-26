const csv = require('csvtojson');
const YAML = require('json2yaml');
const fs = require('fs');
const _ = require('lodash');
const camelcase = require('camelcase');

module.exports = (inputPath, outputPath) => {
  const rawData = [];
  let output;

  const x = csv()
  .fromFile(inputPath)
  .on('json', x => {
    rawData.push(JSON.stringify(x));
  })
  .on('done', () => {
    const data = rawData.map((datum) => JSON.stringify(_.mapKeys(JSON.parse(datum), (val, key) => camelcase(key))));

    fs.writeFile(outputPath, YAML.stringify(JSON.parse(`[${data.join(',')}]`)), (err) => {
      if (err) console.error(err);
    });
  });
};
