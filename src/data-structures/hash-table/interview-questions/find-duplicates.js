    // Define a function named 'findDuplicates'.
    // This function takes an array 'nums' and
    // identifies duplicate numbers in that array.
    function findDuplicates(nums) {
     
        // Create an empty object named 'numCounts'.
        // This will hold the count of each number.
        const numCounts = {};
     
        // Loop through each number in the 'nums' array.
        for (let num of nums) {
     
            // Check if 'num' is already a key in 'numCounts'.
            // If not, assume its count is 0.
            // Increase the count by 1.
            numCounts[num] = (numCounts[num] || 0) + 1;
        }
     
        // Create an empty array named 'duplicates'.
        // We'll add any duplicates we find here.
        const duplicates = [];
     
        // Loop through each key in the 'numCounts' object.
        for (let key in numCounts) {
     
            // Check if the count of this number is greater
            // than 1. If so, it's a duplicate.
            if (numCounts[key] > 1) {
     
                // Add the duplicate number to the 'duplicates' array.
                // We convert 'key' to a number since object keys are 
                // always strings.
                duplicates.push(Number(key));
            }
        }
     
        // Finally, return the 'duplicates' array.
        // This will contain all numbers that appeared
        // more than once in the original 'nums' array.
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


