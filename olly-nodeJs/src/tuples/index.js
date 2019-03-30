import d from '../utils/decimal'

function Point(...args) {
  return tuple(...args, 1.0)
}

function Vector(...args) {
  return tuple(...args, 0.0)
}

function tuple (x,y,z,w) {
  return {
    x: d(x),
    y: d(y),
    z: d(z),
    w: w
  }
}

function equalTuples(tuple1, tuple2) {
  return (tuple1.x.equals(tuple2.x) &&
          tuple1.y.equals(tuple2.y) &&
          tuple1.z.equals(tuple2.z) &&
          tuple1.w === tuple2.w)
}

function isPoint(tuple) {
  return tuple.w === 1.0
}
function isVector(tuple) {
  return tuple.w === 0.0
}

function addTuples(tuple1, tuple2) {
  const newX = tuple1.x.plus(tuple2.x)
  const newY = tuple1.y.plus(tuple2.y)
  const newZ = tuple1.z.plus(tuple2.z)

  if(tuple1.w + tuple2.w === 0.0) return new Vector(newX, newY, newZ)
  return new Point(newX, newY, newZ)
}

function subtractTuples(tuple1, tuple2) {
  const newX = tuple1.x.minus(tuple2.x)
  const newY = tuple1.y.minus(tuple2.y)
  const newZ = tuple1.z.minus(tuple2.z)
  if(allPoints(tuple1, tuple2) || allVectors(tuple1, tuple2)) return new Vector(newX, newY, newZ)

  return new Point(newX, newY, newZ)
}

function allPoints (...args) {
  return [...args].every(function (tuple) {
    return isPoint(tuple)
  })
}

function allVectors (...args) {
  return [...args].every(function (tuple) {
    return isVector(tuple)
  })
}

function negate (tuple1) {
  return tuple(tuple1.x.neg(), tuple1.y.neg(), tuple1.z.neg(), tuple.w)
}

export {tuple, equalTuples, Point, isPoint, Vector, isVector, addTuples, subtractTuples, negate}