/*
Your task is to write a function called removeDuplicates that takes a list of numbers or letters as input.

This list can have some items that appear more than once.

Your function should return a new list where each number or letter only appears once.


Example

    Input: [1, 2, 2, 3, 4, 4, 4]

    Output: [1, 2, 3, 4]


In this example, the numbers 2 and 4 appear more than once in the list. The function removes the extra copies, so each number only appears one time.
*/


function removeDuplicates(arr){
    const mySet = new Set(arr);
    return Array.from(mySet);
}




// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3]");
console.log("Output: ", removeDuplicates([1, 2, 3]));
console.log("---------------");

// ---------------
// With Duplicates
// ---------------
console.log("With Duplicates:");
console.log("Input: [1, 2, 2, 3, 3, 3]");
console.log("Output: ", removeDuplicates([1, 2, 2, 3, 3, 3]));
console.log("---------------");

// ---------------
// Mixed Types
// ---------------
console.log("Mixed Types:");
console.log('Input: [1, "1", true, "true"]');
console.log("Output: ", removeDuplicates([1, "1", true, "true"]));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", removeDuplicates([]));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", removeDuplicates([1]));
console.log("---------------");


