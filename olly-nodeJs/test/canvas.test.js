import {createCanvas}  from 'canvas'
import {allPixels,
  writePixel,
  rawPixelAt,
  pixelColour,
  canvasToPpm,
  ppmPixelData}        from '../src/canvas'
import * as C          from '../src/colour'


describe('Creating a canvas', () => {
  const c = createCanvas(10, 20)

  it('creates a canvas with width 10', () => {
    expect(c.width).toEqual(10)
  })

  it('creates a canvas with height 10', () => {
    expect(c.height).toEqual(20)
  })

  it('creates a canvas with every pixel black', () => {
    const black = C.colour(0,0,0)
    allPixels(c).map(p => {
      let colourOfPixel = pixelColour(p)

      expect(colourOfPixel).toEqual(black)
    })
  })
})

describe('pixelColour', () => {
  const canvas = createCanvas(10, 20)
  it('returns the 0 1 colour of a pixel', () => {
    const pixel  = rawPixelAt(canvas, 0, 0)

    expect(pixelColour(pixel)).toEqual([0,0,0])
  })
})

describe('writePixel', () => {
  const canvas = createCanvas(10, 20)
  const red = C.colour(1, 0, 0)
  writePixel(canvas, 2, 3, red)


  it('writes the byte colour to the pixel location in the canvas', () => {
    const pixelColourWritten = pixelColour(rawPixelAt(canvas, 2, 3))
    expect(pixelColourWritten).toEqual(red)
  })
})

describe('Scenario: Constructing the PPM header', () => {
  const canvas = createCanvas(5, 3)
  const ppm = canvasToPpm(canvas)
  const header = ppm.split('\n').slice(0,3).join('\n')

  it('creates the right header', () => {
    expect(header).toEqual('P3\n53\n255')
  })
})

describe('ppmPixelData', () => {
  const canvas  = createCanvas(2,2)
  const c1 = C.colour(0, 0, 0)
  const c2 = C.colour(1, 1, 1)
  writePixel(canvas, 0, 0, c1)
  writePixel(canvas, 0, 1, c2)

  it('converts the pixel data to ppm string of byte colours', () => {
    expect(ppmPixelData(canvas)).toEqual('0 0 0 0 0 0\n255 255 255 0 0 0')
  })
})


describe('Scenario: Constructing the PPM pixel data', () => {
  const canvas  = createCanvas(5,3)
  const c1 = C.colour(1.5, 0, 0)
  const c2 = C.colour(0, 0.5, 0)
  const c3 = C.colour(-0.5, 0, 1)
  writePixel(canvas, 0, 0, c1)
  writePixel(canvas, 2, 1, c2)
  writePixel(canvas, 4, 2, c3)

  const ppm = canvasToPpm(canvas)

  it('lines 4-6 of the ppm contain a string with the pixel colours in their line orders', () => {
    const lines = ppm.split('\n').slice(3,6).join('\n')
    expect(lines).toEqual('255 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 128 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 255')
  })
})

