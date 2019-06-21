# class Colour < Tuple
#   attr_accessor :x,
#                 :y,
#                 :z
#
#   def red
#     x
#   end
#
#   def green
#     y
#   end
#
#   def blue
#     z
#   end
#
#   def add(colour)
#     result = Colour.new
#     result.x = x + colour.x
#     result.y = y + colour.y
#     result.z = z + colour.z
#     result
#   end
#
#   def subtract(colour)
#     result = Colour.new
#     result.x = x - colour.x
#     result.y = y - colour.y
#     result.z = z - colour.z
#     result
#   end
#
#   def multiply(scalar)
#     result = Colour.new
#     result.x = x.to_f * scalar
#     result.y = y.to_f * scalar
#     result.z = z.to_f * scalar
#     result
#   end
#
#   def multiply_by_colour(colour)
#     result = Colour.new
#     result.x = x * colour.x
#     result.y = y * colour.y
#     result.z = z * colour.z
#     result
#   end
# end
