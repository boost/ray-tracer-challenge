import * as V from '../../src/vectors'

describe('Creating a vectpr', () => {

  test('creates tuple with w=0.0', () => {
    const vector = V.vector(4.0, 3.0, 2.0, 0.0)
    expect(vector.x.toNumber()).toEqual(4.0)
    expect(vector.y.toNumber()).toEqual(3.0)
    expect(vector.z.toNumber()).toEqual(2.0)
    expect(vector.w.toNumber()).toEqual(0.0)
  })
})

describe('Vector Magnitute', () => {
  describe('Computing the magnitude of vector(1, 0, 0)', () => {
    const v = V.vector(1, 0, 0)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual(1.0)
    })
  })
  describe('Computing the magnitude of vector(0, 1, 0)', () => {
    const v = V.vector(0, 1, 0)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual(1.0)
    })
  })
  describe('Computing the magnitude of vector(0, 0, 1)', () => {
    const v = V.vector(0, 0, 1)
    it('has magnitude  1', () => {
      expect(V.magnitude(v)).toEqual(1.0)
    })
  })
  describe('Computing the magnitude of vector(1, 2, 3)', () => {
    const v = V.vector(1, 2, 3)
    it('has magnitude  √14', () => {
      expect(V.magnitude(v)).toEqual( Math.sqrt(14.0) )
    })
  })
  describe('Computing the magnitude of vector(-1, -2, -3)', () => {
    const v = V.vector(-1, -2, -3)
    it('has magnitude  √14', () => {
      expect(V.magnitude(v)).toEqual( Math.sqrt(14.0) )
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
      expect(normalisedVector.x.toNumber()).toEqual(1 / Math.sqrt(14))
      expect(normalisedVector.y.toNumber()).toEqual(2 / Math.sqrt(14))
      expect(normalisedVector.z.toNumber()).toEqual(3 / Math.sqrt(14))
    })
  })

  describe('The magnitude of a normalized vector', () => {
    const normalisedVector = V.normalise(V.vector(1, 2, 3))
    const magnitude = V.magnitude(normalisedVector)
    it('returns 1', () => {
      expect(magnitude).toEqual(1.0)
    })
  })
})

describe('The dot product of two vectors', () => {
  it('sums the products of the corresponding component of each vector', () => {
    const a = V.vector(1, 2, 3)
    const b = V.vector(2, 3, 4)
    expect(V.dot(a,b)).toEqual(20)
  })
})

describe('The cross product of two vectors', () => {
  const a = V.vector(1, 2, 3)
  const b = V.vector(2, 3, 4)
  it('cross(a, b) = vector(-1, 2, -1)', () => {
    expect(V.cross(a, b)).toEqual(V.vector(-1, 2, -1))
  })

  it('And cross(b, a) = vector(1, -2, 1)', () => {
    expect(V.cross(b,a)).toEqual(V.vector(1, -2, 1))
  })
})

