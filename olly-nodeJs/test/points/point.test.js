import * as P from '../../src/points'

describe('Creating a point', () => {

  test('creates tuple with w=1.0', () => {
    const point = P.point(4.0, 3.0, 2.0)
    expect(point.x.equals(4.0)).toBe(true)
    expect(point.y.equals(3.0)).toBe(true)
    expect(point.z.equals(2.0)).toBe(true)
    expect(point.w.equals(1.0)).toBe(true)
  })
})
