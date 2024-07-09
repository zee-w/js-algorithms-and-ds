/*
In this exercise, you are required to write a JavaScript function called findDuplicates. 
This function will take an array of numbers as its only parameter. 
Your goal is to identify and return all the numbers that appear more than once in the array.

The function should return a new array containing the duplicate numbers. 
The function should return an empty array if there are no duplicate numbers.


Examples:

    findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]) should return [4, 6] because the numbers 4 and 6 appear more than once.

    findDuplicates([1, 2, 3]) should return [] because there are no duplicate numbers.
    */

    // We define a function called 'findDuplicates'.
    // This function takes an array 'nums' as input.
    function findDuplicates(nums) {
        
        // Create a new Map named 'numCounts'.
        // A Map stores key-value pairs.
        // The 'key' is the number from the array,
        // and the 'value' is the count of that number.
        const numCounts = new Map();
        
        // Loop through each number in the array 'nums'.
        for (let num of nums) {
            
            // Check if this number ('num') is
            // already in our 'numCounts' Map.
            // If it's not, assume the count is zero.
            // Add 1 to this count.
            // Save this count in the 'numCounts' Map.
            numCounts.set(num, (numCounts.get(num) || 0) + 1);
        }
        
        // Create an empty array named 'duplicates'.
        // This will hold numbers that appear more than once.
        const duplicates = [];
        
        // Loop through each entry in 'numCounts' Map.
        // 'key' is the number,
        // 'value' is the count of that number.
        for (let [key, value] of numCounts.entries()) {
            
            // If 'value' is more than 1,
            // the number ('key') is a duplicate.
            if (value > 1) {
                
                // Add this number ('key') to
                // our 'duplicates' array.
                duplicates.push(key);
            }
        }
        
        // Return the 'duplicates' array.
        // It contains numbers that appear more than once.
        return duplicates;
    }


// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log("---------------");

// ---------------
// Single Duplicate
// ---------------
console.log("Single Duplicate:");
console.log("Input: [1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Multiple Duplicates
// ---------------
console.log("Multiple Duplicates:");
console.log("Input: [1, 1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Repeating Duplicates
// ---------------
console.log("Repeating Duplicates:");
console.log("Input: [1, 1, 1, 2, 2, 2, 3]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", JSON.stringify(findDuplicates([])));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", JSON.stringify(findDuplicates([1])));
console.log("---------------");


