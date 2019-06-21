FactoryBot.define do
  factory :tuple, class: Tuple do |tuple|
    tuple.x { 4.3 }
    tuple.y { -4.2 }
    tuple.z { 3.1 }
    tuple.w { 1.0 }
  end

  trait :vector do
    w { 0.0 }
  end

  trait :point do
    w { 1.0 }
  end
end
