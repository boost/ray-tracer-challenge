import {tuple, w, validW} from './tuple'

const point = (...args) => tuple(...args, 1.0)

const isPoint = t => {
  if(!validW(t)) return false
  return w(t) === 1.0
}

const all = ary => ary.every(t => (isPoint(t)))

export {
  point,
  isPoint,
  all
}