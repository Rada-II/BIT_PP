/*You need to create some kind of calculator.
The argument passed to run(instructions) will always be a string containing a series of instructions.
The instruction set of the calculator will be this:

+ (plus): Pop the last 2 values from the stack, add them, and push the result onto the stack.
- (minus): Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
* (multiple): Pop the last 2 values, multiply, and push the result.
/ (divide): Pop the last 2 values, divide the topmost one by the lower one, and push the result.
DUP: Duplicate (not double) the top value on the stack.
POP: Pop the last value from the stack and discard it.
PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]".

Examples:
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x

If there are no instructions, the value should remain 0.
The return value of get value() should be the topmost value on the stack.
Be careful with methods in this class!
 */

class StackCalc {
  constructor() {
    this.stack = [];
  }

  run(instructions) {
    if (instructions === '') {
      return 0;
    }
    const instArr = instructions.split(' ');
    for (let i = 0; i < instArr.length; i++) {
      const inst = instArr[i];
      if (inst === '+') {
        this.add();
      } else if (inst === '-') {
        this.subtract();
      } else if (inst === '*') {
        this.multiply();
      } else if (inst === '/') {
        this.divide();
      } else if (inst === 'DUP') {
        this.duplicate();
      } else if (inst === 'POP') {
        this.pop();
      } else if (!isNaN(inst)) {
        this.push(parseInt(inst));
      } else {
        return `Invalid instruction: ${inst}`;
      }
    }
    return this.getValue();
  }

  add() {
    const num1 = this.stack.pop();
    const num2 = this.stack.pop();
    this.stack.push(num1 + num2);
  }

  subtract() {
    const num1 = this.stack.pop();
    const num2 = this.stack.pop();
    this.stack.push(num1 - num2);
  }

  multiply() {
    const num1 = this.stack.pop();
    const num2 = this.stack.pop();
    this.stack.push(num1 * num2);
  }

  divide() {
    const num1 = this.stack.pop();
    const num2 = this.stack.pop();
    this.stack.push(num1 / num2);
  }

  duplicate() {
    const num = this.stack[this.stack.length - 1];
    this.stack.push(num);
  }

  pop() {
    this.stack.pop();
  }

  push(num) {
    this.stack.push(num);
  }

  getValue() {
    return this.stack[this.stack.length - 1];
  }
}
const calc = new StackCalc();
console.log(calc.run('5 6 +'));
console.log(calc.run('3 DUP +'));
console.log(calc.run('6 5 5 7 * - /'));
console.log(calc.run('x y +'));
