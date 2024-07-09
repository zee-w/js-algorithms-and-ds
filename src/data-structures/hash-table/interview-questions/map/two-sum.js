/*
In this exercise, you are tasked with writing a JavaScript function called twoSum.

The function should accept an array of integers (nums) and an integer (target). 
Your task is to find two numbers in the array that sum up to the target integer. T
he function should return an array containing the indices of these two numbers. 
If no such numbers exist, return an empty array.


Examples:

    twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

    twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.
*/


function twoSumwithLoops(nums, target) {
    if (nums.length === 0) return []
    if (nums.length === 1) return []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]]
            }
        }
    }
    return undefined
}



// // ---------------
// // Unique Solution
// // ---------------
// console.log("Unique Solution:");
// console.log("Input: [2, 7, 11, 15], Target: 9");
// console.log("Output: ", JSON.stringify(twoSumwithLoops([2, 7], 9)));
// console.log("---------------");

// // ---------------
// // Duplicate Numbers
// // ---------------
// console.log("Duplicate Numbers:");
// console.log("Input: [3, 3, 11, 15], Target: 6");
// console.log("Output: ", JSON.stringify(twoSumwithLoops([3, 3, 11, 15], 6)));
// console.log("---------------");



    // Define a function called 'twoSum'.
    // It takes an array 'nums' and a number 'target'.
    function twoSum(nums, target) {
        
        // Create a new Map called 'numMap'.
        // This Map will hold numbers and their positions.
        const numMap = new Map();
        
        // Loop through each number in 'nums' array.
        for (let i = 0; i < nums.length; i++) {
            
            // Get the current number from 'nums'.
            const num = nums[i];
            
            // Calculate the complement. We're looking
            // for this number in our 'numMap'. For each number, we calculate its "complement" which is the number that, when added to it, equals the target.
            const complement = target - num;
            
            // Check if the complement exists in 'numMap'.
            if (numMap.has(complement)) {
                
                // If it exists, return the positions
                // of both numbers.
                return [numMap.get(complement), i];
            }
            
            // Save the number and its position
            // in the 'numMap'.
            numMap.set(num, i);
        }
        
        // If no such numbers exist, return an empty array.
        return [];
    }





// ---------------
// Unique Solution
// ---------------
console.log("Unique Solution:");
console.log("Input: [1, 2, 7, 11, 15], Target: 9");
console.log("Output: ", JSON.stringify(twoSum([1, 2, 7, 11, 15], 9)));
console.log("---------------");

// ---------------
// Duplicate Numbers
// ---------------
console.log("Duplicate Numbers:");
console.log("Input: [3, 3, 11, 15], Target: 6");
console.log("Output: ", JSON.stringify(twoSum([3, 3, 11, 15], 6)));
console.log("---------------");

// ---------------
// No Solution
// ---------------
console.log("No Solution:");
console.log("Input: [2, 7, 11, 15], Target: 30");
console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 30)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [-1, -2, -3, -4, -5], Target: -8");
console.log("Output: ", JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 0");
console.log("Output: ", JSON.stringify(twoSum([], 0)));
console.log("---------------");


