import * as T from '../tuples'
import d from '../utils/decimal'

const Vector = (...args) => {
  return T.tuple(...args, d(0.0))
}

const isVector = (_tuple) => {
  return _tuple.w.equals(0.0)
}

const allVectors =  (...args) => ([...args].every( _tuple => (isVector(_tuple))))

const magnitude = vector => {
  return vector.x.toPower(2).plus(vector.y.toPower(2)).plus(vector.z.toPower(2)).plus(vector.w.toPower(2)).sqrt()
}

export {
  Vector,
  isVector,
  allVectors,
  magnitude
}