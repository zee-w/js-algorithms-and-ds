/*
Linked List node is in code form an object which has a value and a next pointer. e.g.
Consider a Linked List:

H                 T    
11-> 3-> 23-> 7-> 4-> null

Now how do we represent the node 4 in code? 
    {
        value: '4'
        next: null
    }
How would node 3 look in code?
    {
        value: '3'
        next: {
            value: '23'
            next: {}
    }
    }


The whole List could be represented under the hood as:
{
head-> {
    value: '11'
    next: {
        value: '3'
        next: {
            value: '23'
            next: {
                value: '7'
                next: {
                    value: '4'       
                    next: null       -> TAIL
                } 
            }
        }
    }
}
}

*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // Below methods are the required methods for the Linked list 
    push(value) {
        /* push-> add a new node to the linked list at 
        the end.
        push is a O(1) operation 
        */
        const newNode = new Node(value);

        // if the linked list is empty
        if (!newNode) {
            this.head = newNode;
            this.tail = this.head;
        } else { //add new node to the existing list
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // increase the lenght of the linked list by 1
        return this; // return the updated list.
    }

    pop() {
        /* pop-> removed a node from the linked list at 
        the end.
        pop is a O(n) operation 
        */

        // if the list is empty
        if (this.length === 0) return undefined;

        //if there are 2 or more nodes in the list
        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        //if there is only one node in the list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshit(value) {
        /* unsift-> adds a node to the linked list at 
        the start.
        unshift is a O(1) operation 
        */


        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    shift() {
        /* shift-> removes a node from the linked list at 
        the start.
        shift is a O(1) operation 
        */

        // if the list is empty
        if (this.length === 0) return undefined;


        //if there are 2 or more nodes in the list
        let temp = this.head;
        this.head = this.head.next;

        temp.next = null;
        this.length--;

        //if there is only one node in the list
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;

    }

    get(index) {
        /* get-> gets a node from the a particular
        index
        */
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp;

    }
   
    insert(index, value) {
    /* insert-> insert a new node at a 
        given index
    */
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value)
        let temp = this.get(index - 1)

        newNode.next = temp.next;
        temp.next = newNode
        this.length++
        return true
    }

    
    remove(index) {
    // remove-> removes a node at a given index
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index > this.length) return undefined;

        let before = this.get(index - 1)
        let temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--
        return temp;

    }
  
    reverse() {
    // reverse-> reverses a LL 
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;


        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;

    }


    // Below methods are the util methods for LL
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}


function test() {
    let myLinkedList = new LinkedList(1);
    //myLinkedList.makeEmpty();
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.pop();

    myLinkedList.unshit(0);
    myLinkedList.unshit(-1);
    myLinkedList.unshit(-2);
    myLinkedList.unshit(-3);

    myLinkedList.shift();
    myLinkedList.shift();
    myLinkedList.shift();

    console.log('Element at index is: ' + myLinkedList.get(2).value);

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
    myLinkedList.reverse();
    console.log("\nReversed Linked List:");
    myLinkedList.printList();
}


test();