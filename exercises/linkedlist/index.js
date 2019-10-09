//Exercises from Section 21 on Linked Lists 

//Create node class with a constructor.
class Node {
    //Define the constructor, which is called with two properties - (data, next).
    //In cases where next is left out, set next equal to null to show that it was intentially left out, (rather than a property returning as undefined).
    constructor(data, next = null) {
        //Assign data property.
        this.data = data;
        //Assign next property.
        this.next = next;
    }
}

class LinkedList { }

module.exports = { Node, LinkedList };

