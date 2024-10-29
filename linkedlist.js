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
    return this.nextNode;
  }

  tail() {
    // returns last node
    let temp = this;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    // returns the node at a given index
    if (index < 0) {
      throw new Error("index cannot be smaller than 0");
    } else if (index > this.size() - 1) {
      throw new Error("index cannot be larger than list size");
    }
    let count = 0;
    let temp = this.nextNode;
    while (count !== index) {
      temp = temp.nextNode;
      count += 1;
    }
    return temp;
  }

  pop() {
    // removes the last element from the list
    let count = 0;
    let temp = this;
    while (count !== this.size() - 1) {
      temp = temp.nextNode;
      count += 1;
    }
    temp.nextNode = null;
  }

  contains(value) {
    // returns true if the passed in value is in the list, else returns false
    let temp = this.nextNode;
    for (let i = 0; i < this.size(); i += 1) {
      console.log(temp);
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
    let temp = this.nextNode;
    for (let i = 0; i < this.size(); i += 1) {
      if (temp.value === value) return i;
      temp = temp.nextNode;
    }
    return null;
  }

  toString() {
    // represents linkedList objects as strings.
    // Prints out ex.) ( value ) -> ( value ) -> ( value ) -> null
    let temp = this.nextNode;
    let string = "";
    for (let i = 0; i < this.size(); i += 1) {
      if (temp.nextNode === null) {
        string += `(${temp.value}) -> null`;
      } else {
        string += `(${temp.value}) -> `;
      }
      temp = temp.nextNode;
    }
    return string;
  }

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
    let temp = this;
    for (let i = 0; i < this.size(); i += 1) {
      if (i === index - 1 || index === 0) {
        const node = new Node(value);
        node.nextNode = temp.nextNode;
        temp.nextNode = node;
        return;
      }
      temp = temp.nextNode;
    }
  }

  removeAt(index) {
    let temp = this;
    for (let i = 0; i < this.size(); i += 1) {
      if (i === index - 1 || index === 0) {
        temp.nextNode = temp.nextNode.nextNode;
        return;
      }
      temp = temp.nextNode;
    }
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
