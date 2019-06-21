#!/usr/bin/env ruby

require 'rubygems'
require 'ruby-prof'

Dir["./*.rb"].each {|file| require file }
Dir["./models/*.rb"].each {|file| require file }

canvas = Canvas.new(900, 550)
p = Projectile.new(Point.new(0, 1, 0), Vector.new(1, 1.8, 0).normalize.multiply(11.25))
e = Environment.new(Vector.new(0, -0.1, 0), Vector.new(-0.01, 0, 0))

i = 0
num = 5


gc = Magick::Draw.new
canvas_height = 550

while p.position.y > 0  do
   puts("position: x:" + p.position.x.to_s + " y: " + p.position.y.to_s + " z: " + p.position.z.to_s)
   puts("velocity: x:" + p.velocity.x.to_s + " y: " + p.velocity.y.to_s + " z: " + p.velocity.z.to_s)

   # plot on the canvas
   gc.point(p.position.x, canvas_height - p.position.y)
   gc.fill('red')

   p = Projectile.tick(e, p)
   i = i + 1
end

canvas = Magick::Image.new(900, canvas_height, Magick::HatchFill.new('black', 'black'))
gc.draw(canvas)
canvas.border!(1,1,'gray50')
canvas.write('text_align.gif')
