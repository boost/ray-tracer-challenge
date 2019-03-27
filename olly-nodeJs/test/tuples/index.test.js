import {tuple, Point, Vector} from '../../src/tuples'

test('Point creates tuples with w=1.0', () => {
  const point = new Point(4.0, 3.0, 2.0, 1.0)
  expect(point.x).toBe(4.0)
  expect(point.y).toBe(3.0)
  expect(point.z).toBe(2.0)
  expect(point.w).toBe(1.0)
})
test('Vector creates tuples with w=0.0', () => {
  const vector = new Vector(4.0, 3.0, 2.0, 0.0)
  expect(vector.x).toBe(4.0)
  expect(vector.y).toBe(3.0)
  expect(vector.z).toBe(2.0)
  expect(vector.w).toBe(0.0)
})

test('A tuple with w=1.0 is a point', () => {
  const a = tuple(4.3, -4.2, 4.1, 1.0)

  expect(a.x).toBe(4.3)
  expect(a.y).toBe(-4.2)
  expect(a.z).toBe(4.1)
  expect(a.w).toBe(1.0)
  expect(a instanceof Point).toBe(true)
})

test('A tuple with w=0.0 is a vector', () => {
  const a = tuple(4.3, -4.2, 4.1, 0.0)

  expect(a.x).toBe(4.3)
  expect(a.y).toBe(-4.2)
  expect(a.z).toBe(4.1)
  expect(a.w).toBe(0.0)
  expect(a instanceof Vector).toBe(true)
})