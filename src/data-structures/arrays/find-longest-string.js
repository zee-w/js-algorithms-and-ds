/*
The findLongestString function aims to find the longest string from an array of strings (stringArray).

The function returns the longest string present in the given array.


Constraints:

    The array can be empty or contain any number of elements.

    Elements in the array must be strings.

    If there are multiple strings of the same longest length, the function returns the first one it encounters.


Parameters:

    stringArray: An array of strings.

Examples:

    Basic Example

        let myStrings = ["apple", "banana", "pea"];
        let result = findLongestString(myStrings);
        // The function should return "banana"

    Array with Single Character Strings

        let myStrings = ["a", "b", "c"];
        let result = findLongestString(myStrings);
        // The function should return "a"
*/

    // Define the function findLongestString that takes in one parameter:
    // stringArray (an array of strings).
    function findLongestString(stringArray) {
     
        // Initialize 'longestString' with an empty string.
        // We will use this to keep track of the longest string.
        let longestString = "";
     
        // Start a for-of loop to iterate through each string in stringArray.
        for (let str of stringArray) {
     
            // Check if the length of the current string (str) is greater
            // than the length of the current longest string (longestString).
            if (str.length > longestString.length) {
     
                // If it is, update 'longestString' to the new longer string.
                longestString = str;
            }
            // If the condition is not met, we simply move to the next iteration.
        }
     
        // After the loop, return 'longestString' which now holds the longest
        // string found in stringArray.
        return longestString;
    }