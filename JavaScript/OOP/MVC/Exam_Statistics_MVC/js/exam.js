class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }

  getExamInfo() {
    return `${this.subject.getSubjectName()} - ${this.student.getStudentData()} - ${
      this.grade
    }`;
  }

  hasPassed() {
    return this.grade > 5;
  }
}
// function Exam(subject, student, grade) {
//   this.subject = subject;
//   this.student = student;
//   this.grade = grade;
// }

// Exam.prototype.getExamInfo = function () {
//   return this.subject.getSubjectName() + ' ' + this.student.getStudentData();
// };

// Exam.prototype.hasPassed = function () {
//   return this.grade > 5;
// };
