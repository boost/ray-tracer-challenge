class Tuple
  attr_accessor :x, :y, :z, :w

  EPSILON = 0.00001.freeze
  ATTRIBUTES = [:x, :y, :z, :w].freeze

  def initialize(x, y, z, w)
    @x = x
    @y = y
    @z = z
    @w = w
  end

  def equal?(tuple)
    ATTRIBUTES.map do |attribute|
      if(send(attribute) - tuple.send(attribute)).abs < EPSILON
        true
      else
        false
      end
    end.all? { |value| value == true }
  end

  def add(tuple)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      self.send(attribute) + tuple.send(attribute)
    end

    Tuple.new(*new_tuple_attributes)
  end

  def subtract(tuple)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      send(attribute) - tuple.send(attribute)
    end

    Tuple.new(*new_tuple_attributes)
  end

  def point?
    w == 1.0
  end

  def vector?
    w == 0.0
  end

  def negate
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      -self.send(attribute)
    end

    Tuple.new(*new_tuple_attributes)
  end

  def multiply(value)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      value * self.send(attribute).to_f
    end

    Tuple.new(*new_tuple_attributes)
  end

  def divide(value)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      self.send(attribute).to_f / value
    end

    Tuple.new(*new_tuple_attributes)
  end

  def magnitude
    Math.sqrt(ATTRIBUTES.map { |attribute| send(attribute) ** 2 }.sum)
  end

  def normalize
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      self.send(attribute).to_f / self.magnitude
    end

    Tuple.new(*new_tuple_attributes)
  end

  def dot(vector)
    self.x * vector.x + self.y * vector.y + self.z * vector.z + self.w * vector.w
  end

  def cross(vector)
    Vector.new(self.y * vector.z - self.z * vector.y,
               self.z * vector.x - self.x * vector.z,
               self.x * vector.y - self.y * vector.x)
  end
end
