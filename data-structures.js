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

Introduction: Nodes in Javascript

Create a basic node that contains data and one llink to another node. 

Remember that a node’s link to the next node is null when there are no nodes to traverse


Let’s begin by setting up the constructor for our Node class. Since nodes contain data, we 
want the constructor to expect a data argument of any type to be passed in. The constructor 
can assign the given argument to the data property of the Node instance.

Be sure to set the arguments to the appropriate properties in this class (i.e. this.data).

Remember, classes are created using the class expression, and constructor is a method that 
will run when an instance of the class is first created


*/

class Node {
    constructor(data) {
      this.data = data; // data
      this.next = null; // link orphan node when first created
    }
    // node methods, setting next node, using setter to modify this.next node property
    setNextNode(node) {
      this.next = node; // take node as an argument and update the next node property 
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!'); // verify that .setNextNode() performs as intended.
  
  firstNode.setNextNode(secondNode);
  console.log(firstNode);
  
  module.exports = Node;