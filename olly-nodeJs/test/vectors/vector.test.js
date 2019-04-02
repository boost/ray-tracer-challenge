import * as V from '../../src/vectors'
import d      from '../../src/utils/decimal'

describe('Creating a vectpr', () => {

  test('creates tuple with w=0.0', () => {
    const vector = V.vector(4.0, 3.0, 2.0, 0.0)
    expect(vector.x.equals(4.0)).toBe(true)
    expect(vector.y.equals(3.0)).toBe(true)
    expect(vector.z.equals(2.0)).toBe(true)
    expect(vector.w.equals(0.0)).toBe(true)
  })
})

describe('Vector Magnitute', () => {
  describe('Computing the magnitude of vector(1, 0, 0)', () => {
    const v = V.vector(1, 0, 0)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(0, 1, 0)', () => {
    const v = V.vector(0, 1, 0)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(0, 0, 1)', () => {
    const v = V.vector(0, 0, 1)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(1, 2, 3)', () => {
    const v = V.vector(1, 2, 3)
    it('has magnitude  √14', () => {
      expect(V.magnitude(v)).toEqual( d (14.0).sqrt(14) )
    })
  })
  describe('Computing the magnitude of vector(-1, -2, -3)', () => {
    const v = V.vector(-1, -2, -3)
    it('has magnitude  √14', () => {
      expect(V.magnitude(v)).toEqual( d (14.0).sqrt(14) )
    })
  })
})

describe('Vector normalisation', () => {
  describe('Normalising vector(4, 0, 0)', () => {
    const vector = V.vector(4, 0, 0)
    it('returns vector(1, 0, 0)', () => {
      expect(V.normalise(vector)).toEqual(V.vector(1, 0, 0))
    })
  })

  describe('Normalising vector(1, 2, 3)', () => {
    const vector = V.vector(1, 2, 3)

    it('returns vector(1/√14, 2/√14, 3/√14)', () => {
      const normalisedVector = V.normalise(vector)
      expect(normalisedVector.x).toEqual(d(1).dividedBy(d(14).sqrt()))
      expect(normalisedVector.y).toEqual(d(2).dividedBy(d(14).sqrt()))
      expect(normalisedVector.z).toEqual(d(3).dividedBy(d(14).sqrt()))
    })
  })

  describe('The magnitude of a normalized vector', () => {
    const normalisedVector = V.normalise(V.vector(1, 2, 3))
    const magnitude = V.magnitude(normalisedVector)
    it('returns 1', () => {
      expect(magnitude).toEqual(d(1))
    })
  })
})

describe('The dot product of two vectors', () => {
  it('sums the products of the corresponding component of each vector', () => {
    const a = V.vector(1, 2, 3)
    const b = V.vector(2, 3, 4)
    expect(V.dot(a,b)).toEqual(d(20))
  })
})