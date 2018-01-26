# csvtoyaml v.0.1.2

Convert csv files to yaml files.

## Installation

```
npm install csvtoyaml --save
```

## Use

```javascript
const csvtoyaml = require('csvtoyaml');

csvtoyaml('boringUgly.csv', 'excitingNew.yaml');
```

## Dependencies

All this package does is pipe [csvtojson](https://www.npmjs.com/package/csvtojson) output through [json2yaml](https://www.npmjs.com/package/json2yaml), so a zillion and one thanks to those teams for their amazing work.


### Project Goals

#### January 2018
[x] create this repo
[x] publish to npm
[ ] add unit tests
[ ] use best practices for package.json [following this article](http://cruft.io/posts/node-command-line-utilities/)
