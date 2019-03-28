import d from '../../src/utils/decimal'
import {tuple, Point, Vector, addTuples} from '../../src/tuples'

test('Point creates tuples with w=1.0', () => {
  const point = new Point(4.0, 3.0, 2.0, 1.0)
  expect(point.x.equals(4.0)).toBe(true)
  expect(point.y.equals(3.0)).toBe(true)
  expect(point.z.equals(2.0)).toBe(true)
  expect(point.w).toBe(1.0)
})
test('Vector creates tuples with w=0.0', () => {
  const vector = new Vector(4.0, 3.0, 2.0, 0.0)
  expect(vector.x.equals(4.0)).toBe(true)
  expect(vector.y.equals(3.0)).toBe(true)
  expect(vector.z.equals(2.0)).toBe(true)
  expect(vector.w).toBe(0.0)
})

test('A tuple with w=1.0 is a point', () => {
  const a = tuple(4.3, -4.2, 4.1, 1.0)

  expect(a.x.equals( 4.3)).toBe(true)
  expect(a.y.equals(-4.2)).toBe(true)
  expect(a.z.equals( 4.1)).toBe(true)
  expect(a.w).toBe(1.0)
  expect(a instanceof Point).toBe(true)
})

test('A tuple with w=0.0 is a vector', () => {
  const a = tuple(4.3, -4.2, 4.1, 0.0)

  expect(a.x.equals( 4.3)).toBe(true)
  expect(a.y.equals(-4.2)).toBe(true)
  expect(a.z.equals( 4.1)).toBe(true)
  expect(a.w).toBe(0.0)
  expect(a instanceof Vector).toBe(true)
})

describe('equalTuples', () => {
  test('two identical tupples return true', () => {
    const a = tuple(4.3, 2.5, 9.2, 1.0)
    const b = tuple(4.3, 2.5, 9.2, 1.0)

    expect(a.equalTo(b)).toBe(true)
  })

  test('two different tupples return false', () => {
    const a = tuple(4.3, 2.5, 9.2, 1.0)
    const b = tuple(4.0, 2.5, 9.2, 1.0)

    expect(a.equalTo(b)).toBe(false)
  })
})

describe('Add tupples', () => {
  const point   = tuple(4.0, 2.5, 9.2, 1.0)
  const vector1 = tuple(4.0, 2.0, 9.24, 0.0)

  describe('a vector and a point', () => {
    const newPoint = addTuples(point, vector1)
    test('returns a point', () => {
      expect(newPoint instanceof Point).toBe(true)
    })

    test('sums the xyz', () => {
      expect(newPoint.x.equals( d(4.0).plus(d(4.0))  ))
      expect(newPoint.y.equals( d(2.5).plus(d(2.0))  ))
      expect(newPoint.z.equals( d(9.2).plus(d(9.24)) ))
    })
  })

  describe('a vector and a vector', () => {
    const vector2 = tuple(444.0, 2.12, 4.24, 0.0)
    const newVector = addTuples(vector2, vector1)
    test('returns a vector', () => {
      expect(newVector instanceof Vector).toBe(true)
    })

    test('sums the xyz', () => {
      expect(newVector.x.equals( d(4.0).plus(d(4.0))  ))
      expect(newVector.y.equals( d(2.5).plus(d(2.0))  ))
      expect(newVector.z.equals( d(9.2).plus(d(9.24)) ))
    })
  })
})