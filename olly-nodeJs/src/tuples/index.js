import d from '../utils/decimal'

function Coordinate(x,y,z) {
  this.x = d(x)
  this.y = d(y)
  this.z = d(z)
  this.equalXYZ = tuple => {
    if(this.x.equals(tuple.x) && this.y.equals(tuple.y) && this.z.equals(tuple.z)) {
      return true
    }
  }
}

function Point(...args) {
  Coordinate.call(this, ...args)
  this.w = 1.0
  this.equalTo = tuple => {
    if(tuple instanceof Point && this.equalXYZ(tuple)) return true
    return false
  }
}

function Vector(...args) {
  Coordinate.call(this, ...args)
  this.w = 0.0
  this.equalTo = tuple => {
    if(tuple instanceof Point) return false
    if(this.equalXYZ(tuple)) return true
    return false
  }
}

function tuple (x,y,z,w) {
  if(w === 1.0) return new Point(x,y,z)

  return new Vector(x,y,z,w)
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
    return tuple instanceof Point
  })
}

function allVectors (...args) {
  return [...args].every(function (tuple) {
    return tuple instanceof Vector
  })
}

function negate (tuple1) {
  return tuple(tuple1.x.neg(), tuple1.y.neg(), tuple1.z.neg(), tuple.w)
}

export {tuple, Point, Vector, addTuples, subtractTuples, negate}