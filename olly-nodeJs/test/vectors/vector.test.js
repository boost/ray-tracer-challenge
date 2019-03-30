import { Vector } from '../../src/vectors'

describe('Creating a vectpr', () => {

  test('creates tuple with w=0.0', () => {
    const vector = Vector(4.0, 3.0, 2.0, 0.0)
    expect(vector.x.equals(4.0)).toBe(true)
    expect(vector.y.equals(3.0)).toBe(true)
    expect(vector.z.equals(2.0)).toBe(true)
    expect(vector.w).toBe(0.0)
  })
})
