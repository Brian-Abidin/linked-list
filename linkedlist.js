// LinkedList class that represents the full list

export default class Linkedlist {
  constructor(value = "head", nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  append(node) {
    // adds a new node containing value to the end of the list
    // return this.pointer = node;
    // size += 1;
    if (this.nextNode === null) {
      this.nextNode = node;
      return;
    }
    console.log(this.nextNode);
  }

  prepend(node) {
    // adds a new node containing value to the start of the list
    // node.value = head
    // node.pointer = this.node;
    // size += 1;
    node.nextNode = this.nextNode;
    this.nextNode = node;
  }

  size() {
    // returns total number of nodes in the list
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
