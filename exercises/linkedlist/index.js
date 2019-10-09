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

    //Create a method to iterate over the list and return an integer representing the number of nodes.
    //Because the LinkedList class only points to the head, set up a counter variable and node variable equal to the head. 
    size() {
        let counter = 0;
        //Reference directly to the head
        let node = this.head;

        //Set up a while loop to increment the counter at each iteration, using node.next, and reassign the node variable so it keeps looping until the value is null at the tail.

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
}

module.exports = { Node, LinkedList };