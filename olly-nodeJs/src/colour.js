import {tuple} from './tuple'

const colour = (r, g, b) => tuple(r, g, b)
const red = t => t[0]
const green = t => t[1]
const blue = t => t[2]

const multiply = (t1, t2) => {
  return tuple(
    red(t1).times(red(t2)),
    green(t1).times(green(t2)),
    blue(t1).times(blue(t2)),
  )
}

export {colour, red, green, blue, multiply}