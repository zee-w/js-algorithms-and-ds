/*
Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.

Note: this linked list class does NOT have a tail which will make this method easier to implement.


Output:

    The function should modify the linked list in-place, removing all nodes with duplicate values.


Constraints:

    You are allowed to use the JavaScript Set data structure to keep track of unique node values.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 2 -> 1 -> 4

After calling the removeDuplicates() function:

The linked list should now have the following values: 1 -> 2 -> 3 -> 4

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

    removeDuplicates() {
        /*
    Hstep-by-step explanation of the logic:

    1. Create a Set named values to store the unique values of the linked list nodes.

    2. Initialize two pointers: previous, initially set to null, and current, pointing to the head of the linked list.

    3. Iterate through the linked list using a while loop that continues as long as current is not null: 
        a. Check if values contains the current node's value. If it does, it means the node is a duplicate. 
        Update previous.next to point to current.next (skipping the current node) and decrement the list length by 1.  
        b. If values does not contain the current node's value, add the value to the set and update previous to point to the current node.  
        c. Move the current pointer to the next node.

        */
        const values = new Set();
        let previous = null
        let current = this.head;

        while (current !== null) {
            if (values.has(current.value)) {
                previous.next = current.next
                this.length -= 1;
            } else {
                values.add(current.value)
                previous = current
            }
            current = current.next

        }

    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);


console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();



/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
