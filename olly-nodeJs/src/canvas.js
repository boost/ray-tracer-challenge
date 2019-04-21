import {createImageData} from 'canvas'
import * as C            from './colour'

const allPixels = canvas => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  let data = ctx.getImageData(0,0,canvas.width,canvas.height).data
  let pixels = []

  for(let i = 0; i < data.length; i = i+4) {
    pixels.push(data.slice(i, i+4))
  }

  return pixels
  // [[255, 255, 255, 255]]
}

const writePixel = (canvas, x, y, colour) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  const imageData = createImageData(Uint8ClampedArray.of(...C.toBytes(colour),255), 1, 1)
  ctx.putImageData(imageData, x, y)
}

const rawPixelAt = (canvas, x, y) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  return ctx.getImageData(x, y, 1, 1).data
}

const pixelColour = pixel => (C.fromBytes(C.colour(C.red(pixel), C.green(pixel), C.blue(pixel))))

const ppmPixelData = canvas => {
  const width = canvas.width
  // drop alpha value, and flatten the array
  const data_with_no_alpha = [].concat(...allPixels(canvas).map((pixel,i) => {
    // // add line return for end of row
    return pixel.slice(0,3).join(' ').concat((i+1) % width === 0 ? '\n' : ' ')
  }))

  return data_with_no_alpha.join('').replace(/\n$/, '')
}

const canvasToPpm = canvas => {
  return `P3\n${canvas.width}${canvas.height}\n255\n${ppmPixelData(canvas)}`
}

export {allPixels, writePixel, rawPixelAt, pixelColour, canvasToPpm, ppmPixelData}