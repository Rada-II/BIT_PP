// class Student {
//   constructor(name_lastName) {
//     this.name_lastName = name_lastName;
//   }

//   getStudentData() {
//     return this.name_lastName;
//   }
// }
// function Student(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Student.prototype.getStudentData = function () {
//   return this.name + ' ' + this.surname;
// };
class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getStudentData() {
    return `${this.name} ${this.surname}`;
  }
}
