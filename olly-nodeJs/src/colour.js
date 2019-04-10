import {tuple} from './tuple'
import d       from './utils/decimal'

const colour = (...args) => ([...args])

const red = t => t[0]
const green = t => t[1]
const blue = t => t[2]

const multiply = (t1, t2) => {
  return tuple(
    d(red(t1)).times(d(red(t2))).toNumber(),
    d(green(t1)).times(d(green(t2))).toNumber(),
    d(blue(t1)).times(d(blue(t2))).toNumber(),
  )
}

export {colour, red, green, blue, multiply}