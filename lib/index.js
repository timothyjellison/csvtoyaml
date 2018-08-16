const csv = require('csvtojson');
const YAML = require('json2yaml');

module.exports = (src) => {
  return new Promise((resolve, reject) => {
    try {
      if (!src || typeof src !== 'string') {
        throw new Error('csvtoyaml requires a single argument: a string pointing to a csv file.');
      }

      const csvRowsAsJson = [];

      csv()
        .fromFile(src)
        .on('json', rowAsJson => csvRowsAsJson.push(rowAsJson))
        .on('done', () => {
          resolve(YAML.stringify(JSON.parse(`[${csvRowsAsJson.map((row) => {
            return JSON.stringify(row);
          }).join(',')}]`)));
        });
    } catch (e) {
      reject(e);
    }
  });
};
