const accounting = require('accounting');

function Student(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
};

Student.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.formattedSalary = function () {
  return accounting.formatMoney(this.salary);
};

const dustInTheWind = {
  foo: 'bar'
}

module.exports = Student;
