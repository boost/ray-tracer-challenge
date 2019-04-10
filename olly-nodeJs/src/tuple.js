import d from './utils/decimal'

const tuple =  (...args) => ([...args])

const x = t => (t[0])
const y = t => (t[1])
const z = t => (t[2])
const w = t => (t[3])

const validW = t => (typeof w(t) === 'number')

const equalTuples = (t1, t2) => {
  return x(t1) === x(t2) &&
         y(t1) === y(t2) &&
         z(t1) === z(t2) &&
         w(t1) === w(t2)
}

const addTuples = (t1, t2) => {
  return tuple(...t1.map((int, i) => {
    return d(int).plus(d(t2[i])).toNumber()
  }))
}

const subtractTuples = (t1, t2) => {
  return tuple(...t1.map((int, i) => {
    return d(int).minus(d(t2[i])).toNumber()
  }))
}

const negate =  t1 => (tuple( 0 - x(t1), 0 - y(t1), 0 - z(t1), 0 - w(t1)) )

const multiply = (t, scalar) => {
  return tuple(...t.map(int => {
    return d(int).times(scalar).toNumber()
  }))
}

const divide = (t, scalar) => {
  return tuple(...t.map(int => {
    return d(int).dividedBy(scalar).toNumber()
  }))
}

export {
  tuple,
  x,
  y,
  z,
  w,
  validW,
  equalTuples,
  addTuples,
  subtractTuples,
  negate,
  multiply,
  divide
}