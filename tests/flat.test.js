const { flatten } = require('../src/flat_array')

const cases = [
  [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]],
  [1, [2, [3, [4, 5]]]],
  [6, [1, [2, 3], 4], 5],
  [[[1, 2,], 3], 4, 5],
  [[[1, 2,], 3], 4, 'asd'],
  [[[1, 2,], 3], 4, null, undefined],
  [[[1, 2,], 3], 4, 1.33],
]

const results = [
  [0, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]

cases.forEach((el, i) => {
  test('flat an array', () => {

    expect(flatten(el)).toEqual(results[i])
  })

})