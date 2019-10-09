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

    insertFirst(data) {
        this.head = new Node(data, this.head);
    };

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    //Write a method to return the first node of the linked list.
    getFirst() {
        //Since the first node is always set to the head, return this.head.
        return this.head;
    }
}

module.exports = { Node, LinkedList };