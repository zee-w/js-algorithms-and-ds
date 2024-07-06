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
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    reverseBetween(m, n) {
        /*
        Here's a step-by-step explanation of the logic:

    1. If the head of the linked list is null, return, as there is nothing to reverse.

    2. Create a dummy node and set its next pointer to the head of the linked list. This dummy node simplifies the manipulation of pointers, especially at the beginning of the list.

    3. Initialize a prev pointer and set it to the dummy node. Move the prev pointer m steps forward using a for loop. After the loop, prev will point to the node right before the mth node.

    4. Initialize a current pointer to the mth node by setting it to prev.next.

    5. Iterate through the list n - m times using a for loop, reversing the portion of the list between positions m and n: 
        a. Create a temp pointer and set it to the next node of current. 
        b. Update the next pointer of current to point to the node after temp. 
        c. Update the next pointer of temp to point to the node right after prev. 
        d. Update the next pointer of prev to point to temp.

    6. After the loop, the portion of the linked list between positions m and n has been reversed. Set the head of the linked list to the next pointer of the dummy node.
      */

        if (this.head === null) return;

        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        for (let i = 0; i < m; i++) {
            prev = prev.next;
        }

        let current = prev.next;
        for (let i = 0; i < n - m; i++) {
            const temp = current.next;
            current.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }

        this.head = dummy.next;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
