require 'rails_helper'

describe 'Colours' do
  context 'Defining a colour' do
    it 'Colours are (red, green, blue) tuples' do
      colour = build(:colour, x: -0.5, y: 0.4, z: 1.7)
      expect(Epsilon.equal(colour.red, -0.5)).to be true
      expect(Epsilon.equal(colour.green, 0.4)).to be true
      expect(Epsilon.equal(colour.blue, 1.7)).to be true
    end
  end

  context 'Adding colours' do
    it 'Colours can be added' do
      c1 = build(:colour, x: 0.9, y: 0.6, z: 0.75)
      c2 = build(:colour, x: 0.7, y: 0.1, z: 0.25)
      result = c1.add(c2)
      expect(Epsilon.equal(result.red, 1.6)).to be true
      expect(Epsilon.equal(result.green, 0.7)).to be true
      expect(Epsilon.equal(result.blue, 1.0)).to be true
    end
  end

  context 'Subtracting colours' do
    it 'Colours can be subtracted' do
      c1 = build(:colour, x: 0.9, y: 0.6, z: 0.75)
      c2 = build(:colour, x: 0.7, y: 0.1, z: 0.25)
      result = c1.subtract(c2)
      expect(Epsilon.equal(result.red, 0.2)).to be true
      expect(Epsilon.equal(result.green, 0.5)).to be true
      expect(Epsilon.equal(result.blue, 0.5)).to be true
    end
  end

  context 'Multiplying colours' do
    it 'Colours can be multiplied by a scalar' do
      c1 = build(:colour, x: 0.2, y: 0.3, z: 0.4)
      result = c1.multiply(2)
      expect(Epsilon.equal(result.red, 0.4)).to be true
      expect(Epsilon.equal(result.green, 0.6)).to be true
      expect(Epsilon.equal(result.blue, 0.8)).to be true
    end

    it 'Colours can be multiplied by a colour' do
      c1 = build(:colour, x: 1, y: 0.2, z: 0.4)
      c2 = build(:colour, x: 0.9, y: 1, z: 0.1)
      result = c1.multiply_by_colour(c2)
      expect(Epsilon.equal(result.red, 0.9)).to be true
      expect(Epsilon.equal(result.green, 0.2)).to be true
      expect(Epsilon.equal(result.blue, 0.04)).to be true
    end
  end
end
