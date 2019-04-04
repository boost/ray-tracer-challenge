import * as P from '../../src/points'

describe('Creating a point', () => {

  test('creates tuple with w=1.0', () => {
    const point = P.point(4.0, 3.0, 2.0)
    expect(point.x.toNumber()).toEqual(4.0)
    expect(point.y.toNumber()).toEqual(3.0)
    expect(point.z.toNumber()).toEqual(2.0)
    expect(point.w.toNumber()).toEqual(1.0)
  })
})
