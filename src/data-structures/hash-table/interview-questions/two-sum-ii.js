/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

*/

var twoSumII = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let total = numbers[left] + numbers[right];
        if (total === target) {
            return [left + 1, right + 1];
        } else if (total > target) {
            right--;
        } else {
            left++;
        }
    }
};


console.log(twoSumII([2,7,11,15],9));