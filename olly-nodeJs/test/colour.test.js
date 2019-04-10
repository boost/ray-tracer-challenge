import * as C from '../src/colour'
import * as T from '../src/tuple'

describe('Colours are (red, green, blue) tuples', () => {
  const colour = C.colour(-0.5, 0.4, 1.7)
  it('the red function returns the red value', () => {
    expect(C.red(colour)).toEqual(-0.5)
  })

  it('the green function returns the green value', () => {
    expect(C.green(colour)).toEqual(0.4)
  })

  it('the blue function returns the blue value', () => {
    expect(C.blue(colour)).toEqual(1.7)
  })
})

describe('Adding colors', () => {
  const c1 = C.colour(0.9, 0.6, 0.75)
  const c2 = C.colour(0.7, 0.1, 0.25)
  const c3 = T.addTuples(c1, c2)

  it('adds rbg values like a tuple', () => {
    expect(c3).toEqual(C.colour(1.6, 0.7, 1.0))
  })
})

describe('Subtracting colors', () => {
  const c1 = C.colour(0.9, 0.6, 0.75)
  const c2 = C.colour(0.7, 0.1, 0.25)
  const c3 = T.subtractTuples(c1, c2)

  it('subtracts rbg values like a tuple', () => {
    expect(c3).toEqual(C.colour(0.2, 0.5, 0.5))
  })
})

describe('Multiplying a colour by a scalar', () => {
  const c1 = C.colour(1, 0.2, 0.4)
  const c2 = C.colour(0.9, 1, 0.1)
  const c3 = C.multiply(c1, c2)

  it('multiplies the rbg values of each colour', () => {
    expect(c3).toEqual(C.colour(0.9, 0.2, 0.04))
  })
})