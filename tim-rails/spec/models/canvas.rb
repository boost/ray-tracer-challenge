require 'rails_helper'

describe 'Canvas' do
  context 'Defining a canvas' do
    it 'Can create a canvas' do
      canvas = Canvas.new(10, 20)
      expect(canvas.width).to eq 10
      expect(canvas.height).to eq 20

      x = 0
      y = 0
      while x < 10 do
        while y < 20 do
          expect(canvas.canvas.pixel_color(x, y).to_color).to eq 'white'
          y +=1
        end
        x +=1
      end
    end
  end

  context 'Writing to a canvas' do
    it 'Can write pixels to a canvas' do
      canvas = Canvas.new(10, 20)
      canvas.canvas.pixel_color(2, 3, Magick::Pixel.new(1, 0, 0))
      expect(canvas.canvas.pixel_color(2, 3).red).to eq 1
    end
  end
end
