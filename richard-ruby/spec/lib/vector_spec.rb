RSpec.describe Vector do
  describe 'it creates tuples with w=0' do
    let(:vector) { Vector.new(4, -4, 3) }

    it 'creates a tuple with x = 4' do
      expect(vector.x).to eq 4
    end

    it 'creates a tuple with y = -4' do
      expect(vector.y).to eq -4
    end

    it 'creates a tuple with z = 3' do
      expect(vector.z).to eq 3
    end

    it 'creates a tuple with w = 0' do
      expect(vector.w).to eq 0
    end

    it 'knows that it is a vector' do
      expect(vector.vector?).to eq true
    end

    it 'knows that it is not a point' do
      expect(vector.point?).to eq false
    end
  end
end
