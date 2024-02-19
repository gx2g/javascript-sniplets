/* 
Data Structures

Array's are great data structures because you can store 
ordered data and retrieve elements by index number. 

*/

/* 

Nodes: the building blocks of many other data structures to follow

Nodes: 

- Contain data, which can be a variety of data types

- Contain links to other nodes, if a node has no links, or they are all null, 
  you have reached the endof the path you were following.

- Can be orphaned if there are no existing links to them. 


classes are created using the class expression, and constructor is a method that will 
run when an instance of the class is first created.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node('I am an instance of a Node!');
console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;

