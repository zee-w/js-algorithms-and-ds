/*
Write a method called hasLoop that is part of the linked list class.

The method should be able to detect if there is a cycle or loop present in the linked list.

use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop. 


Output:

    Return true if the linked list has a loop.

    Return false if the linked list does not have a loop.


Constraints:

    You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

    You can only traverse the linked list once.


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
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    hasLoop() {
        /*
    1. Initialize two pointers, slow and fast, both pointing to the head of the linked list.

    2. Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node after the current fast node).

    3. Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).

    4. Check if the slow and fast pointers have become equal. If they have, it means there is a loop in the linked list, and the function returns true.

    5. If the loop terminates without the slow and fast pointers becoming equal, it means the linked list has no loop, and the function returns false.
        */
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
