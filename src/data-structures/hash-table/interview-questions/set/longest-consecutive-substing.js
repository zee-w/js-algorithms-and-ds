// Javascript implementation of the approach
 
/*

Length of the longest substring with consecutive characters
Last Updated : 22 Feb, 2023

Given string str of lowercase alphabets, the task is to find the length of the longest substring of characters in alphabetical order i.e. string “dfabck” will return 3. Note that the alphabetical order here is considered circular i.e. a, b, c, d, e, …, x, y, z, a, b, c, ….
 

Examples: 

    Input: str = “abcabcdefabc” 
    Output: 6 
    All valid sub-strings are “abc”, “abcdef” and “abc” 
    And, the length of the longest of these is 6

    Input: str = “zabcd” 
    Output: 5 

*/







// Function to return the ending index for the
// largest valid sub-string starting from index i
function getEndingIndex(str,n,i)
{
        i++;
          while (i < n) {
            let curr = str[i];
            let prev = str[i - 1];
   
            // If the current character appears after
            // the previous character  according to 
            // the given circular alphabetical order
            if ((curr == 'a' && prev == 'z') ||
                (curr.charCodeAt(0) - prev.charCodeAt(0) == 1))
                i++;
            else
                break;
        }
   
        return i - 1;
}
 
// Function to return the length of the longest
// sub-string of consecutive characters from str
function largestSubStr(str,n)
{
        let len = 0;
   
        let i = 0;
        while (i < n) {
   
            // Valid sub-string exists from index
            // i to end
            let end = getEndingIndex(str, n, i);
   
            // Update the length
            len = Math.max(end - i + 1, len);
            i = end + 1;
        }
   
        return len;
}
 
// Driver code
let str = "abcabcdefabc";
let n = str.length;
 
document.write(largestSubStr(str, n));
 
 
// This code is contributed by patel2127