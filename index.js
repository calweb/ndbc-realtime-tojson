const request = require('request')
const readline = require('readline')
const stream = require('stream')
const { arrFromString, objectifyData } = require('./lib')
// 'http://www.ndbc.noaa.gov/data/realtime2/41004.txt'
module.exports = function (bouyDataUrl) {
  const outstream = new stream()
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface(request(bouyDataUrl), outstream)
    let resultData = []
    rl.on('line', function (line) {
      resultData.push(arrFromString(line))
    })

    rl.on('close', function () {
      resolve(objectifyData(resultData))
    })
  })
}
