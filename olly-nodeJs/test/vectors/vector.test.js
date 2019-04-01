import { Vector, magnitude } from '../../src/vectors'
import d from '../../src/utils/decimal'

describe('Creating a vectpr', () => {

  test('creates tuple with w=0.0', () => {
    const vector = Vector(4.0, 3.0, 2.0, 0.0)
    expect(vector.x.equals(4.0)).toBe(true)
    expect(vector.y.equals(3.0)).toBe(true)
    expect(vector.z.equals(2.0)).toBe(true)
    expect(vector.w).toBe(0.0)
  })
})

describe('Vector Magnitute', () => {
  describe('Computing the magnitude of vector(1, 0, 0)', () => {
    const v = Vector(1, 0, 0)
    it('has magnitude  1', () => {
      expect(magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(0, 1, 0)', () => {
    const v = Vector(0, 1, 0)
    it('has magnitude  1', () => {
      expect(magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(0, 0, 1)', () => {
    const v = Vector(0, 0, 1)
    it('has magnitude  1', () => {
      expect(magnitude(v)).toEqual( d(1).sqrt(1) )
    })
  })
  describe('Computing the magnitude of vector(1, 2, 3)', () => {
    const v = Vector(1, 2, 3)
    it('has magnitude  √14', () => {
      expect(magnitude(v)).toEqual( d (14.0).sqrt(14) )
    })
  })
  describe('Computing the magnitude of vector(-1, -2, -3)', () => {
    const v = Vector(-1, -2, -3)
    it('has magnitude  √14', () => {
      expect(magnitude(v)).toEqual( d (14.0).sqrt(14) )
    })
  })
})