// LinkedList class that represents the full list
import Node from "./node.js";

export default class Linkedlist {
  constructor(value = "head", nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  append(value) {
    // adds a new node containing value to the end of the list
    const node = new Node(value);
    if (this.nextNode === null) {
      this.nextNode = node;
      return;
    }

    let temp = this.nextNode;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = node;
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    // node.value = head
    // node.pointer = this.node;
    // size += 1;
    const node = new Node(value);
    node.nextNode = this.nextNode;
    this.nextNode = node;
  }

  size() {
    // returns total number of nodes in the list
    let size = 0;
    let temp = this;
    while (temp.nextNode !== null) {
      size += 1;
      temp = temp.nextNode;
    }
    return size;
  }

  head() {
    // returns first node
  }

  tail() {
    // returns last node
  }

  at(index) {
    // returns node at given index
  }

  pop() {
    // removes the last element from the list
  }

  contains(value) {
    // returns true if the passed in value is in the list, else returns false
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
  }

  toString() {
    // represents linkedList objects as strings.
    // Prints out ex.) ( value ) -> ( value ) -> ( value ) -> null
  }
  /*
  EXTRA CREDIT
  insertAt(value, index){
    // inserts a new node with the provided value at the given index
  }

  removeAt(index){
    // removes node at given index
  }

  */
}
