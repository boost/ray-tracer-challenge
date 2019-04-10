import {createImageData}                     from 'canvas'
import {red, green, blue, colour}            from './colour'
const allPixels = canvas => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  let data = ctx.getImageData(0,0,canvas.width,canvas.height).data
  let pixels = []

  for(let i = 0; i < data.length; i = i+4) {
    pixels.push(data.slice(i, i+4))
  }
  return pixels
}

const writePixel = (canvas, x, y, colour) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  const imageData = createImageData(Uint8ClampedArray.of(...colour,1), 1, 1)
  ctx.putImageData(imageData, x, y)
}

const pixelAt = (canvas, x, y) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  return ctx.getImageData(x, y, 1, 1).data
}

const pixelColour = pixel => (colour(red(pixel), green(pixel), blue(pixel)))
export {allPixels, writePixel, pixelAt, pixelColour}