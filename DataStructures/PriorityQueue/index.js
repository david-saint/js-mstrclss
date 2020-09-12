const Node = require('./node');

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  /**
   * Add an element to the queue
   * @param  {[type]} value    [description]
   * @param  {[type]} priority [description]
   * @return {[type]}          [description]
   */
  enqueue(value, priority) {
    const v = new Node(value, priority);
    // insert the value into the heap.
    this.heap.push(v);
    // solve for the base case.
    if (this.heap.length === 1) return this;
    // store the index of the value just added
    let vindex = this.heap.length - 1;
    // find the parent of the value.
    let parent = Math.floor((vindex - 1) * 0.5);
    // as long as the heap is smaller than it's parent
    while (
      (this.heap[vindex] && this.heap[vindex].priority)
      < (this.heap[parent] && this.heap[parent].priority)
    ) {
      // swap them
      [this.heap[vindex], this.heap[parent]] = [this.heap[parent], this.heap[vindex]];
      // redefine vindex and parent.
      vindex = parent;
      parent = Math.floor((vindex - 1) * 0.5);
    }
    return this;
  }

  /**
   * remove the most important element from the queue
   * @return {[type]} [description]
   */
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.shift();
    const min = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;

    // Now we are trying to bubble down.
    // we start from the top :index=0
    let index = 0;
    let first = (2 * index) + 1;
    let second = (2 * index) + 2;
    // as long as value at index is smaller than either child
    while (
      (
        (this.heap[index] && this.heap[index].priority)
        > (this.heap[first] && this.heap[first].priority)
      )
      || (
        (this.heap[index] && this.heap[index].priority)
        > (this.heap[second] && this.heap[second].priority)
      )
    ) {
      // swap it with the smallest child
      if (
        (this.heap[first] && this.heap[first].priority)
        < (this.heap[second] && this.heap[second].priority)
      ) {
        // since the value on first is smaller than the value on second let's swap that with our index
        [this.heap[index], this.heap[first]] = [this.heap[first], this.heap[index]];
        // update index for the next iteration
        index = first;
      } else {
        // since the value on second is smaller than the value on first let's swap that with our index
        [this.heap[index], this.heap[second]] = [this.heap[second], this.heap[index]];
        // update index for the next iteration
        index = second;
      }
      // update the values of first and second.
      first = (2 * index) + 1;
      second = (2 * index) + 2;
    }

    return min;
  }
}

module.exports = PriorityQueue;
