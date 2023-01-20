# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# PSUEDOCODE: 
# input: ['coffee', 'tea', 'juice', 'water', 'soda water']
# output: ['coffee', 'soda water'] & ['tea', 'water', 'soda water']
# use the .select method to return the array with only the words that meet the condition (.includes the letters o/t)


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
p beverages_array.select {|words| words.include?(letter_o)}
p beverages_array.select {|words| words.include?(letter_t)}

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# PSUEDOCODE: 
# input: { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']
# use .flatten method to remove a layer of nested arrays(use atleast twice)
# use .delete method to delete the keys from array

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
new_array = us_states.flatten
new_array.delete(:northwest)
new_array.delete(:southwest)
new_array.delete(:notheast)
p new_array.flatten.sort

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# PSUEDOCODE: 
# input: Bike class
# output:The Trek bike has 2 wheels and is going 0 mph.
# create a sentence to display information using string interpolation
# create the methods pedal_faster and brake to update the current speed using the binary operators += and -=

class Bike 
    def initialize(model, wheels, current_speed)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
    end
       def bike_info
            "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
       end
            def pedal_faster(value)
             @current_speed += value
            end
        def brake(value)
            @current_speed -= value
            @current_speed > 0 ? @current_speed:0
        end
end

trek = Bike.new('Trek', 2, 0)
p trek.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


my_bike = Bike.new('My bike', 2, 0)
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
