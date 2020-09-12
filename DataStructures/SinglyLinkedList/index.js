const Node = require('../Node');

/**
 * A singly linked list implementation..
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Add an elemnt to the end of the array
   * @param  {[type]} val [description]
   * @return {[type]}     [description]
   */
  push(val) {
    const el = new Node(val);
    // if the list was empty
    if (this.head === null) {
      this.head = el;
      this.tail = el;
      this.length += 1;
      return this;
    }
    this.tail.next = el;
    this.tail = el;
    this.length += 1;
    return this;
  }

  /**
   * Remove an element from the end of the list
   * @return {[type]} [description]
   */
  pop() {
    // if the list is empty return undefined;
    if (this.head === null) return undefined;
    let pre = this.head;
    let current = this.head.next;
    // if the list contains only one node reset the list.
    if (current === null) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return pre;
    }
    // traverse the list, to finnd the second to the last node.
    while (current.next !== null) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;
    return current;
  }

  /**
   * Remove an element from the beginning of
   * the list.
   * @return {[type]} [description]
   */
  shift() {
    // if the list is empty return undefined
    if (this.head === null) return undefined;
    const pre = this.head;
    this.head = pre.next;
    // if there was only one node in the list, update the tail to null as well.
    if (this.head === null) this.tail = null;
    this.length -= 1;
    return pre;
  }

  /**
   * Adds an element to the beginning of the list.
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  unshift(v) {
    const n = new Node(v);
    n.next = this.head;
    this.head = n;
    // if the list was empty before update the tail as well
    if (n.next === null) this.tail = n;
    this.length += 1;
    return this;
  }

  /**
   * get an index in the list.
   * @param  {[type]} i [description]
   * @return {[type]}   [description]
   */
  get(i) {
    // if the index is 0 return the head
    if (i === 0) return this.head;
    // if the index is out of bounds return undefined.
    if (i < 0 || i >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (count !== i) {
      current = current.next;
      count += 1;
    }
    return current;
  }

  /**
   * Set the node at index i to v
   * @param {[type]} v [description]
   * @param {[type]} i [description]
   */
  set(v, i) {
    const found = this.get(i);
    if (!found) return false;
    found.value = v;
    return true;
  }

  /**
   * Inserting a node into a partic
   * @param  {[type]} v [description]
   * @param  {[type]} i [description]
   * @return {[type]}   [description]
   */
  insert(v, i) {
    // if the index is out of bounds return false.
    if (i < 0 || i > this.length) return false;
    // if it unshifts then return true
    if (i === 0) return this.unshift(v) instanceof SinglyLinkedList;
    // if it pushes then return true
    if (i === this.length) return this.push(v) instanceof SinglyLinkedList;
    // create a new node for the value
    const n = new Node(v);
    // find the node before the index we want to set
    const prev = this.get(i - 1);
    // store it's next before updating
    const prevNext = prev.next;
    // make it point to the new node
    prev.next = n;
    // point the new node to the previous next
    n.next = prevNext;
    // don't forget to increment the length
    this.length += 1;
    // return true.
    return true;
  }

  /**
   * remove an element from an index
   * @param  {[type]} i [description]
   * @return {[type]}   [description]
   */
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
    this.length -= 1;
    return removed;
  }

  /**
   * reversing the list in place
   * @return {[type]} [description]
   */
  reverse() {
    // if there is only 1 or no nodes in the list just return
    if (this.length < 2) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let n;
    let prev = null;

    for (let i = 0; i < this.length; i += 1) {
      n = node.next;
      node.next = prev;
      prev = node;
      node = n;
    }
    return this;
  }

  /**
   * Prints out the contents of a list.
   * @param  {[type]} head [description]
   * @return {[type]}      [description]
   */
  static print(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

module.exports = SinglyLinkedList;
