const {
  map,
  filter,
  reject,
  drop,
  split,
  trim,
  compose,
  head,
  splitAt,
  lift,
  zipObj,
  apply
} = require('ramda')

/**
 * Takes a string value and creates an array of values delimited by space while
 * also eliminating empty strings or extraneous spaces
 *
 * @func
 * @category Object
 * @sig 'a b c  d' -> ['a', 'b', 'c', 'd']
 * @param {String} A string
 * @return {Array} An array of string values
 * @example
 *
 *     arrFromString('2017 04 18 05 44    0.6')
 *      //=> ['2017', '04', '18', '05', '44', '0.6']
 */
const arrFromString = compose(
  reject(item => !item),
  map(item => item.trim()),
  split(' ')
)

/**
 * Takes an array of arrays, with array[0] being headers and transform all
 * subsequent arr into objects with the headers matched as keys.
 * Returns a list containing objects
 *
 * @func
 * @category Object
 * @sig [[ka,kb,kc], [va,vb,vc]] -> [{ka:va, kb:vb, kc:vc}]
 * @param {Array} An array of arrays whose first index are the header(keys)
 * @return {Array} An array of objects that have been zipped from receiving array
 * @example
 *
 *     objectifyData([ ['year', 'month', 'day'], ['2017', '04', '19'], ['2017', '03', '02'] ])
 *      //=> [{year: '2017', month: '04', day: '19'}, {year: '2017', month: '03', day: '02'}]
 */
const objectifyData = compose(drop(1), apply(lift(zipObj)), splitAt(1))

module.exports = { arrFromString, objectifyData }
