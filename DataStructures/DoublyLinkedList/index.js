const Node = require('./node');

class DoublyLinkedList {
  constructor() {
    this.reset();
  }

  /**
   * add element to the last
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  push(v) {
    const n = new Node(v);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
      this.length += 1;
      return this;
    }
    this.tail.next = n;
    n.previous = this.tail;
    this.tail = n;
    this.length += 1;
    return this;
  }

  reset() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  pop() {
    // if it is empty return undefined
    if (this.head === null) return undefined;
    // store the popped node
    const popped = this.tail;
    // if the're s only one node
    if (this.length === 1) {
      this.reset(); return popped;
    }
    this.tail = popped.previous;
    popped.previous = null;
    this.tail.next = null;
    this.length -= 1;
    return popped;
  }

  shift() {
    if (this.head === null) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.reset(); return shifted;
    }
    this.head = shifted.next;
    this.head.previous = null;
    shifted.next = null;
    this.length -= 1;
    return shifted;
  }

  unshift(v) {
    const n = new Node(v);
    n.next = this.head;
    this.head.previous = n;
    this.head = n;
    if (n.next === null) this.tail = n;
    this.length += 1;
    return this;
  }

  get(i) {
    // if the index is 0 return the head
    if (i === 0) return this.head;
    // if the index is out of bounds return undefined.
    if (i < 0 || i >= this.length) return undefined;
    let counter = (i > this.length / 2) ? this.length - 1 : 0;
    let current = (i > this.length / 2) ? this.tail : this.head;
    while (counter !== i) {
      if (i > this.length / 2) {
        console.log('from back');
        current = current.previous;
        counter -= 1;
      } else {
        console.log('from front');
        current = current.next;
        counter += 1;
      }
    }
    return current;
  }

  set(v, i) {
    const found = this.get(i);
    if (!found) return false;
    found.value = v;
    return true;
  }

  insert(v, i) {
    // if the index is out of bounds return false.
    if (i < 0 || i > this.length) return false;
    // if it unshifts then return true
    if (i === 0) return this.unshift(v) instanceof DoublyLinkedList;
    // if it pushes then return true
    if (i === this.length) return this.push(v) instanceof DoublyLinkedList;
    // create a new node for the value
    const n = new Node(v);
    // find the node before the index we want to set
    const prev = this.get(i - 1);
    // store it's next before updating
    const prevNext = prev.next;
    // make it point to the new node
    prev.next = n;
    // set th reverse link
    n.previous = prev;
    // point the new node to the previous next
    n.next = prevNext;
    // set the reverse too
    prevNext.previous = n;
    // don't forget to increment the length
    this.length += 1;
    // return true.
    return true;
  }

  remove(i) {
    // if the index is 0 shift the list
    if (i === 0) return this.shift();
    // if the index is the length just pop
    if (i === this.length - 1) return this.pop();
    // if it is out of bounds return undefined
    if (i < 0 || i >= this.length) return undefined;
    const prev = this.get(i - 1);
    const removed = prev.next;
    prev.next = removed.next;
    removed.next.previous = prev;
    removed.previous = null;
    removed.next = null;
    this.length -= 1;
    return removed;
  }
}

const dl = new DoublyLinkedList();
dl.push(10);
dl.push(11);
dl.push(12);
dl.push(13);
dl.push(14);
dl.push(15);
dl.push(16);
dl.push(17);
dl.push(18);
// dl.unshift(9);
console.log(dl.get(7));
