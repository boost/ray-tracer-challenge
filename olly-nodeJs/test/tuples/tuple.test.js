import d                  from '../../src/utils/decimal'
import {
  tuple,
  equalTuples,
  addTuples,
  subtractTuples,
  negate}                 from '../../src/tuples'
import { isPoint, Point } from '../../src/points'
import { isVector }       from '../../src/vectors'

describe('Creating tuples', () => {
  test('A tuple with w=1.0 is a point', () => {
    const a = tuple(4.3, -4.2, 4.1, 1.0)

    expect(a.x.equals( 4.3)).toBe(true)
    expect(a.y.equals(-4.2)).toBe(true)
    expect(a.z.equals( 4.1)).toBe(true)
    expect(a.w).toBe(1.0)
    expect(isPoint(a)).toBe(true)
  })

  test('A tuple with w=0.0 is a vector', () => {
    const a = tuple(4.3, -4.2, 4.1, 0.0)

    expect(a.x.equals( 4.3)).toBe(true)
    expect(a.y.equals(-4.2)).toBe(true)
    expect(a.z.equals( 4.1)).toBe(true)
    expect(a.w).toBe(0.0)
    expect(isVector(a)).toBe(true)
  })
})

describe('equalTuples', () => {
  test('two identical tuples return true', () => {
    const a = tuple(4.3, 2.5, 9.2, 1.0)
    const b = tuple(4.3, 2.5, 9.2, 1.0)

    expect(equalTuples(a,b)).toBe(true)
  })

  test('two different tuples return false', () => {
    const a = tuple(4.3, 2.5, 9.2, 1.0)
    const b = tuple(4.0, 2.5, 9.2, 1.0)

    expect(equalTuples(a,b)).toBe(false)
  })
})

describe('Add tuples', () => {
  const point   = tuple(4.0, 2.5, 9.2, 1.0)
  const vector1 = tuple(4.0, 2.0, 9.24, 0.0)

  describe('a vector and a point', () => {
    const newPoint = addTuples(point, vector1)

    test('returns a point', () => {
      expect(isPoint(newPoint)).toBe(true)
    })

    test('sums the xyz', () => {
      expect(newPoint.x.equals( d(4.0).plus(d(4.0))  )).toBe(true)
      expect(newPoint.y.equals( d(2.5).plus(d(2.0))  )).toBe(true)
      expect(newPoint.z.equals( d(9.2).plus(d(9.24)) )).toBe(true)
    })
  })

  describe('a vector and a vector', () => {
    let   vector1   = tuple(4.0,   2.0,  9.0, 0.0)
    const vector2   = tuple(444.0, 2.0,  4.0, 0.0)
    const newVector = addTuples(vector2, vector1)

    test('returns a vector', () => {
      expect(isVector(newVector)).toBe(true)
    })

    test('sums the xyz', () => {
      expect(newVector.x.equals(448.0)).toBe(true)
      expect(newVector.y.equals(4.0  )).toBe(true)
      expect(newVector.z.equals(13.0 )).toBe(true)
    })
  })
})

describe('Subtract tuples', () => {
  const point    = Point(1.0, 4.0, 7.0)
  const point2   = Point(2.0, 5.0, 8.0)
  const vector1  = tuple(3.0, 6.0, 9.0, 0.0)

  describe('subtracting a point from a point', () => {
    const newPoint = subtractTuples(point, point2)

    test('returns a vector', () => {
      expect(isVector(newPoint)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(newPoint.x.equals(-1.0)).toBe(true)
      expect(newPoint.y.equals(-1.0)).toBe(true)
      expect(newPoint.z.equals(-1.0)).toBe(true)
    })
  })

  describe('subtracting a vector from a point', () => {
    const newPoint = subtractTuples(point, vector1)

    test('returns a point', () => {
      expect(isPoint(newPoint)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(newPoint.x.equals(-2.0)).toBe(true)
      expect(newPoint.y.equals(-2.0)).toBe(true)
      expect(newPoint.z.equals(-2.0)).toBe(true)
    })
  })

  describe('subtracting a vector from a vector', () => {
    let   vector1   = tuple(3.0, 6.0, 9.0, 0.0)
    const vector2   = tuple(4.0, 2.0, 4.0, 0.0)
    const newVector = subtractTuples(vector1, vector2)

    test('returns a vector', () => {
      expect(isVector(newVector)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(newVector.x.equals(-1.0)).toBe(true)
      expect(newVector.y.equals(4.0 )).toBe(true)
      expect(newVector.z.equals(5.0 )).toBe(true)
    })
  })

  describe('subtracting a vector from zero', () => {
    let   vector1   = tuple(3.0, 6.0, 9.0, 0.0)
    const zero      = tuple(0.0, 0.0, 0.0, 0.0)
    const newVector = subtractTuples(zero, vector1)

    test('returns a vector', () => {
      expect(isVector(newVector)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(newVector.x.equals(-3.0)).toBe(true)
      expect(newVector.y.equals(-6.0)).toBe(true)
      expect(newVector.z.equals(-9.0)).toBe(true)
    })
  })
})

describe('Negating a tuple', () => {
  let tuple1           = tuple(3.0, 6.0, 9.0, 1.0)
  const negativeTuple  = negate(tuple1)

  it('negates all the tuple values', () => {
    expect(negativeTuple.x.equals(-3.0)).toBe(true)
    expect(negativeTuple.y.equals(-6.0)).toBe(true)
    expect(negativeTuple.z.equals(-9.0)).toBe(true)
    expect(negativeTuple.w).toBe(-1.0)
  })
})