# csvtoyaml

Convert csv files to yaml.

[![Build Status](https://travis-ci.org/timothyjellison/csvtoyaml.svg?branch=master)](https://travis-ci.org/timothyjellison/csvtoyaml)

## Installation

```
npm install csvtoyaml --save
```

## Use

csvtoyaml returns a Promise so you can manipulate the yaml string in the `then` method. Here's an example of writing the yaml string to the disk.

```javascript
const csvtoyaml = require('csvtoyaml');
const fs = require('fs');

csvtoyaml('${__dirname}/myData.csv')
.then(yaml => {
  fs.writeFile('${__dirname}/myData.yml', yaml);
})
.catch(e => {
  console.error(e);
});
```
