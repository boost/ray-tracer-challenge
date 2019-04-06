import {tuple} from '../tuples'

const colour = (r, g, b) => tuple(r, g, b)
const red = t => t[0]
const green = t => t[1]
const blue = t => t[2]

export {colour, red, green, blue}