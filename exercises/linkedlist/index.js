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


    getFirst() {
        return this.head;
    }

    //Write a method to return the last node of the linked list.
    getLast() {
        //First check to see if there is a node.
        if (!this.head) {
            return null;
        }
        //Declare variable for the head.
        let node = this.head;
        //Set up while loop to find next node.
        while (node) {
            //Use if statement to determine if the next node is null.
            if (!node.next) {
                return node;
            }
            //Otherwise, keep looping.
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };