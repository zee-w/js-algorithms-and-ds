/*
Example Execution with Binary 101:

    Start with num = 0.

    Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1

    Process 0: num = 1 * 2 + 0 = 2

    Process 1: num = 2 * 2 + 1 = 5

    Return num, which is 5.
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

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
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

    binaryToDecimal() {
        /*
        Steps: 
        Step 1: Initialize Variables
        num: This variable will store the decimal representation of the binary number. Initialized to zero.
        current: This variable points to the head node of the linked list initially. We'll traverse the list using this pointer.

        Step 2: Loop Through the Linked List
        The while loop continues until current becomes null, meaning we have reached the end of the linked list.

        Inside the loop:

        num = num * 2 + current.value;
        This line does the binary to decimal conversion. Each digit in a binary number represents a power of 2. 
        So, we multiply the existing decimal (num) by 2 (essentially shifting all bits to the left by 1) and add the binary digit (current.value) at the current position in the linked list.

        current = current.next;: This moves the pointer to the next node in the list.


        Step 3: Return the Result
        return num;
        The final value of num is returned, representing the decimal equivalent of the binary number stored in the linked list.

        */
        let num = 0;
        let current = this.head;

        while (current !== null) {
            num = num * 2 + current.value
            current = current.next;
        }
        return num
    }
}





// ---------------
// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log("Convert 1011 to 11:");
console.log("Input: 1 -> 0 -> 1 -> 1");
console.log("Output: ", list1.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log("Convert 1100 to 12:");
console.log("Input: 1 -> 1 -> 0 -> 0");
console.log("Output: ", list2.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log("Convert 1 to 1:");
console.log("Input: 1");
console.log("Output: ", list3.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log("Convert empty list to 0:");
console.log("Input: empty");
console.log("Output: ", list4.binaryToDecimal());
console.log("---------------");


