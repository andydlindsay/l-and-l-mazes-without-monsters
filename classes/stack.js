module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  // push
  push(data) {
    this.stack.push(data);
  }

  // peek
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // pop
  pop() {
    return this.stack.pop();
  }

  // length
  get length() {
    return this.stack.length;
  }
}
