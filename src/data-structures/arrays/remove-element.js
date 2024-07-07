/*
Basic Example

    let nums = [3, 2, 2, 3];
    let val = 3;
    let len = removeElement(nums, val);
    // The array nums should be modified to [2, 2]
    // The function should return 2

Array with Different Elements

    let nums = [0, 1, 2, 2, 3, 0, 4, 2];
    let val = 2;
    let len = removeElement(nums, val);
    // The array nums should be modified to [0, 1, 3, 0, 4]
    // The function should return 5

*/

    // Define the function removeElement that takes in two parameters:
    // nums (an array), and val (a value to remove).
    function removeElement(nums, val) {
     
        // Initialize variable 'i' to 0.
        // We'll use 'i' to keep track of where to place elements
        // that are not equal to 'val'.
        let i = 0;
     
        // Start a for-loop that goes from 0 to the length of the array - 1.
        // The loop counter is 'j'.
        for (let j = 0; j < nums.length; j++) {
     
            // Inside the loop, check if the current element at index 'j'
            // in the array is NOT equal to 'val'.
            if (nums[j] !== val) {
     
                // If it is NOT equal to 'val', place this element at index 'i'.
                // This effectively moves all elements not equal to 'val' to the
                // beginning of the array.
                nums[i] = nums[j];
     
                // Increment 'i' to prepare for the next unique (non-'val') element.
                i++;
            }
            // If nums[j] is equal to 'val', then do nothing and proceed to the
            // next iteration of the loop.
        }
     
        // At the end, return 'i', which is the new length of the array after
        // elements equal to 'val' have been removed.
        return i;
    }






console.log(removeElement([3, 2, 2, 3], 3))