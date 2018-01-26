const fs = require('fs');
const csv = require('csvtojson');
const YAML = require('json2yaml');
const camelcase = require('camelcase');

module.exports = (inputPath, outputPath) => {
  const rawData = [];

  csv()
  .fromFile(inputPath)
  .on('json', x => rawData.push(x))
  .on('done', () => {
    const data = rawData.map((datum) => {
      const camelCasedDatum = {};

      Object.keys(datum).forEach((key) => {
        camelCasedDatum[camelcase(key)] = datum[key];
      });

      return JSON.stringify(camelCasedDatum);
    });

    const arrayOfAllData = JSON.parse(`[${data.join(',')}]`);

    fs.writeFile(outputPath, YAML.stringify(arrayOfAllData), (err) => {
      if (err) console.error(err);
    });
  });
};
