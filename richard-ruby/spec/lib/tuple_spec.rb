RSpec.describe Tuple do
  context 'A tuple with w=1.0 is a point' do
    describe 'Given a tuple(4.3, -4.2, 3.1, 1.0)' do
      let(:point) { Tuple.new(4.3, -4.2, 3.1, 1.0) }

      it 'sets a.x to be 4.3' do
        expect(point.x).to eq 4.3
      end

      it 'sets a.y to be -4.2' do
        expect(point.y).to eq -4.2
      end

      it 'sets a.z to be 3.1' do
        expect(point.z).to eq 3.1
      end

      it 'sets a.w to be 1.0' do
        expect(point.w).to eq 1.0
      end

      it 'is a point' do
        expect(point.point?).to eq true
      end

      it 'is not a vector' do
        expect(point.vector?).to eq false
      end
    end
  end

  context 'A tuple with w=0 is a vector' do
    describe 'Given a tuple(4.3, -4.2, 3.1, 0.0)' do
      let(:vector) { Tuple.new(4.3, -4.2, 3.1, 0.0) }

      it 'sets a.x to be 4.3' do
        expect(vector.x).to eq 4.3
      end

      it 'sets a.y to be -4.2' do
        expect(vector.y).to eq -4.2
      end

      it 'sets a.z to be 3.1' do
        expect(vector.z).to eq 3.1
      end

      it 'sets a.w to be 0.0' do
        expect(vector.w).to eq 0.0
      end

      it 'is not a point' do
        expect(vector.point?).to eq false
      end

      it 'is a vector' do
        expect(vector.vector?).to eq true
      end
    end
  end

  describe '.equal?' do
    let(:tuple_one)   { Tuple.new(4.0000001, 3, 1, 0) }
    let(:tuple_two)   { Tuple.new(4.0000002, 3, 1, 0) }
    let(:tuple_three) { Tuple.new(1, 2, 1, 0) }

    it 'returns true if two tuples have equal value' do
      expect(tuple_one.equal?(tuple_two)).to eq true
    end

    it 'returns false if two tuples do not have equal value' do
      expect(tuple_one.equal?(tuple_three)).to eq false
    end
  end

  describe '.add' do
    let(:tuple_one) { Tuple.new(3, -2, 5, 1) }
    let(:tuple_two) { Tuple.new(-2, 3, 1, 0) }

    context 'returns a new Tuple with the result of adding the values of the two given Tuples' do
      let(:tuple_three) { tuple_one.add(tuple_two) }

      it 'sets the x of tuple_three to be 1' do
        expect(tuple_three.x).to eq 1
      end

      it 'sets the y of tuple_three to be 1' do
        expect(tuple_three.y).to eq 1
      end

      it 'sets the z of tuple_three to be 6' do
        expect(tuple_three.z).to eq 6
      end

      it 'sets the w of tuple_three to be 1' do
        expect(tuple_three.w).to eq 1
      end
    end
  end

  describe '.subtract' do
    let(:point_one) { Point.new(3, 2, 1) }
    let(:point_two) { Point.new(5, 6, 7) }

    context 'returns a new Tuple with the result of subtracting the values of the two given Tuples' do
      let(:vector) { point_one.subtract(point_two) }

      it 'sets the x of the vector to be -2' do
        expect(vector.x).to eq -2
      end

      it 'sets the y of the vector to be -4' do
        expect(vector.y).to eq -4
      end

      it 'sets the z of the vector to be -6' do
        expect(vector.z).to eq -6
      end

      it 'sets the w of the vector to be 0' do
        expect(vector.w).to eq 0
      end

      it 'knows that it is a vector' do
        expect(vector.vector?).to eq true
      end
    end

    context 'Subtracting a vector from a point' do
      let(:point) { Point.new(3, 2, 1) }
      let(:vector) { Vector.new(5, 6, 7) }

      context 'it creates a new Tuple with the result of subtracting the values of the two given Tuples' do
        let(:new_point) { point.subtract(vector) }

        it 'sets the x of the point to be -2' do
          expect(new_point.x).to eq -2
        end

        it 'sets the y of the point to be -4' do
          expect(new_point.y).to eq -4
        end

        it 'sets the z of the point to be -6' do
          expect(new_point.z).to eq -6
        end

        it 'sets the w of the point to be 1' do
          expect(new_point.w).to eq 1
        end

        it 'knows that it is a point' do
          expect(new_point.point?).to eq true
        end
      end
    end

    context 'Subtracting two vectors' do
      let(:vector_one) { Vector.new(3, 2, 1) }
      let(:vector_two) { Vector.new(5, 6, 7) }

      context 'it creates a new Tuple with the result of subtracting the values of the given two Tuples' do
        let(:new_vector) { vector_one.subtract(vector_two) }

        it 'sets the x to be -2' do
          expect(new_vector.x).to eq -2
        end

        it 'sets the y to be -4' do
          expect(new_vector.y).to eq -4
        end

        it 'sets the z to be -6' do
          expect(new_vector.z).to eq -6
        end

        it 'sets the w to be 0' do
          expect(new_vector.w).to eq 0
        end

        it 'knows that it is a vector' do
          expect(new_vector.vector?).to eq true
        end
      end
    end

    context 'Subtracting a vector from the zero vector' do
      let(:vector_one) { Vector.new(0, 0, 0) }
      let(:vector_two) { Vector.new(1, -2, 3) }

      context 'it creates a new tuple with the inverse values of what was given' do
        let(:new_vector) { vector_one.subtract(vector_two) }

        it 'sets the x to be -2' do
          expect(new_vector.x).to eq -1
        end

        it 'sets the y to be -4' do
          expect(new_vector.y).to eq 2
        end

        it 'sets the z to be -6' do
          expect(new_vector.z).to eq -3
        end
      end
    end
  end

  describe '.negate' do
    let(:tuple) { Tuple.new(1, -2, 3, -4) }

    context 'it inverts the values of the tuple' do
      let(:inverted_tuple) { tuple.negate }

      it 'sets the x to be -1' do
        expect(inverted_tuple.x).to eq -1
      end

      it 'sets the y to be 2' do
        expect(inverted_tuple.y).to eq 2
      end

      it 'sets the z to be -3' do
        expect(inverted_tuple.z).to eq -3
      end

      it 'sets the w to eq 4' do
        expect(inverted_tuple.w).to eq 4
      end
    end
  end

  describe '.multiply' do
    let(:tuple) { Tuple.new(1, -2, 3, -4) }

    context 'multiplying a tuple by a scalar' do
      let(:multiplied_tuple) { tuple.multiply(3.5) }

      it 'sets the x to be 3.5' do
        expect(multiplied_tuple.x).to eq 3.5
      end

      it 'sets the y to be -7' do
        expect(multiplied_tuple.y).to eq -7
      end

      it 'sets the z to be 10.5' do
        expect(multiplied_tuple.z).to eq 10.5
      end

      it 'sets the w to be -14' do
        expect(multiplied_tuple.w).to eq -14
      end
    end

    context 'multiplying a tuple by a fraction' do
      let(:multipled_tuple) { tuple.multiply(0.5) }

      it 'sets the x to be 0.5' do
        expect(multipled_tuple.x).to eq 0.5
      end

      it 'sets the y to be -1' do
        expect(multipled_tuple.y).to eq -1
      end

      it 'sets the z to be 1.5' do
        expect(multipled_tuple.z).to eq 1.5
      end

      it 'sets the w to be -2' do
        expect(multipled_tuple.w).to eq -2
      end
    end
  end

  describe '.divide' do
    let(:tuple) { Tuple.new(1, -2, 3, -4) }

    context 'divide a tuple by a scalar' do
      let(:divided_tuple) { tuple.divide(2) }

      it 'sets the x to be 0.5' do
        expect(divided_tuple.x).to eq 0.5
      end

      it 'sets the y to be -1' do
        expect(divided_tuple.y).to eq -1
      end

      it 'sets the z to be 1.5' do
        expect(divided_tuple.z).to eq 1.5
      end

      it 'sets the w to be -2' do
        expect(divided_tuple.w).to eq -2
      end
    end
  end

  describe '.magnitude' do
    let(:vector_one)   { Vector.new(0, 1, 0) }
    let(:vector_two)   { Vector.new(0, 0, 1) }
    let(:vector_three) { Vector.new(1, 2, 3) }
    let(:vector_four)  { Vector.new(-1, -2, -3) }

    it 'returns the magnitude of 1' do
      expect(vector_one.magnitude).to eq 1
    end

    it 'returns the magnitude of 1' do
      expect(vector_two.magnitude).to eq 1
    end

    it 'returns the magnitude of 14' do
      expect(vector_three.magnitude).to eq Math.sqrt(14)
    end

    it 'returns the magnitude of square root of 14' do
      expect(vector_four.magnitude).to eq Math.sqrt(14)
    end
  end

  describe '.normalize' do
    let(:vector_one)   { Vector.new(4, 0, 0) }
    let(:vector_two)   { Vector.new(1, 2, 3) }

    context 'normalizes a vector from 4, 0, 0 to 1, 0, 0' do
      let(:normalized_vector_one) { vector_one.normalize }

      it 'sets the x to be 1' do
        expect(normalized_vector_one.x).to eq 1
      end

      it 'sets the y to be 0' do
        expect(normalized_vector_one.normalize.y).to eq 0
      end

      it 'sets the z to be 0' do
        expect(normalized_vector_one.normalize.z).to eq 0
      end
    end

    context 'normalizes a vector from 1, 2, 3' do
      let(:normalized_vector_two) { vector_two.normalize }

      it 'sets the x to be 0.26726' do

        expect(normalized_vector_two.x).to eq(1 / Math.sqrt(14))
      end

      it 'sets the y to be 0.53452' do
        expect(normalized_vector_two.y).to eq(2 / Math.sqrt(14))
      end

      it 'sets the z to be 0.80178' do
        expect(normalized_vector_two.z).to eq(3 / Math.sqrt(14))
      end

      it 'returns the magnitude of a normalized vector' do
        expect(normalized_vector_two.magnitude).to eq 1
      end
    end
  end

  describe '.dot' do
    let(:vector_one) { Vector.new(1, 2, 3) }
    let(:vector_two) { Vector.new(2, 3, 4) }

    it 'returns the dot product of two vectors' do
      expect(vector_one.dot(vector_two)).to eq 20
    end
  end

  describe '.cross' do
    let(:vector_one) { Vector.new(1, 2, 3) }
    let(:vector_two) { Vector.new(2, 3, 4) }

    it 'returns the cross product of vector_one and vector_two' do
      expect(vector_one.cross(vector_two)).to have_attributes(w: 0, x: -1, y: 2, z: -1)
    end

    it 'returns the cross production of vector_two and vector_one' do
      expect(vector_two.cross(vector_one)).to have_attributes(w: 0, x: 1, y: -2, z: 1)
    end
  end
end
