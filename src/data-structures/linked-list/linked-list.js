import Node from './linkedListNode.js'


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

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
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
    }

    shift(){
        /* shift-> removes a node from the linked list at 
        the start.
        shift is a O(1) operation 
        */

        // if the list is empty
        if (this.length === 0) return undefined;


        //if there are 2 or more nodes in the list
        let temp= this.head;
        this.head = this.head.next;

        temp.next= null;
        this.length--;

        //if there is only one node in the list
        if (this.length===0){
            this.tail=null;
        }

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

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();