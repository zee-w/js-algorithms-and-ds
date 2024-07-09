/*
Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  m and n (inclusive) in the linked list.

Note: this linked list class does NOT have a tail which will make this method easier to implement.

Assumption: You can assume that m and n are not out of bounds.


Output:

    The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.


Constraints:

    You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

    You can only traverse the linked list once.



Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5


After calling the reverseBetween(1, 3) function:

    list.reverseBetween(1, 3);

The linked list should now have the following values:
1 -> 4 -> 3 -> 2 -> 5



Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6


After calling the reverseBetween(3, 5) function:

    list.reverseBetween(3, 5);

The linked list should now have the following values:
1 -> 2 -> 3 -> 6 -> 5 -> 4
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
