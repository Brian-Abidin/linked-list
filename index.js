import Linkedlist from "./linkedlist.js";
import Node from "./node.js";

const newnode = new Node(3);
const node2 = new Node(2);
const node3 = new Node(1);
const newList = new Linkedlist();
newList.append(newnode);
newList.prepend(node2);
newList.prepend(node3);
console.log(newList.nextNode.nextNode.nextNode);
