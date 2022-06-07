const flatten = (arrayToBeFlatten) => {
  const result = arrayToBeFlatten.reduce((acc, el) => {

    if (Array.isArray(el)) {
      return acc.concat(flatten(el))
    }

    const isInvalidType = isNaN(el)
      || el === undefined
      || el === null
      || !Number.isInteger(el)

    if (isInvalidType) return acc

    return acc.concat(el)
  }, []);
  return result
}

module.exports = {
  flatten
}