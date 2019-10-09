//Exercises from Section 21 on Linked Lists 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Create constructor for the LinkedList class, which only contains the head property.
//Head should be set to null by default.
class LinkedList {
    constructor() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };

