/*
The function rotate modifies an array (nums) by rotating its elements to the right by k steps.

It does so in-place without allocating extra space.


Constraints:

    The array can be empty or contain any number of elements.

    The array contains integers.

    The value of k can be positive, negative, or zero.


Parameters:

    nums: An array of integers to be rotated.

    k: An integer representing the number of steps to rotate the array to the right.


Returns:

    The function does not return anything; it modifies the input array (nums) in-place.


Examples:

    Basic Example

        let arr = [1, 2, 3, 4, 5];
        rotate(arr, 1);
        // After rotation, arr should be [5, 1, 2, 3, 4]

    Rotate by Array Length

        let arr = [1, 2, 3];
        rotate(arr, 3);
        // After rotation, arr should be [1, 2, 3]
    */

        

    // Define the function called 'rotate'. 
    // 'nums' is the array we want to rotate, and 'k' is the number of rotations.
    function rotate(nums, k) {
        
        // If 'k' is greater than the length of the array, 
        // it will effectively be the same as rotating 
        // the array 'k % nums.length' times.
        // This line makes sure 'k' is within the array length.
        k = k % nums.length;
     
        // Initialize two pointers 'start' and 'end' that we will use to reverse 
        // the first part of the array. 
        // 'start' is at the beginning and 'end' is at (length of array - k - 1).
        let start = 0;
        let end = nums.length - k - 1;
        
        // We reverse the first part of the array by swapping the elements at 
        // 'start' and 'end', then moving the pointers towards each other.
        while (start < end) {
            let temp = nums[start];  // Save the element at 'start'.
            nums[start] = nums[end]; // Place the element from 'end' at 'start'.
            nums[end] = temp;        // Place the saved element at 'end'.
            
            // Increment 'start' and decrement 'end' to continue the reverse operation.
            start++;
            end--;
        }
     
        // Now we reverse the second part of the array, 
        // so we reinitialize 'start' and 'end' pointers.
        start = nums.length - k;
        end = nums.length - 1;
        
        // Same logic as before, reverse the elements between the new 
        // 'start' and 'end'.
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            
            start++;
            end--;
        }
     
        // Finally, we reverse the whole array. 
        // This, combined with the previous reversals, achieves the rotation.
        start = 0;
        end = nums.length - 1;
        
        // Reverse the entire array.
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            
            start++;
            end--;
        }
    }


