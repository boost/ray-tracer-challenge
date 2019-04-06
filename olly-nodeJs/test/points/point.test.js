import * as P    from '../../src/points'
import {x,y,z,w} from '../../src/tuples'

describe('Creating a point', () => {

  test('creates tuple with w=1.0', () => {
    const point = P.point(4.0, 3.0, 2.0)
    expect(x(point).toNumber()).toEqual(4.0)
    expect(y(point).toNumber()).toEqual(3.0)
    expect(z(point).toNumber()).toEqual(2.0)
    expect(w(point).toNumber()).toEqual(1.0)
  })
})
