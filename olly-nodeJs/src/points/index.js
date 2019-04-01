import * as T from '../tuples'
import d from '../utils/decimal'

const Point = (...args) => (T.tuple(...args, d(1.0)))

const isPoint = (tuple) => (tuple.w.equals(1.0))

const allPoints =  (...args) => ([...args].every( tuple => (isPoint(tuple))))

export {
  Point,
  isPoint,
  allPoints
}