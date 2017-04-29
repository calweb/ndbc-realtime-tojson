const { test } = require('tap')
const { arrFromString, objectifyData } = require('../lib')
const strExample = '2017 04 24 09 26  ATest  Multiple Spaces'
const arrExample = [
  [ 'year', 'month', 'day' ],
  [ 'yyyy', 'mm', 'dd' ],
  [ '2017', '04', '19' ],
  [ '2017', '03', '02' ]
]
const specObjs = [
  { year: '2017', month: '04', day: '19' },
  { year: '2017', month: '03', day: '02' }
]
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

test(
  'objectifyData should convert array of arrays into array of objects, valid json',
  function (t) {
    t.same(
      objectifyData(arrExample)[0].month,
      specObjs[0].month,
      'should be 04'
    )
    t.same(objectifyData(arrExample)[0].day, specObjs[0].day, 'should be 19')
    t.same(
      objectifyData(arrExample)[1].month,
      specObjs[1].month,
      'should be 03'
    )
    t.same(objectifyData(arrExample)[1].day, specObjs[1].day, 'should be 09')
    t.end()
  }
)
