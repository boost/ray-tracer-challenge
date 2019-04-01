import * as T from '../tuples'
import d from '../utils/decimal'

const point = (...args) => (T.tuple(...args, d(1.0)))

const isPoint = tuple => (tuple.w.equals(1.0))

const all = ary => (ary.every(tuple => (isPoint(tuple))))

export {
  point,
  isPoint,
  all
}