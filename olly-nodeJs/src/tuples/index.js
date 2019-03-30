import d                       from '../utils/decimal'
import { Vector, allVectors }  from '../vectors'

import { Point, allPoints}     from '../points'

const tuple =  (x,y,z,w) => ({
  x: d(x),
  y: d(y),
  z: d(z),
  w: w
})

const equalTuples = (tuple1, tuple2) => (tuple1.x.equals(tuple2.x) &&
                                         tuple1.y.equals(tuple2.y) &&
                                         tuple1.z.equals(tuple2.z) &&
                                         tuple1.w === tuple2.w
)

const addTuples = (tuple1, tuple2) => {
  const newX = tuple1.x.plus(tuple2.x)
  const newY = tuple1.y.plus(tuple2.y)
  const newZ = tuple1.z.plus(tuple2.z)

  if(tuple1.w + tuple2.w === 0.0) return Vector(newX, newY, newZ)
  return Point(newX, newY, newZ)
}

const subtractTuples = (tuple1, tuple2) => {
  const newX = tuple1.x.minus(tuple2.x)
  const newY = tuple1.y.minus(tuple2.y)
  const newZ = tuple1.z.minus(tuple2.z)
  if(allPoints(tuple1, tuple2) || allVectors(tuple1, tuple2)) return Vector(newX, newY, newZ)

  return Point(newX, newY, newZ)
}

const negate =  (tuple1) => (tuple(tuple1.x.neg(), tuple1.y.neg(), tuple1.z.neg(), 0 - tuple1.w))

const multiply = (_tuple, scalar) => ((tuple(_tuple.x.times(scalar), _tuple.y.times(scalar), _tuple.z.times(scalar), _tuple.w * scalar)))
const divide = (_tuple, scalar) => ((tuple(_tuple.x.dividedBy(scalar), _tuple.y.dividedBy(scalar), _tuple.z.dividedBy(scalar), _tuple.w / scalar)))

export {
  tuple,
  equalTuples,
  addTuples,
  subtractTuples,
  negate,
  multiply,
  divide
}