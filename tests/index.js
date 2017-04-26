const { test } = require('tap')
const { arrFromString, objectifyData } = require('../lib')
const strExample = '2017 04 24 09 26  ATest  Multiple Spaces'
const specArr = [
  '2017',
  '04',
  '24',
  '09',
  '26',
  'ATest',
  'Multiple',
  'Spaces'
]

test('arrFromString should convert line into array', function (t) {
  t.same(arrFromString(strExample)[5], specArr[5], 'should be ATest')
  t.same(arrFromString(strExample)[4], specArr[4], 'should be 26')
  t.same(arrFromString(strExample)[3], specArr[3], 'should be 09')
  t.end()
})
