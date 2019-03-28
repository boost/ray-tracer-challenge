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
    if(!tuple instanceof Point) return false
    if(this.equalXYZ(tupple)) return true
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

export {tuple, Point, Vector, addTuples}