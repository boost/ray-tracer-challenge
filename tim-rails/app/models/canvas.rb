require 'rubygems'
require 'ruby-prof'
require 'rmagick'

class Canvas
  attr_accessor :canvas,
                :width,
                :height

  def initialize(width, height)
    @width = width
    @height = height
    @canvas = Magick::ImageList.new
    @canvas.new_image(width, height, Magick::HatchFill.new('white', 'white'))
  end
end
