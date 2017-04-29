const request = require('request')
const readline = require('readline')
const stream = require('stream')
const { arrFromString, objectifyData } = require('./lib')
// 'http://www.ndbc.noaa.gov/data/realtime2/41004.txt'
const BOUY_DATA_URL = 'http://www.ndbc.noaa.gov/data/realtime2'

/**
 * Takes an NDBC station id and an optional type (txt, spec) and will convert the textual
 * data and convert it to JSON.
 *
 * @func
 * @param {String} stationId The station id of the bouy from NDBC
 * @param {String} type
 * @returns {Promise}
 * @resolve {Array} Resolves to an array of objects containing relevant data on time interval
 * @reject {Object}
 * @example
 *
 *     ndbcToJSON('41004', 'spec').then(data => {
 *      // data -> [{...}, {...}]
 *     })
 */
module.exports = function (stationId, type = 'txt') {
  const dataUrl = `${BOUY_DATA_URL}/${stationId}.${type}`
  const outstream = new stream()
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface(request(dataUrl), outstream)
    let resultData = []
    rl.on('line', function (line) {
      resultData.push(arrFromString(line))
    }).on('close', function () {
      resolve(objectifyData(resultData))
    }).on('error', function (err) {
      reject(err)
    })
  })
}
