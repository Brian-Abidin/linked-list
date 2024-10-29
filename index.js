import Linkedlist from "./linkedlist.js";
import Node from "./node.js";

const newList = new Linkedlist();
newList.append(3);
newList.prepend(2);
newList.prepend(1);
newList.append(4);

console.log(newList.size());
