import d      from '../utils/decimal'
import * as T from '../tuples'

const vector = (...args) => {
  return T.tuple(...args, d(0.0))
}

const isVector = tuple => {
  return tuple.w.equals(0.0)
}

const all =  ary => (ary.every( tuple => (isVector(tuple))))

const magnitude = v => {
  return v.x.toPower(2).plus(v.y.toPower(2)).plus(v.z.toPower(2)).plus(v.w.toPower(2)).sqrt().toNumber()
}

const normalise = v => {
  let m = magnitude(v)
  return T.tuple(
    v.x.dividedBy(m),
    v.y.dividedBy(m),
    v.z.dividedBy(m),
    v.w.dividedBy(m))
}

const dot = (a,b) => {
  return a.x.times(b.x).plus(a.y.times(b.y)).plus(a.z.times(b.z)).plus(a.w.times(b.w)).toNumber()
}

const cross = (a,b) => {
  return vector(
    a.y.times(b.z).minus(a.z.times(b.y)),
    a.z.times(b.x).minus(a.x.times(b.z)),
    a.x.times(b.y).minus(a.y.times(b.x)))
}

export {
  vector,
  isVector,
  all,
  magnitude,
  normalise,
  dot,
  cross
}