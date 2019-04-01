import * as T from '../tuples'

const Vector = (...args) => {
  return T.tuple(...args, 0.0)
}

const isVector = (_tuple) => {
  return _tuple.w === 0.0
}

const allVectors =  (...args) => ([...args].every( _tuple => (isVector(_tuple))))

const magnitude = vector => {
  return vector.x.toPower(2).plus(vector.y.toPower(2)).plus(vector.z.toPower(2)).plus(vector.w*vector.w).sqrt()
}

export {
  Vector,
  isVector,
  allVectors,
  magnitude
}