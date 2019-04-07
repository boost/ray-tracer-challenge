import {tuple, w} from '../tuples'
import d from '../utils/decimal'

const point = (...args) => tuple(...args, d(1.0))

const isPoint = t => {
  if(!w(t)) return false
  return w(t).equals(1.0)
}

const all = ary => ary.every(t => (isPoint(t)))

export {
  point,
  isPoint,
  all
}