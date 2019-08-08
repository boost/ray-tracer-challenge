require 'pry-byebug'

RSpec.describe Color do
  context 'Colors are (red, green, blue) tuples)' do
    let(:color) { Color.new(-0.5, 0.4, 1.7) }

    it 'knows its red value' do
      expect(color.red).to eq -0.5
    end

    it 'knows its green value' do
      expect(color.green).to eq 0.4
    end

    it 'knows its blue value' do
      expect(color.blue).to eq 1.7
    end
  end

  context 'Adding colors' do
    let(:color_one) { Color.new(0.9, 0.6, 0.75) }
    let(:color_two) { Color.new(0.9, 0.1, 0.25) }

    it 'correctly adds two colors together' do
      color_one.add(color_two)
    end
  end
end
