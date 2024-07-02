/*
Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

The kthNode should have the value 4.



Example 2:

Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

The kthNode should have the value 3.


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
    }
    findKthFromEnd(k) {
        /*
    1. Initialize two pointers, slow and fast, both pointing to the head of the linked list.

    2. Move the fast pointer k steps forward in the list using a for loop. If fast becomes null before reaching k steps, it means the linked list has fewer than k nodes, and the function returns null.

    3. Traverse the linked list using a while loop. The loop continues as long as the fast pointer is not null (i.e., it has not reached the end of the list).

    4. Inside the loop, move both the slow and fast pointers one step forward (i.e., slow = slow.next and fast = fast.next).

    5. When the loop terminates, the fast pointer has reached the end of the list. Since the fast pointer started k steps ahead of the slow pointer, the slow pointer now points to the kth node from the end of the list.

    6. Return the slow pointer, which now points to the kth node from the end of the list.

        */
        let fast = this.head;
        let slow = this.head;

        if (k < 0 && k === 0) return null;
        if (k === 1) return this.tail

        for (let i = 0; i < k; i++) {
            fast = fast.next;
        }

        while (fast != null) {
            fast = fast.next
            slow = slow.next
        }
        return slow;

    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
