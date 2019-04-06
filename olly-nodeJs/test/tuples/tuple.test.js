import * as T from '../../src/tuples'
import * as P from '../../src/points'
import * as V from '../../src/vectors'

describe('Creating tuples', () => {
  test('A tuple with w=1.0 is a point', () => {
    const a = T.tuple(4.3, -4.2, 4.1, 1.0)

    expect(T.x(a).toNumber()).toEqual( 4.3)
    expect(T.y(a).toNumber()).toEqual(-4.2)
    expect(T.z(a).toNumber()).toEqual( 4.1)
    expect(T.w(a).toNumber()).toEqual( 1.0)
    expect(P.isPoint(a)).toBe(true)
  })

  test('A tuple with w=0.0 is a vector', () => {
    const a = T.tuple(4.3, -4.2, 4.1, 0.0)

    expect(T.x(a).toNumber()).toEqual( 4.3)
    expect(T.y(a).toNumber()).toEqual(-4.2)
    expect(T.z(a).toNumber()).toEqual( 4.1)
    expect(T.w(a).toNumber()).toEqual( 0.0)
    expect(V.isVector(a)).toBe(true)
  })
})

describe('equalTuples', () => {
  test('two identical tuples return true', () => {
    const a = T.tuple(4.3, 2.5, 9.2, 1.0)
    const b = T.tuple(4.3, 2.5, 9.2, 1.0)

    expect(T.equalTuples(a,b)).toBe(true)
  })

  test('two different tuples return false', () => {
    const a = T.tuple(4.3, 2.5, 9.2, 1.0)
    const b = T.tuple(4.0, 2.5, 9.2, 1.0)

    expect(T.equalTuples(a,b)).toBe(false)
  })
})

describe('Add tuples', () => {
  const point   = T.tuple(4.0, 2.5, 9.2, 1.0)
  const vector1 = T.tuple(4.0, 2.0, 9.24, 0.0)

  describe('a vector and a point', () => {
    const newPoint = T.addTuples(point, vector1)

    test('returns a point', () => {
      expect(P.isPoint(newPoint)).toBe(true)
    })

    test('sums the xyz', () => {
      expect(T.x(newPoint).toNumber()).toEqual(8.0)
      expect(T.y(newPoint).toNumber()).toEqual(4.5)
      expect(T.z(newPoint).toNumber()).toEqual(18.44)
    })
  })

  describe('a vector and a vector', () => {
    let   vector1   = T.tuple(4.0,   2.0,  9.0, 0.0)
    const vector2   = T.tuple(444.0, 2.0,  4.0, 0.0)
    const newVector = T.addTuples(vector2, vector1)

    test('returns a vector', () => {
      expect(V.isVector(newVector)).toBe(true)
    })

    test('sums the xyz', () => {
      expect(T.x(newVector).toNumber()).toEqual(448.0)
      expect(T.y(newVector).toNumber()).toEqual(4.0  )
      expect(T.z(newVector).toNumber()).toEqual(13.0 )
    })
  })
})

describe('Subtract tuples', () => {
  const point    = P.point(1.0, 4.0, 7.0)
  const point2   = P.point(2.0, 5.0, 8.0)
  const vector1  = T.tuple(3.0, 6.0, 9.0, 0.0)

  describe('subtracting a point from a point', () => {
    const newPoint = T.subtractTuples(point, point2)

    test('returns a vector', () => {
      expect(V.isVector(newPoint)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(T.x(newPoint).toNumber()).toEqual(-1.0)
      expect(T.y(newPoint).toNumber()).toEqual(-1.0)
      expect(T.z(newPoint).toNumber()).toEqual(-1.0)
    })
  })

  describe('subtracting a vector from a point', () => {
    const newPoint = T.subtractTuples(point, vector1)

    test('returns a point', () => {
      expect(P.isPoint(newPoint)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(T.x(newPoint).toNumber()).toEqual(-2.0)
      expect(T.y(newPoint).toNumber()).toEqual(-2.0)
      expect(T.z(newPoint).toNumber()).toEqual(-2.0)
    })
  })

  describe('subtracting a vector from a vector', () => {
    let   vector1   = T.tuple(3.0, 6.0, 9.0, 0.0)
    const vector2   = T.tuple(4.0, 2.0, 4.0, 0.0)
    const newVector = T.subtractTuples(vector1, vector2)

    test('returns a vector', () => {
      expect(V.isVector(newVector)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(T.x(newVector).toNumber()).toEqual(-1.0)
      expect(T.y(newVector).toNumber()).toEqual( 4.0)
      expect(T.z(newVector).toNumber()).toEqual( 5.0)
    })
  })

  describe('subtracting a vector from zero', () => {
    let   vector1   = T.tuple(3.0, 6.0, 9.0, 0.0)
    const zero      = T.tuple(0.0, 0.0, 0.0, 0.0)
    const newVector = T.subtractTuples(zero, vector1)

    test('returns a vector', () => {
      expect(V.isVector(newVector)).toBe(true)
    })

    test('subtracts the xyz', () => {
      expect(T.x(newVector).toNumber()).toEqual(-3.0)
      expect(T.y(newVector).toNumber()).toEqual(-6.0)
      expect(T.z(newVector).toNumber()).toEqual(-9.0)
    })
  })
})

describe('Negating a tuple', () => {
  let tuple1           = T.tuple(3.0, 6.0, 9.0, 1.0)
  const negativeTuple  = T.negate(tuple1)

  it('negates all the tuple values', () => {
    expect(T.x(negativeTuple).toNumber()).toEqual(-3.0)
    expect(T.y(negativeTuple).toNumber()).toEqual(-6.0)
    expect(T.z(negativeTuple).toNumber()).toEqual(-9.0)
    expect(T.w(negativeTuple).toNumber()).toEqual(-1.0)
  })
})

describe('Multiplying a tuple by a scalar', () => {
  const a = T.tuple(1, -2, 3, -4)
  it('multipllies the tuple by the scalar', () => {
    const b = T.multiply(a, 3.5)

    expect(T.x(b).toNumber()).toEqual(T.x(a).toNumber() * 3.5)
    expect(T.y(b).toNumber()).toEqual(T.y(a).toNumber() * 3.5)
    expect(T.z(b).toNumber()).toEqual(T.z(a).toNumber() * 3.5)
    expect(T.w(b).toNumber()).toEqual(T.w(a).toNumber() * 3.5)
  })
})

describe('Multiplying a tuple by a fraction', () => {
  const a = T.tuple(1, -2, 3, -4)
  it('multiplies the tuple by the fraction', () => {
    const b = T.multiply(a, 0.5)

    expect(T.x(b).toNumber()).toEqual(T.x(a).toNumber() * 0.5)
    expect(T.y(b).toNumber()).toEqual(T.y(a).toNumber() * 0.5)
    expect(T.z(b).toNumber()).toEqual(T.z(a).toNumber() * 0.5)
    expect(T.w(b).toNumber()).toEqual(T.w(a).toNumber() * 0.5)
  })
})

describe('Dividing a tuple by a scalar', () => {
  const a = T.tuple(1, -2, 3, -4)
  it('divides the tuple by the scalar', () => {
    const b = T.divide(a, 2)

    expect(T.x(b).toNumber()).toEqual(T.x(a).toNumber() / 2)
    expect(T.y(b).toNumber()).toEqual(T.y(a).toNumber() / 2)
    expect(T.z(b).toNumber()).toEqual(T.z(a).toNumber() / 2)
    expect(T.w(b).toNumber()).toEqual(T.w(a).toNumber() / 2)
  })
})
