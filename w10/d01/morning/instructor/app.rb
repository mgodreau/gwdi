# number = 3
#
# if number == 3
#   puts "It's a 3!"
# end

# puts "How old are you?"
#
# user_input = gets.chomp.to_i
#
# if user_input > 20
#   puts "You can have a beer"
# end

# i = 1
# while i <= 100
#   if i%3 == 0 && i%5==0
#     puts "fizzbuzz"
#   elsif i%3 == 0
#     puts "fizz"
#   elsif i%5 ==0
#     puts "buzz"
#   else
#     puts i
#   end
#   i+=1
# end


puts "What is the unit of temperature you want converted? (k, c, f)"
user_unit = gets.chomp

puts "What is the temperature you want converted?"
user_temp = gets.chomp.to_i

def convert_temp(unit="f", temp=0)
  if unit == "f"
    celsius =  ( temp - 32) / 1.8
    kelvin = ( temp + 459.67) / 1.8
    puts "fahrenheit: #{temp}\n
      to Celsius: #{celsius}\n
      to Kelvin: #{kelvin}"
  elsif unit == "c"
    f = temp × 1.8 + 32
    k = temp  + 273.15
    puts "Celsius: #{temp}\n
      to F: #{f}\n
      to K: #{k}"
  else
    c =  temp - 273.15
    f = temp × 1.8 - 459.67
    puts "Kelvin: #{temp}\n
      to F: #{f}\n
      to C: #{c}"
  end
end

convert_temp(user_unit, user_temp)
