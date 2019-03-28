const EPSILON = 0.00001

const accurateNumber = (a, b) => {
  if ((a - b) < EPSILON) return true

  return false
}