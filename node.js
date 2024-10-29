// Node is a class that contains a value property and a next property set both as null by default

export default class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
