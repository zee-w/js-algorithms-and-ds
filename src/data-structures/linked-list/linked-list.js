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
        // push is a O(1) operation
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
        // pop is a O(n) operation

        if (this.length === 0) return undefined;

        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshit(value) {
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
}


function test() {
    let myLinkedList = new LinkedList(1);
    //myLinkedList.makeEmpty();
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.pop();
    
    myLinkedList.unshit(0);


    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();