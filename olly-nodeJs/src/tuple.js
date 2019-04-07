import d from './utils/decimal'

const tuple =  (x,y,z,w) => ([ d(x), d(y), d(z), w != null ? d(w) : null])

const x = t => (t[0])
const y = t => (t[1])
const z = t => (t[2])
const w = t => (t[3])

const equalTuples = (t1, t2) => (x(t1).equals(x(t2)) &&
                                 y(t1).equals(y(t2)) &&
                                 z(t1).equals(z(t2)) &&
                                 w(t1).equals(w(t2))
)

const addTuples = (t1, t2) => {
  const newX = x(t1).plus(x(t2))
  const newY = y(t1).plus(y(t2))
  const newZ = z(t1).plus(z(t2))
  const newW = (w(t1) && w(t2)) ? w(t1).plus(w(t2)) : null

  return tuple(newX, newY, newZ, newW)
}

const subtractTuples = (t1, t2) => {
  const newX = x(t1).minus(x(t2))
  const newY = y(t1).minus(y(t2))
  const newZ = z(t1).minus(z(t2))
  const newW = (w(t1) && w(t2)) ? w(t1).minus(w(t2)) : null

  return tuple(newX, newY, newZ, newW)
}

const negate =  t1 => (tuple( x(t1).neg(), y(t1).neg(), z(t1).neg(), w(t1).neg()) )

const multiply = (t, scalar) => {
  return tuple(x(t).times(scalar), y(t).times(scalar), z(t).times(scalar), w(t).times(scalar))
}

const divide = (t, scalar) => {
  return tuple(x(t).dividedBy(scalar), y(t).dividedBy(scalar), z(t).dividedBy(scalar), w(t).dividedBy(scalar))
}

export {
  tuple,
  x,
  y,
  z,
  w,
  equalTuples,
  addTuples,
  subtractTuples,
  negate,
  multiply,
  divide
}