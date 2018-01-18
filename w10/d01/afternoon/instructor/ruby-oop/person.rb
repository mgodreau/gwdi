class Person
  attr_reader :age
  attr_accessor :first_name, :last_name

  def self.foo
    'bar'
  end

  def initialize(first_name, last_name, age)
    self.first_name = first_name
    self.last_name = last_name
    @age = age
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end

class Student < Person
  attr_accessor :expected_salary

  def initialize(first_name:, last_name:, age:, expected_salary:)
    super(first_name, last_name, age)
    self.expected_salary = expected_salary
  end
end

student = Student.new(last_name: 'Dallas', age: 35, expected_salary: 100_000, first_name: 'Riley')
puts student.expected_salary

puts Person.foo

student.foo
