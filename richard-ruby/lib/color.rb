# frozen_string_literal: true

# lib/color.rb
class Color < Tuple
  attr_accessor :red, :green, :blue

  ATTRIBUTES = %i[red green blue].freeze

  def initialize(red, green, blue)
    @red = red
    @green = green
    @blue = blue
  end
end
