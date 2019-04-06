import * as V from './src/vectors/'
import * as P from './src/points/'
import * as T from './src/tuples/'

const env = {
  gravity: V.vector(0.0, -0.1, 0.0),
  wind: V.vector(-0.01, 0.0, 0.0)
}

const envVelocity = T.addTuples(env.gravity, env.wind)

const projectile = (position, velocity) =>({position, velocity})

const tick = (env, proj) => {
  const position = T.addTuples(proj.position, proj.velocity)
  const velocity = T.addTuples(proj.velocity, envVelocity)

  return projectile(position, velocity)
}

let proj = projectile(P.point(0.0, 1.0, 0.0), V.normalise(V.vector(1, 1, 0.0)))

const positions = [proj]
while (T.y(proj.position).greaterThan(0.0)) {
  proj = tick(env, proj)
  positions.push(proj)
}

// console.log(positions)