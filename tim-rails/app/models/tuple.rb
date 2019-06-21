class Tuple
  attr_accessor :x,
                :y,
                :z,
                :w

  def is_vector?
    w.to_f == 0.0.to_f
  end

  def is_point?
    w.to_f == 1.0.to_f
  end

  def add(tuple)
    result = Tuple.new
    result.x = x + tuple.x
    result.y = y + tuple.y
    result.z = z + tuple.z
    result.w = (w == 1 || tuple.w == 1) ? 1 : 0
    result
  end

  def subtract(tuple)
    result = Tuple.new
    result.x = x - tuple.x
    result.y = y - tuple.y
    result.z = z - tuple.z
    result.w = w - tuple.w
    result
  end

  def negate
    result = Tuple.new
    result.x = -x
    result.y = -y
    result.z = -z
    result.w = -w
    result
  end

  def multiply(scalar)
    result = Tuple.new
    result.x = x.to_f * scalar
    result.y = y.to_f * scalar
    result.z = z.to_f * scalar
    result.w = w.to_f * scalar
    result
  end

  def divide(scalar)
    result = Tuple.new
    result.x = x.to_f / scalar
    result.y = y.to_f / scalar
    result.z = z.to_f / scalar
    result.w = w.to_f / scalar
    result
  end

  def magnitude
    sum_of_squares = x*x + y*y + z*z
    Math.sqrt(sum_of_squares)
  end

  def normalize
    result = Tuple.new
    result.x = x.to_f / magnitude
    result.y = y.to_f / magnitude
    result.z = z.to_f / magnitude
    result.w = w.to_f / magnitude
    result
  end

  def self.dot(a, b)
    (a.x * b.x) +
    (a.y * b.y) +
    (a.z * b.z) +
    (a.w * b.w)
  end

  def self.cross(a, b)
    result = Tuple.new
    result.x = a.y * b.z - a.z * b.y
    result.y = a.z * b.x - a.x * b.z
    result.z = a.x * b.y - a.y * b.x
    result
  end
end

class Vector < Tuple
  attr_accessor :x,
                :y,
                :z,
                :w

  def initialize(x, y, z)
    @x = x
    @y = y
    @z = z
    @w = 0
  end
end

class Point < Tuple
  attr_accessor :x,
                :y,
                :z,
                :w

  def initialize(x, y, z)
    @x = x
    @y = y
    @z = z
    @w = 1
  end
end

class Colour < Tuple
  attr_accessor :x,
                :y,
                :z

  def red
    x
  end

  def green
    y
  end

  def blue
    z
  end

  def add(colour)
    result = Colour.new
    result.x = x + colour.x
    result.y = y + colour.y
    result.z = z + colour.z
    result
  end

  def subtract(colour)
    result = Colour.new
    result.x = x - colour.x
    result.y = y - colour.y
    result.z = z - colour.z
    result
  end

  def multiply(scalar)
    result = Colour.new
    result.x = x.to_f * scalar
    result.y = y.to_f * scalar
    result.z = z.to_f * scalar
    result
  end

  def multiply_by_colour(colour)
    result = Colour.new
    result.x = x * colour.x
    result.y = y * colour.y
    result.z = z * colour.z
    result
  end
end
