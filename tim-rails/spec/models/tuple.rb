require 'rails_helper'

describe 'Tuple' do
  context 'point' do
    subject(:tuple) { build(:tuple, :point) }

    it { is_expected.to respond_to(:x) }
    it { is_expected.to respond_to(:y) }
    it { is_expected.to respond_to(:z) }
    it { is_expected.to respond_to(:w) }

    it 'returns true for is_point' do
      expect(subject.is_point?).to be true
    end

    it 'returns false for is_vector' do
      expect(subject.is_vector?).to be false
    end

    it 'returns expected values for point' do
      point = build(:tuple, :point, x: 4, y: -4, z: 3)
      expect(point.x).to be 4
      expect(point.y).to be -4
      expect(point.z).to be 3
      expect(point.w).to be 1.0
      expect(point.is_point?).to be true
    end
  end

  context 'vector' do
    subject(:tuple) { build(:tuple, :vector) }

    it { is_expected.to respond_to(:x) }
    it { is_expected.to respond_to(:y) }
    it { is_expected.to respond_to(:z) }
    it { is_expected.to respond_to(:w) }

    it 'returns true for is_vector' do
      expect(subject.is_vector?).to be true
    end

    it 'returns false for is_point' do
      expect(subject.is_point?).to be false
    end

    it 'returns expected values for vector' do
      vector = build(:tuple, :vector, x: 4, y: -4, z: 3)
      expect(vector.x).to be 4
      expect(vector.y).to be -4
      expect(vector.z).to be 3
      expect(vector.w).to be 0.0
      expect(vector.is_vector?).to be true
    end
  end

  context 'addition' do
    it 'can add two tuples' do
      point = build(:tuple, :point, x: 3, y: -2, z: 5)
      vector = build(:tuple, :vector, x: -2, y: 3, z: 1)
      result = point.add(vector)
      expect(Epsilon.equal(result.x, 1)).to be true
      expect(Epsilon.equal(result.y, 1)).to be true
      expect(Epsilon.equal(result.z, 6)).to be true
      expect(Epsilon.equal(result.w, 1)).to be true
      expect(result.is_point?).to be true
      expect(result.is_vector?).to be false
    end
  end

  context 'subtraction' do
    it 'can subtract two points' do
      p1 = build(:tuple, :point, x: 3, y: 2, z: 1)
      p2 = build(:tuple, :point, x: 5, y: 6, z: 7)
      result = p1.subtract(p2)
      expect(Epsilon.equal(result.x, -2)).to be true
      expect(Epsilon.equal(result.y, -4)).to be true
      expect(Epsilon.equal(result.z, -6)).to be true
      expect(Epsilon.equal(result.w, 0)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end

    it 'can subtract a vector from a point' do
      p1 = build(:tuple, :point, x: 3, y: 2, z: 1)
      p2 = build(:tuple, :vector, x: 5, y: 6, z: 7)
      result = p1.subtract(p2)
      expect(Epsilon.equal(result.x, -2)).to be true
      expect(Epsilon.equal(result.y, -4)).to be true
      expect(Epsilon.equal(result.z, -6)).to be true
      expect(Epsilon.equal(result.w, 1)).to be true
      expect(result.is_point?).to be true
      expect(result.is_vector?).to be false
    end

    it 'can subtract two vectors' do
      p1 = build(:tuple, :vector, x: 3, y: 2, z: 1)
      p2 = build(:tuple, :vector, x: 5, y: 6, z: 7)
      result = p1.subtract(p2)
      expect(Epsilon.equal(result.x, -2)).to be true
      expect(Epsilon.equal(result.y, -4)).to be true
      expect(Epsilon.equal(result.z, -6)).to be true
      expect(Epsilon.equal(result.w, 0)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end

    it 'can subtract a vector from the zero vector' do
      p1 = build(:tuple, :vector, x: 0, y: 0, z: 0)
      p2 = build(:tuple, :vector, x: 1, y: -2, z: 3)
      result = p1.subtract(p2)
      expect(Epsilon.equal(result.x, -1)).to be true
      expect(Epsilon.equal(result.y, 2)).to be true
      expect(Epsilon.equal(result.z, -3)).to be true
      expect(Epsilon.equal(result.w, 0)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end
  end

  context 'negation' do
    it 'can negate a tuple' do
      tuple = build(:tuple, x: 1, y: -2, z: 3, w: -4)
      result = tuple.negate()
      expect(Epsilon.equal(result.x, -1)).to be true
      expect(Epsilon.equal(result.y, 2)).to be true
      expect(Epsilon.equal(result.z, -3)).to be true
      expect(Epsilon.equal(result.w, 4)).to be true
    end
  end

  context 'multiplication' do
    it 'can multiply a tuple by a scalar' do
      tuple = build(:tuple, :point, x: 1, y: -2, z: 3, w: -4)
      result = tuple.multiply(3.5)
      expect(Epsilon.equal(result.x, 3.5)).to be true
      expect(Epsilon.equal(result.y, -7)).to be true
      expect(Epsilon.equal(result.z, 10.5)).to be true
      expect(Epsilon.equal(result.w, -14)).to be true
    end

    it 'can multiply a tuple by a fraction' do
      tuple = build(:tuple, :point, x: 1, y: -2, z: 3, w: -4)
      result = tuple.multiply(0.5)
      expect(Epsilon.equal(result.x, 0.5)).to be true
      expect(Epsilon.equal(result.y, -1)).to be true
      expect(Epsilon.equal(result.z, 1.5)).to be true
      expect(Epsilon.equal(result.w, -2)).to be true
    end
  end

  context 'division' do
    it 'can divide a tuple by a scalar' do
      tuple = build(:tuple, :point, x: 1, y: -2, z: 3, w: -4)
      result = tuple.divide(2)
      expect(Epsilon.equal(result.x, 0.5)).to be true
      expect(Epsilon.equal(result.y, -1)).to be true
      expect(Epsilon.equal(result.z, 1.5)).to be true
      expect(Epsilon.equal(result.w, -2)).to be true
    end
  end

  context 'magnitude' do
    it 'computing magnitude of vector(0,1,0)' do
      tuple = build(:tuple, :vector, x: 0, y: 1, z: 0)
      result = tuple.magnitude
      expect(Epsilon.equal(result, 1)).to be true
    end

    it 'computing magnitude of vector(0,0,1)' do
      tuple = build(:tuple, :vector, x: 0, y: 0, z: 1)
      result = tuple.magnitude
      expect(Epsilon.equal(result, 1)).to be true
    end

    it 'computing magnitude of vector(1,2,3)' do
      tuple = build(:tuple, :vector, x: 1, y: 2, z: 3)
      result = tuple.magnitude
      expect(Epsilon.equal(result, Math.sqrt(14))).to be true
    end

    it 'computing magnitude of vector(-1,-2,-3)' do
      tuple = build(:tuple, :vector, x: -1, y: -2, z: -3)
      result = tuple.magnitude
      expect(Epsilon.equal(result, Math.sqrt(14))).to be true
    end
  end

  context 'normalize' do
    it 'normalizing vector(4, 0, 0) gives (1, 0, 0)' do
      tuple = build(:tuple, :vector, x: 4, y: 0, z: 0)
      result = tuple.normalize
      expect(Epsilon.equal(result.x, 1)).to be true
      expect(Epsilon.equal(result.y, 0)).to be true
      expect(Epsilon.equal(result.z, 0)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end

    it 'normalizing vector(1, 2, 3) gives (1, 0, 0)' do
      tuple = build(:tuple, :vector, x: 1, y: 2, z: 3)
      result = tuple.normalize
      expect(Epsilon.equal(result.x, 1 / Math.sqrt(14))).to be true
      expect(Epsilon.equal(result.y, 2 / Math.sqrt(14))).to be true
      expect(Epsilon.equal(result.z, 3 / Math.sqrt(14))).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end

    it 'the magnitude of normalized vector(1, 2, 3) gives 1' do
      tuple = build(:tuple, :vector, x: 1, y: 2, z: 3)
      result = tuple.normalize.magnitude
      expect(Epsilon.equal(result, 1)).to be true
    end
  end

  context 'dot product' do
    it 'can calculate the dot product of two tuples' do
      v1 = build(:tuple, :vector, x: 1, y: 2, z: 3)
      v2 = build(:tuple, :vector, x: 2, y: 3, z: 4)
      result = Tuple.dot(v1, v2)
      expect(Epsilon.equal(result, 20)).to be true
    end
  end

  context 'cross product' do
    it 'can calculate the cross product of two tuples' do
      v1 = build(:tuple, :vector, x: 1, y: 2, z: 3)
      v2 = build(:tuple, :vector, x: 2, y: 3, z: 4)
      result = Tuple.cross(v1, v2)
      expect(Epsilon.equal(result.x, -1)).to be true
      expect(Epsilon.equal(result.y, 2)).to be true
      expect(Epsilon.equal(result.z, -1)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end

    it 'can calculate the cross product of two tuples in reverse order' do
      v1 = build(:tuple, :vector, x: 2, y: 3, z: 4)
      v2 = build(:tuple, :vector, x: 1, y: 2, z: 3)
      result = Tuple.cross(v1, v2)
      expect(Epsilon.equal(result.x, 1)).to be true
      expect(Epsilon.equal(result.y, -2)).to be true
      expect(Epsilon.equal(result.z, 1)).to be true
      expect(result.is_point?).to be false
      expect(result.is_vector?).to be true
    end
  end
end
