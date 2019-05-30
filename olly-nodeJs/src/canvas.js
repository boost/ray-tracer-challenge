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
}

const writePixel = (canvas, x, y, colour) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  const imageData = createImageData(Uint8ClampedArray.of(...C.toBytes(colour),255), 1, 1)
  ctx.putImageData(imageData, Math.round(x), Math.round(y))
}

const rawPixelAt = (canvas, x, y) => {
  const ctx = canvas.getContext('2d', {pixelFormat: 'RGB24'})
  return ctx.getImageData(x, y, 1, 1).data
}

const pixelColour = pixel => (C.fromBytes(C.colour(C.red(pixel), C.green(pixel), C.blue(pixel))))

const ppmPixelData = canvas => {
  const {height,width} = canvas
  let ppmData = ''
  let line = ''

  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      let pixelNoAlpha = rawPixelAt(canvas, x, y).slice(0,3)
      pixelNoAlpha.map((bit, i) => {
        let isLastInRow =  x+1 === width && i === 2
        const isRoomAvailalbe = (line.length + String(bit).length + 1) <= 70

        if(isLastInRow && isRoomAvailalbe) {
          line = line.concat(String(bit), ' ')
          ppmData = ppmData.concat(line.trim(), '\n')
          line = ''
          return
        }

        if(!isRoomAvailalbe) {
          ppmData = ppmData.concat(line.trim(), '\n')
          line = ''
        }

        line = line.concat(String(bit), ' ')
      })

    }
  }

  return ppmData.trimLeft()
}


const canvasToPpm = canvas => {
  return `P3\n${canvas.width} ${canvas.height}\n255\n${ppmPixelData(canvas)}`
}

export {allPixels, writePixel, rawPixelAt, pixelColour, canvasToPpm, ppmPixelData}