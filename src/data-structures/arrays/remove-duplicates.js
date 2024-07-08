    /*
The removeDuplicates function aims to remove duplicates from a sorted array of integers (nums) and returns the new length of the array.

The function modifies the input array in-place such that each element appears only once and returns the new length.


Constraints:

    The input array is sorted in ascending order.

    The array can be empty or contain any number of elements.

    Elements in the array are integers.

    The function should not allocate extra space; it must do this by modifying the input array in-place (this means you cannot use another data structure like a set).

    Basic Example

    let nums = [1, 1, 2];
    let result = removeDuplicates(nums);
    // The function should return 2
    // The nums array should be modified to [1, 2]

Array with All Duplicates

    let nums = [1, 1, 1, 1];
    let result = removeDuplicates(nums);
    // The function should return 1
    // The nums array should be modified to [1]

    */
    
    
    // Define the function removeDuplicates with one parameter: nums
    // (an array of sorted numbers).
    function removeDuplicates(nums) {
     
        // Check if the array is empty. If it is, return 0.
        if (nums.length === 0) {
            return 0;
        }
     
        // Initialize 'writePointer' to 1. This pointer is used to keep
        // track of the index where we'll place the next unique element.
        let writePointer = 1;
     
        // Start a for loop. Initialize 'readPointer' to 1. This pointer is used
        // to read each element from the array.
        for (let readPointer = 1; readPointer < nums.length; readPointer++) {
     
            // Inside the loop, check if the current element (at readPointer)
            // is different from the previous element.
            if (nums[readPointer] !== nums[readPointer - 1]) {
     
                // If it is, copy the value at 'readPointer' to 'writePointer'.
                nums[writePointer] = nums[readPointer];
     
                // Increment 'writePointer' to the next index to prepare for
                // the next unique element.
                writePointer++;
            }
            // If condition is not met, the loop simply continues to the next iteration.
        }
     
        // After the loop ends, 'writePointer' will be at the position where
        // the next new element would go. This is effectively the new length
        // of the array without duplicates. We return this length.
        return writePointer;
    }


