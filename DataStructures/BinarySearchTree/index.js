const Node = require('./node');
const Queue = require('../Queue');
const SinglyLinkedList = require('../SinglyLinkedList');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Method ot add a value
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  insert(value) {
    const n = new Node(value);
    if (this.root === null) this.root = n;
    else this._insertNode(this.root, n);
    return this;
  }

  /**
   * Method ot recursively find the node privsate..
   * @param  {[type]} node [description]
   * @param  {[type]} n    [description]
   * @return {[type]}      [description]
   */
  _insertNode(node, n) {
    // check for the greater one and insert accordingly.
    if (n.value < node.value) {
      // if the new node is less than the parent node.
      if (node.left === null) node.left = n;
      else this._insertNode(node.left, n);
      return;
    }
    if (node.right === null) node.right = n;
    else this._insertNode(node.right, n);
  }

  /**
   * Method to find the node...
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  find(value) {
    const n = new Node(value);
    if (this.root === null) return undefined;
    return this._findNode(this.root, n);
  }

  /**
   * The recursive method for finding the node.
   * @param  {[type]} node [description]
   * @param  {[type]} n    [description]
   * @return {[type]}      [description]
   */
  _findNode(node, n) {
    // if theres no node return undefined.
    if (node === null) return undefined;
    // if the value is less than the node check left
    if (n.value < node.value) {
      // if the left is the value return it.
      if (node.left.value === n.value) return node.left;
      // else try to find it in the left of the node.
      return this._findNode(node.left, n);
    }
    // if the value is greater than the node we check the right
    // if it is the rigght value let's return it
    if (node.right.value === n.value) return node.right;
    // else try to find it in the right of the node.
    return this._findNode(node.right, n);
  }

  /**
   * Method to get the root node
   * @return {[type]} [description]
   */
  getRootNode() {
    return this.root;
  }

  /**
   * Method to find the smallest node in the tree
   * @param  {[type]} node [description]
   * @return {[type]}      [description]
   */
  min(node = this.root) {
    // if the node is null then return null
    if (node === null) return null;
    // if there's no smaller node return the node
    if (node.left === null) return node;
    // if theres' a smaller one check it
    return this.min(node.left);
  }

  /**
   * visit every node on the ish.
   * @return {[type]} [description]
   */
  breadthFirstSearch() {
    if (this.root === null) return [];
    const q = new Queue();
    const data = [];
    let node;

    q.enqueue(this.root);

    while (q.size) {
      node = q.dequeue();
      data.push(node.value);
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }
    return data;
  }

  preorder() {
    const data = new SinglyLinkedList();
    function preorderNode(node) {
      data.push(node.value);
      if (node.left) preorderNode(node.left);
      if (node.right) preorderNode(node.right);
    }
    preorderNode(this.root);
    return data;
  }

  postorder() {
    const data = new SinglyLinkedList();
    function postorderNode(node) {
      if (node.left) postorderNode(node.left);
      if (node.right) postorderNode(node.right);
      data.push(node.value);
    }
    postorderNode(this.root);
    return data;
  }

  inorder() {
    const data = new SinglyLinkedList();
    function inorderNode(node) {
      if (node.left) inorderNode(node.left);
      data.push(node.value);
      if (node.right) inorderNode(node.right);
    }
    inorderNode(this.root);
    return data;
  }
}

module.exports = BinarySearchTree;
