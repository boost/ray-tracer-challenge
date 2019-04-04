import * as C from '../../src/colours'

describe('Colours are (red, green, blue) tuples', () => {
  const c = C.colour(-0.5, 0.4, 1.7)
  it('the red function returns the red value', () => {
    expect(C.red(c).toNumber()).toEqual(-0.5)
  })

  it('the green function returns the green value', () => {
    expect(C.green(c).toNumber()).toEqual(0.4)
  })

  it('the blue function returns the blue value', () => {
    expect(C.blue(c).toNumber()).toEqual(1.7)
  })

})