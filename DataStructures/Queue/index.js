const Node = require('./node');

class Queue {
  constructor() {
    this.size = 0;
    this.last = null;
    this.first = null;
  }

  /**
   * push in an item to the end of the queue
   * @param  {any} value
   * @return {integer} the size after
   */
  enqueue(value) {
    // solve for the zero cases
    const n = new Node(value);
    // if it is empty
    if (this.first === null) {
      this.first = n;
      this.last = n;
      this.size += 1;
      return this.size;
    }
    this.last.next = n;
    this.last = n;
    this.size += 1;
    return this.size;
  }

  /**
   * remove an item from the top of the queue.
   * @return {any} the value that was removed.
   */
  dequeue() {
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

module.exports = Queue;
