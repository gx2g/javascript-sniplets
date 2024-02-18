/*

What is a Vector?
A vector typically refers to a dynamic array-like data structure 
that can resize itself automatically when elements are added  or removed. 
It's often used to store a collection of elements of the same type, and it
provides efficient access and manipulation operations. 

*/

// Array Object commenly used as a vector

// create an empty vector
let vector = [];

// adding elements to a vector
vector.push(1);
vector.push(2);
vector.push(3);

// accessing elements by index
console.log(vector[0]);
console.log(vector[1]);
console.log(vector[2]);

// removing an element from a vector
vector.pop(); // removes from last element

console.log(vector); // output: [1, 2]

/*

in Javascript arrays can dynamically grow and shrink as elements 
are added or removed, making them a suitable choice for implementing
a vector-like data structure.

*/

// LINK LIST VS VECTORS

/*

Linked lists and vectors (arrays) are both data structures used to store 
collections of elements, but they have different characteristics that make 
them suitable for different scenarios:

1. ) Memory Allocation:

    -   Vector: 
    Uses contiguous memory allocation, meaning elements are stored in 
    adjacent memory locations. This allows for efficient random access but can be 
    inefficient when resizing, as it may require copying elements to a new location.

    -   Linked List: 

    Uses non-contiguous memory allocation, with each element (node) storing a 
    reference to the next node. This allows for efficient insertion and deletion 
    operations, as no shifting of elements is required, but random access is less 
    efficient since you need to traverse the list from the beginning.

2. ) Insertion and Deletion:

    -   Vector: 
    Insertions and deletions at the end of the vector are efficient (constant time), but
    inserting or deleting elements from the middle requires shifting elements, which 
    can be slow (linear time).

    -   Linked List: 
    Insertions and deletions at any position are efficient (constant time) since it 
    involves updating references, but finding the position can take linear time in 
    the worst case.

3. ) Random Access:

    -   Vector: 
    Random access (accessing elements by index) is efficient (constant time), as 
    elements are stored contiguously.

    -   Linked List: 
    Random access is inefficient (linear time), as you need to traverse the list 
    from the beginning to reach the desired element.

4. ) Memory Overhead:

    -   Vector: 
    Typically has less memory overhead per element, as it only needs to store the 
    elements themselves along with some bookkeeping information.

    -   Linked List: 
    Has more memory overhead per element, as each element (node) needs to store 
    references to the next node.


In summary, vectors are suitable for scenarios where random access and efficient 
memory usage are important, while linked lists are preferable for scenarios where 
frequent insertions and deletions are required, especially in the middle of the 
collection, and memory efficiency is less of a concern.

*/

// Example of a Link List in Javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the end
    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result);
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.printList(); // Output: 1 2 3