//Exercises from Section 21 on Linked Lists 

class Node {
    //Define constructor function to initialize a new node.
    //The constructor will be called with two properties - (data, next).
    //In cases where next is left out, set next equal to null to show that it was intentially left out, rather than a property returning as undefined.
    constructor(data, next = null) {
        //Assign data property.
        this.data = data;
        //Assign next property.
        this.next = next;
    }
}

class LinkedList { }

module.exports = { Node, LinkedList };

