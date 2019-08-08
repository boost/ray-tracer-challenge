# frozen_string_literal: true

# lib/tuple.rb
class Tuple
  attr_accessor :x, :y, :z, :w

  EPSILON = 0.00001
  ATTRIBUTES = %i[x y z w].freeze

  def initialize(x, y, z, w)
    @x = x
    @y = y
    @z = z
    @w = w
  end

  def equal?(other)
    ATTRIBUTES.map do |attribute|
      (send(attribute) - other.send(attribute).abs < EPSILON)
    end.all? { |value| value == true }
  end

  def add(tuple)
    new_tuple_attributes = self.class::ATTRIBUTES.map do |attribute|
      send(attribute) + tuple.send(attribute)
    end

    self.class.new(*new_tuple_attributes)
  end

  def subtract(other)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      send(attribute) - other.send(attribute)
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
      -send(attribute)
    end

    Tuple.new(*new_tuple_attributes)
  end

  def multiply(value)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      value * send(attribute).to_f
    end

    Tuple.new(*new_tuple_attributes)
  end

  def divide(value)
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      send(attribute).to_f / value
    end

    Tuple.new(*new_tuple_attributes)
  end

  def magnitude
    Math.sqrt(ATTRIBUTES.map { |attribute| send(attribute)**2 }.sum)
  end

  def normalize
    new_tuple_attributes = ATTRIBUTES.map do |attribute|
      send(attribute).to_f / magnitude
    end

    Tuple.new(*new_tuple_attributes)
  end

  def dot(vector)
    x * vector.x + y * vector.y + z * vector.z + w * vector.w
  end

  def cross(vector)
    Vector.new(y * vector.z - z * vector.y,
               z * vector.x - x * vector.z,
               x * vector.y - y * vector.x)
  end

  protected

  def attributes
    self.class::ATTRIBUTES
  end
end
