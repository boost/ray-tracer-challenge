class Epsilon
  EPSILON = 0.00001

  def self.equal(a, b)
    (a - b).abs < EPSILON
  end
end
