FactoryBot.define do
  factory :colour, class: Colour do |colour|
    colour.x { 4.3 }
    colour.y { -4.2 }
    colour.z { 3.1 }
    colour.w { 0 }
  end
end
