/*Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value to the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getData = function () {
  console.log(`Name: ${this.name} ${this.surname}, Salary: ${this.salary}`);
  return this;
};
Employee.prototype.getSalary = function () {
  console.log(`Salary: ${this.salary}`);
  return this;
};
Employee.prototype.increaseSalary = function () {
  this.salary = this.salary * 1.1;
  return this;
};
function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.getSpecialization = function () {
  console.log(`Specialization: ${this.specialization}`);
  return this;
};
Manager.prototype = Object.create(Employee.prototype);
function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype.getDepartment = function () {
  console.log(`Department: ${this.department}`);
  return this;
};
Manager.prototype.changeDepartment = function (newDepartment) {
  this.department = newDepartment;
  return this;
};
const employee = new Employee('John', 'Doe', 'Software Engineer', 50000);
console.log(employee.getData());

employee.increaseSalary().getSalary();

const developer = new Developer(
  'Jane',
  'D.',
  'Full Stack Developer',
  50000,
  'JavaScript'
);
console.log(developer.getData());
developer.getSpecialization();

const manager = new Manager('Bob', 'S.', 'IT Manager', 150000, 'IT');
console.log(manager.getData());
manager
  .getDepartment()
  .changeDepartment('Marketing')
  .getDepartment()
  .increaseSalary()
  .getData();
