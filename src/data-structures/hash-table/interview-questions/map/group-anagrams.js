/*
The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

Your function should return an array of arrays, where each inner array contains a group of anagram strings.


Examples:

    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

    groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].
*/




    // Define a function called 'groupAnagrams'.
    // It takes an array of strings as its argument.
    function groupAnagrams(strings) {
        /*

    1. Create a Map for Anagram Groups:

        First, we create an empty "Map" to help us remember which words are anagrams.

    2. Go Through Each Word:

        We then go through each word in the list of words (strings).

        For each word, we break it into individual letters and sort those letters.

        We then put the sorted letters back together to form a "standard" version of the word. For example, both "listen" and "silent" will become "eilnst".

    3. Check and Group Anagrams:

        We then check if we have seen this "standard" version of the word before in our Map.

        If we have, we add the original word to the group of anagrams for that "standard" word.

        If we haven't, we create a new group and add the original word to it.

    4. Get the Groups of Anagrams:

        Finally, we take all the groups of anagrams from our Map and put them into a list.

        This list has all the words grouped by their anagrams.
        */

        
        // Create a new Map called 'anagramGroups'.
        // This Map will group anagrams together.
        const anagramGroups = new Map();
        
        // Loop through each string in the array.
        for (const string of strings) {
            
            // Convert the string into an array of
            // individual characters.
            const chars = Array.from(string);
            
            // Sort the characters alphabetically.
            chars.sort();
            
            // Join them back into a single string.
            const canonical = chars.join('');
            
            // Check if this sorted string is already
            // in the 'anagramGroups' Map.
            if (anagramGroups.has(canonical)) {
                
                // If yes, add the original string
                // to that group.
                anagramGroups.get(canonical).push(string);
                
            } else {
                
                // If not, create a new group with
                // this string as its first member.
                const group = [string];
                anagramGroups.set(canonical, group);
            }
        }
        
        // Return the grouped anagrams as an array.
        return Array.from(anagramGroups.values());
    }


// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
//console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log("Output: ", JSON.stringify(groupAnagrams(['hello', 'world', 'test'])));
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(['', '', ''])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log("---------------");



