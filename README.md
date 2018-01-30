# csvtoyaml

Convert csv files to yaml.
Current version: 1.0.0

## Installation

```
npm install csvtoyaml --save
```

## Use

csvtoyaml returns a Promise object, so you can do whatever you want with the yaml string in the then method. Here's an example of writing the yaml to the disk using Node's built-in file system library.

```javascript
const csvtoyaml = require('csvtoyaml');
const fs = require('fs');

csvtoyaml('./boringUgly.csv')
.then(yaml => {
  fs.writeFile('newExciting.yml', yaml);
})
.catch(e => {
  console.error(e);
});
```

## Dependencies

All this package does is pipe [csvtojson](https://www.npmjs.com/package/csvtojson) output through [json2yaml](https://www.npmjs.com/package/json2yaml), so a zillion and one thanks to those teams for their amazing work.


### Project Goals

#### January 2018
- [x] create this repo
- [x] publish to npm
- [ ] add unit tests
- [ ] use best practices for package.json [following this article](http://cruft.io/posts/node-command-line-utilities/)
