import {tuple} from '../tuples'

const colour = (r, g, b) => {
  const t = tuple(r, g, b)
  return {
    red: t.x,
    green: t.y,
    blue: t.z
  }
}

export {colour}