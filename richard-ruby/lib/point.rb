# frozen_string_literal: true

# lib/point.rb
class Point < Tuple
  def initialize(x, y, z)
    @x = x
    @y = y
    @z = z
    @w = 1
  end
end
