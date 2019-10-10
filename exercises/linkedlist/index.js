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

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    //Create an insertLast method.
    insertLast(data) {
        //Call the getLast method to locate the last node.
        const last = this.getLast();
        //First check that a single node exists.
        if (last) {
            //If yes, use last.next to insert a new Node.
            last.next = new Node(data);
        }
        else {
            //If not, create a new Node at the head using this.head.
            this.head = new Node(data);
        }
    }
}

module.exports = { Node, LinkedList };