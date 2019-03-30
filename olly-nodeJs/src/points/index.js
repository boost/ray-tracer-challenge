import * as T from '../tuples'

const Point = (...args) => (T.tuple(...args, 1.0))

const isPoint = (tuple) => (tuple.w === 1.0)

const allPoints =  (...args) => ([...args].every( tuple => (isPoint(tuple))))

export {
  Point,
  isPoint,
  allPoints
}