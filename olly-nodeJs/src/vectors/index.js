import d          from '../utils/decimal'
import {tuple, w, x, y, z} from '../tuples'

const vector = (...args) => tuple(...args, d(0.0))

const isVector = t => {
  if(!w(t)) return false
  return w(t).equals(0.0)
}

const all =  ary => ary.every( tuple => (isVector(tuple)))

const magnitude = v => {
  return x(v).toPower(2).plus(y(v).toPower(2)).plus(z(v).toPower(2)).plus(w(v).toPower(2)).sqrt().toNumber()
}

const normalise = v => {
  let m = magnitude(v)
  return tuple(
    x(v).dividedBy(m),
    y(v).dividedBy(m),
    z(v).dividedBy(m),
    w(v).dividedBy(m))
}

const dot = (a,b) => {
  return x(a).times(x(b))
    .plus(y(a).times(y(b)))
    .plus(z(a).times(z(b)))
    .plus(w(a).times(w(b)))
    .toNumber()
}

const cross = (a,b) => {
  return vector(
    y(a).times(z(b)).minus(z(a).times(y(b))),
    z(a).times(x(b)).minus(x(a).times(z(b))),
    x(a).times(y(b)).minus(y(a).times(x(b))))
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