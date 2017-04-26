# ndbc-realtime-tojson

[![Build Status](https://travis-ci.org/calweb/ndbc-realtime-tojson.png?branch=master)](https://travis-ci.org/calweb/ndbc-realtime-tojson)

Use this module to convert NOAA National Data Bouy Center text product data to json.

## Information

<table>
<tr>
<td>Package</td><td>ndbc-realtime-tojson</td>
</tr>
<tr>
<td>Description</td>
<td>convert NOAA National Data Bouy Center text product data to json</td>
</tr>
<tr>
<td>Node Version</td>
<td>~ 6.9.1</td>
</tr>
</table>

## Usage

```js
const ndbcToJSON = require('ndbc-realtime-tojson')

// `41004` is the Edisto Bouy Id off of SC coast
// `spec` is the type of data (spectral wave data)
// http://www.ndbc.noaa.gov/rt_data_access.shtml
ndbcToJSON('41004', 'spec').then(bouyData => {
    console.log(bouyData)
})

```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request

## License

_ndbc-realtime-tojson_ is available under the [MIT](https://mths.be/mit) license.
