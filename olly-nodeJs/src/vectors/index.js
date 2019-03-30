import { tuple } from '../tuples'

const Vector = (...args) => {
  return tuple(...args, 0.0)
}

const isVector = (_tuple) => {
  return _tuple.w === 0.0
}

const allVectors =  (...args) => ([...args].every( _tuple => (isVector(_tuple))))

export {
  Vector,
  isVector,
  allVectors
}