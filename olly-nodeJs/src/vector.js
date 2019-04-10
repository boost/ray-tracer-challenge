import d                   from './utils/decimal'
import {tuple, w, x, y, z, validW} from './tuple'

const vector = (...args) => tuple(...args, 0.0)

const isVector = t => {
  if(!validW(t)) return false
  return w(t) === 0.0
}

const all =  ary => ary.every( tuple => (isVector(tuple)))

const magnitude = v => {
  return d(x(v)).toPower(2)
    .plus( d(y(v)).toPower(2) )
    .plus( d(z(v)).toPower(2) )
    .plus( d(w(v)).toPower(2) )
    .sqrt().toNumber()
}

const normalise = v => {
  let m = d(magnitude(v))
  return tuple(
    d(x(v)).dividedBy(m).toNumber(),
    d(y(v)).dividedBy(m).toNumber(),
    d(z(v)).dividedBy(m).toNumber(),
    d(w(v)).dividedBy(m).toNumber()
  )
}

const dot = (a,b) => {
  return d(x(a)).times(d(x(b)))
    .plus( d(y(a)).times(d(y(b))) )
    .plus( d(z(a)).times(d(z(b))) )
    .plus( d(w(a)).times(d(w(b))) )
    .toNumber()
}

const cross = (a,b) => {
  return vector(
    d(y(a)).times(d(z(b))).minus(d(z(a)).times(d(y(b)))).toNumber(),
    d(z(a)).times(d(x(b))).minus(d(x(a)).times(d(z(b)))).toNumber(),
    d(x(a)).times(d(y(b))).minus(d(y(a)).times(d(x(b)))).toNumber()
  )
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