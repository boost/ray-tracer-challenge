import d      from '../utils/decimal'
import * as V from '../vectors'
import * as P from '../points'

const tuple =  (x,y,z,w) => ({
  x: d(x),
  y: d(y),
  z: d(z),
  w: w != null ? d(w) : null
})

const equalTuples = (t1, t2) => (t1.x.equals(t2.x) &&
                                 t1.y.equals(t2.y) &&
                                 t1.z.equals(t2.z) &&
                                 t1.w.equals(t2.w)
)

const addTuples = (t1, t2) => {
  const newX = t1.x.plus(t2.x)
  const newY = t1.y.plus(t2.y)
  const newZ = t1.z.plus(t2.z)

  if(t1.w.plus(t2.w).equals(0.0)) return V.vector(newX, newY, newZ)
  return P.point(newX, newY, newZ)
}

const subtractTuples = (t1, t2) => {
  const newX = t1.x.minus(t2.x)
  const newY = t1.y.minus(t2.y)
  const newZ = t1.z.minus(t2.z)
  if(P.all([t1, t2]) || V.all([t1, t2])) return V.vector(newX, newY, newZ)

  return P.point(newX, newY, newZ)
}

const negate =  t1 => (tuple(t1.x.neg(), t1.y.neg(), t1.z.neg(), t1.w.neg()))

const multiply = (t, scalar) => {
  return tuple(t.x.times(scalar), t.y.times(scalar), t.z.times(scalar), t.w.times(scalar))
}

const divide = (t, scalar) => {
  return tuple(t.x.dividedBy(scalar), t.y.dividedBy(scalar), t.z.dividedBy(scalar), t.w.dividedBy(scalar))
}

export {
  tuple,
  equalTuples,
  addTuples,
  subtractTuples,
  negate,
  multiply,
  divide
}