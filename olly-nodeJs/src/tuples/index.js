
function Coordinate(x,y,z) {
  this.x = x
  this.y = y
  this.z = z
}

function Point(...args) {
  Coordinate.call(this, ...args)
  this.w = 1.0
}

function Vector(...args) {
  Coordinate.call(this, ...args)
  this.w = 0.0
}

const tuple = (x,y,z,w) => {
  if(w === 1.0) return new Point(x,y,z)

  return new Vector(x,y,z,w)
}
export {tuple, Point, Vector}