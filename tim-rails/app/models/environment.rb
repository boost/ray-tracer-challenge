class Environment
  attr_accessor :gravity,
                :wind

  def initialize(gravity, wind)
    @gravity = gravity
    @wind = wind
  end
end
