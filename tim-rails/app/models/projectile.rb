class Projectile
  attr_accessor :position,
                :velocity

  def initialize(position, velocity)
    @position = position
    @velocity = velocity
  end

  def self.tick(env, proj)
    position = proj.position.add(proj.velocity)
    velocity = proj.velocity.add(env.gravity.add(env.wind))
    return Projectile.new(position, velocity)
  end
end
