import Node from './linkedListNode.js'


class LinkedLists {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
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
        if (this.length===0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}




const linkedList = new LinkedLists(5);

linkedList.push(10);
linkedList.pop();
linkedList.pop();
console.log(linkedList)