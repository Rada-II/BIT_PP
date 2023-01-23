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

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    console.log(`Name: ${this.name} ${this.surname}, Salary: ${this.salary}`);
    return this;
  }
  getSalary() {
    console.log(`Salary: ${this.salary}`);
    return this;
  }
  increaseSalary() {
    this.salary = this.salary * 1.1;
    return this;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    console.log(`Specialization: ${this.specialization}`);
    return this;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    console.log(`Department: ${this.department}`);
    return this;
  }
  changeDepartment(newDepartment) {
    this.department = newDepartment;
    return this;
  }
}
let developer1 = new Developer('Bob', 'J.', 'Developer', 80000, 'JavaScript');

developer1.getData().getSpecialization().increaseSalary().getData();

let manager1 = new Manager('Tom', 'S.', 'Manager', 100000, 'IT');
manager1
  .getDepartment()
  .changeDepartment('Marketing')
  .getDepartment()
  .increaseSalary()
  .getData();
