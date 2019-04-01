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
  return v.x.toPower(2).plus(v.y.toPower(2)).plus(v.z.toPower(2)).plus(v.w.toPower(2)).sqrt()
}

export {
  vector,
  isVector,
  all,
  magnitude
}