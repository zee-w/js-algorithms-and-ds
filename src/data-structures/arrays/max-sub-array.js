//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function finds the maximum sum of any      |
//   |   contiguous subarray in a given array `nums`.    |
//   |                                                   |
//   | Tips:                                             |
//   | - It uses the Kadane's algorithm.                 |
//   | - The `currentSum` keeps track of the sum of the  |
//   |   subarray ending at the current index.           |
//   | - The `maxSum` keeps the maximum sum found so far.|
//   | - For each number, `currentSum` is either the     |
//   |   number itself or `currentSum + nums[i]`.        |
//   +===================================================+


/*
The function maxSubarray takes an array of integers (nums) and returns the sum of the contiguous subarray (containing at least one number) which has the largest sum.


Constraints:

    The input array may be empty or contain any number of elements.

    The elements in the array are integers.


Parameters:

    nums: An array of integers.


Returns:

    An integer representing the sum of the contiguous subarray with the largest sum.


Examples:

    Basic Example

        const result = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
        // The function should return 6 because [4, -1, 2, 1] has the largest sum

    Single-Element Array

        const result = maxSubarray([1]);
        // The function should return 1 because the single element is the largest sum
*/


    // Define the function 'maxSubarray'. 'nums' is the array of numbers 
    // whose largest sum contiguous subarray we want to find.
    function maxSubarray(nums) {
        
        // If the array is empty, we return 0 as the maximum sum.
        if (nums.length === 0) {
            return 0;
        }
     
        // Initialize 'maxSum' with the first element in the array.
        // 'maxSum' will keep track of the maximum subarray sum.
        let maxSum = nums[0];
     
        // Initialize 'currentSum' with the first element as well.
        // 'currentSum' will keep track of the sum of the current subarray.
        let currentSum = nums[0];
     
        // Loop starts from the second element since we've already 
        // used the first element to initialize 'maxSum' and 'currentSum'.
        for (let i = 1; i < nums.length; i++) {
     
            // Update 'currentSum' to be the maximum between the current element 
            // and the sum of 'currentSum' and the current element.
            // This decides whether to extend the existing subarray 
            // or start a new one.
            currentSum = Math.max(nums[i], currentSum + nums[i]);
     
            // Update 'maxSum' if 'currentSum' is greater than 'maxSum'.
            // This keeps track of the maximum subarray sum encountered so far.
            maxSum = Math.max(maxSum, currentSum);
        }
     
        // Return the maximum subarray sum.
        return maxSum;
    }