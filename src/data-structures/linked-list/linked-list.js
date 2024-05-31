import Node from './linkedListNode.js'


class LinkedLists{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        // O(1) operation
        const newNode = new Node(value);

        // if the linked list is empty
        if(!newNode){
            this.head = newNode;
            this.tail =this.head;
        }else{ //add new node to the existing list
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // increase the lenght of the linked list by 1
        return this; // return the updated list.
    }
}




const node1 = new LinkedLists(5);

node1.push(6)
node1.push(7)
console.log(node1)