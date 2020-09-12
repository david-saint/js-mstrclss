class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * insert an element into the heap
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  insert(v) {
    // solve for the base case
    if (this.values.length === 0) return this.values.push(v);
    this.values.push(v);
    let vindex = this.values.length - 1;
    let parent = Math.floor((vindex - 1) * 0.5);
    while (v > this.values[parent]) {
      // swap them
      [this.values[vindex], this.values[parent]] = [this.values[parent], this.values[vindex]];
      // redefine vindex and parent.
      vindex = parent;
      parent = Math.floor((vindex - 1) * 0.5);
    }
    return this;
  }

  /**
   * remove the max element from the heap
   * @return {[type]} [description]
   */
  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.shift();
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    // Now we are trying to bubble down.
    // we start from the top :index=0
    let index = 0;
    let first = (2 * index) + 1;
    let second = (2 * index) + 2;
    // as long as value at index is smaller than either child
    while (this.values[index] < this.values[first] || this.values[index] < this.values[second]) {
      // swap it with the largest child
      if (this.values[first] > this.values[second]) {
        // since the value on first is greater than the value on second let's swap that with our index
        [this.values[index], this.values[first]] = [this.values[first], this.values[index]];
        // update index for the next iteration
        index = first;
      } else {
        // since the value on second is greater than the value on first let's swap that with our index
        [this.values[index], this.values[second]] = [this.values[second], this.values[index]];
        // update index for the next iteration
        index = second;
      }
      // update the values of first and second.
      first = (2 * index) + 1;
      second = (2 * index) + 2;
    }

    return max;
  }
}

class MinBinaryHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * Insert an elemnt into the heap
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  insert(v) {
    // insert the value into the heap.
    this.heap.push(v);
    // solve for the base case.
    if (this.heap.length === 1) return this;
    // store the index of the value just added
    let vindex = this.heap.length - 1;
    // find the parent of the value.
    let parent = Math.floor((vindex - 1) * 0.5);
    // as long as the heap is smaller than it's parent
    while (this.heap[vindex] < this.heap[parent]) {
      // swap them
      [this.heap[vindex], this.heap[parent]] = [this.heap[parent], this.heap[vindex]];
      // redefine vindex and parent.
      vindex = parent;
      parent = Math.floor((vindex - 1) * 0.5);
    }
    return this;
  }

  extractMin() {
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
    while (this.heap[index] > this.heap[first] || this.heap[index] > this.heap[second]) {
      // swap it with the smallest child
      if (this.heap[first] < this.heap[second]) {
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

module.exports = {
  MaxBinaryHeap,
  MinBinaryHeap,
};
