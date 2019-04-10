import {createCanvas}                                from 'canvas'
import {allPixels, writePixel, pixelAt, pixelColour} from '../src/canvas'
import {colour}                                      from '../src/colour'

describe('Creating a canvas', () => {
  const c = createCanvas(10, 20)

  it('creates a canvas with width 10', () => {
    expect(c.width).toEqual(10)
  })

  it('creates a canvas with height 10', () => {
    expect(c.height).toEqual(20)
  })

  it('creates a canvas with every pixel black', () => {
    const black = colour(0,0,0)
    allPixels(c).map(p => {
      let colourOfPixel = pixelColour(p)

      expect(colourOfPixel).toEqual(black)
    })
  })
})

describe('Scenario: Writing pixels to a canvas', () => {
  const c = createCanvas(10, 20)
  const red = colour(1, 0, 0)
  writePixel(c, 2, 3, red)

  it('makes the pixel at the coordinates int the canvas the right colour', () => {
    expect(pixelColour(pixelAt(c, 2, 3))).toEqual(red)
  })
})
