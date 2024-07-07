/*
In this exercise, you are tasked with writing a JavaScript function named subarraySum.

This function should take in an array of integers (nums) and another integer (target).

Your goal is to find a contiguous subarray whose elements sum up to the given target integer. 
The function should return an array containing the starting and ending indices of the subarray. 
If no such subarray exists, return an empty array.


Examples:

    subarraySum([1, 4, 20, 3, 10, 5], 33) should return [2, 4] because the subarray from index 2 to index 4 sums to 33.

    subarraySum([1, 2, 3], 3) should return [0, 1] because the subarray from index 0 to index 1 sums to 3.


*/

/*
How the Code Works:


    Create a Map for Sums:

        A Map called sumIndex is created to remember the sum of numbers up to each point in the list.

        We start with setting the sum of 0 numbers to be 0 with an index of -1.

    Initialize Current Sum:

        We start with a sum of 0 (currentSum) and add numbers to it as we go through the list.

    Loop Through the Numbers:

        We go through each number in the list (nums) one by one.

    Calculate the Running Sum:

        For each number, we add it to currentSum.

    Check for Target Sum:

        We then look to see if currentSum - target is a sum we've seen before (using our Map).

        If it is, we've found our subarray! We return the starting and ending index for that subarray.

    Remember the Sum:

        Whether we found a subarray or not, we store currentSum and its index in the Map. This is to help find potential subarrays later.

    Return Result:

        If we go through the entire list and can't find a subarray that sums to the target, we return an empty list.

*/




    // Define a function called 'subarraySum'.
    // Takes an array 'nums' and a number 'target'.
    function subarraySum(nums, target) {
        
        // Create a new Map called 'sumIndex'.
        // This Map will hold sums and their index.
        const sumIndex = new Map();
        
        // Initialize the Map with sum 0 and index -1.
        sumIndex.set(0, -1);
        
        // A variable to keep track of the sum.
        let currentSum = 0;
        
        // Loop through each number in 'nums'.
        for (let i = 0; i < nums.length; i++) {
            
            // Add the current number to 'currentSum'.
            currentSum += nums[i];
            
            // Check if we've seen a sum that would
            // create a subarray equal to target.
            if (sumIndex.has(currentSum - target)) {
                
                // If found, return the subarray indices.
                return [sumIndex.get(currentSum - target) + 1, i];
            }
            
            // Save the current sum and index
            // in the Map for future checks.
            sumIndex.set(currentSum, i);
        }
        
        // If no subarray with sum equal to target,
        // return an empty array.
        return [];
    }
