const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
const moment = require('moment')
const { map, filter, reject, drop, split, trim, compose, head } = require(
  'ramda'
)

const arrFromString = compose(
  reject(item => !item),
  map(item => item.trim()),
  split(' ')
)
const instream = fs.createReadStream('./41004.txt')
const outstream = new stream()
const rl = readline.createInterface(instream, outstream)
const resultData = []
rl.on('line', function (line) {
  const [
    yr,
    mo,
    day,
    hr,
    min,
    degreewind,
    windspd,
    gust,
    wvht,
    dpd,
    apd,
    mwd,
    pres,
    atmp,
    wtmp,
    dewp,
    vis,
    ptdy,
    tide
  ] = arrFromString(line)
  const dt = moment(`${yr}-${mo}-${day} ${hr}:${min}`, 'YYYY-MM-DD HH:mm')

  const dtObj = {
    dt: dt.format(),
    yr,
    mo,
    day,
    hr,
    min,
    degreewind,
    windspd,
    gust,
    wvht,
    dpd,
    apd,
    mwd,
    pres,
    atmp,
    wtmp,
    dewp,
    vis,
    ptdy,
    tide
  }
  resultData.push(dtObj)
})

rl.on('close', function () {
  fs.writeFileSync('./transform.json', JSON.stringify(drop(2, resultData)))
  console.log('done')
})
