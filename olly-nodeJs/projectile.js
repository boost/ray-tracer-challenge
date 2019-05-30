const fs = require('fs')
import * as V from './src/vector.js'
import * as P from './src/point.js'
import * as T from './src/tuple.js'
import * as C from './src/colour.js'
import {createCanvas}  from 'canvas'
import {
  writePixel,
  canvasToPpm}        from './src/canvas'

const env = {
  gravity: V.vector(0.0, -0.005, 0.0),
  wind: V.vector(-0.0026, 0.0, 0.0)
}

const envVelocity = T.addTuples(env.gravity, env.wind)

const projectile = (position, velocity) =>({position, velocity})

const tick = (env, proj) => {
  const position = T.addTuples(proj.position, proj.velocity)
  const velocity = T.addTuples(proj.velocity, envVelocity)

  return projectile(position, velocity)
}

let proj = projectile(P.point(0.0, 1.0, 0.0), V.normalise(V.vector(10, 10, 0.0)))

const positions = [proj]
while (T.y(proj.position) >= 0.0) {
  proj = tick(env, proj)
  positions.push(proj)
}

positions.pop()

const height= 100
const canvas = createCanvas(height,height)
const red = C.colour(1, 1, 1)

positions.map(pos => {
  let x = T.x(pos.position)
  let y = T.y(pos.position)

  writePixel(canvas, Math.round(x), height - Math.round(y), red)
})

const ppmFileData = canvasToPpm(canvas)

fs.writeFile('./projectile.ppm', ppmFileData)




