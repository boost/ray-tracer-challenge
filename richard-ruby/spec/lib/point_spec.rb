require 'spec_helper'

RSpec.describe Point do
  describe 'Point creates Tuples with w=1' do
    let(:point) { Point.new(4, -4, 3) }

    it 'creates a tuple with x = 4' do
      expect(point.x).to eq 4
    end

    it 'creates a tuple with y = -4' do
      expect(point.y).to eq -4
    end

    it 'creates a tuple with z = 3' do
      expect(point.z).to eq 3
    end

    it 'creates a Tuple with w = 1' do
      expect(point.w).to eq 1
    end

    it 'knows that it is a point' do
      expect(point.point?).to eq true
    end

    it 'knows that it is not a vector' do
      expect(point.vector?).to eq false
    end
  end
end
