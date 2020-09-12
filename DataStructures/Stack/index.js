const Node = require('./node');

class Stack {
  constructor() {
    this.size = 0;
    this.last = null;
    this.first = null;
  }

  /**
   * add something to the top of the stack
   * @param  {any} value [description]
   * @return {integer} the size of the array
   */
  push(value) {
    // create a new node from the value.
    const n = new Node(value);
    // set the next to the first.
    n.next = this.first;
    // then set first to the new node.
    this.first = n;
    // if it was empty before also set the last
    if (n.next === null) this.last = n;
    // increase the length;
    this.size += 1;
    // return the size
    return this.size;
  }

  /**
   * remove from the top of the stack
   * @return {any} the value that was removed
   */
  pop() {
    // if the list is empty return undefined
    if (this.first === null) return null;
    const pre = this.first;
    this.first = pre.next;
    // if there was only one node in the list, update the tail to null as well.
    if (this.first === null) this.last = null;
    this.size -= 1;
    return pre.value;
  }
}

module.exports = Stack;
