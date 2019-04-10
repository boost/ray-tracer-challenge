import * as P    from '../src/point'
import {x,y,z,w} from '../src/tuple'

describe('Creating a point', () => {

  test('creates tuple with w=1.0', () => {
    const point = P.point(4.0, 3.0, 2.0)
    expect(x(point)).toEqual(4.0)
    expect(y(point)).toEqual(3.0)
    expect(z(point)).toEqual(2.0)
    expect(w(point)).toEqual(1.0)
  })
})
