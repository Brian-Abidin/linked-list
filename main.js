import Linkedlist from "./linkedlist.js";

const newList = new Linkedlist();
newList.append(3);
newList.prepend(2);
newList.prepend(1);
newList.append(4);

console.log(newList.size());
console.log(newList.head());
console.log(newList.tail());
console.log(newList.at(3));
console.log(newList.pop());
console.log(newList.tail());
console.log(newList.contains(3));
console.log(newList.find(3));
console.log(newList.toString());
console.log(newList.insertAt(2.5, 0));
console.log(newList.removeAt(0));
console.log(newList.toString());
