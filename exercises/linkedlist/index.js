//Exercises from Section 21 on Linked Lists 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //An insert method will initialze the linked list by creating a node out of data, and assign it to the 'head' property. 
    insertFirst(data) {
        //Passing 'this.head' inserts at the head, but the pointer also needs to be reset.
        const node = new Node(data, this.head);
        //To reset pointer to the head:
        this.head = node;

        //This method can be condensed into one line of code: 
        //this.head = new Node (data, this.head);
    };
}

module.exports = { Node, LinkedList };