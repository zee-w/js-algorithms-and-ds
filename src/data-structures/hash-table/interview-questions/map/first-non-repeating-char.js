/*
The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. 
If every character in the string repeats, or if the string is empty, the function should return null.


Examples:

    firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.

    firstNonRepeatingChar("aabbcde") should return 'd' because it's the first non-repeating character.

*/


    /*

    1. Set Up a Map:

        First, an empty "Map" is created to keep track of how many times each character appears in the text. 
        Think of it like a notebook where you write down each character and how often you've seen it.

    2. Count Characters:

        Next, the code goes through the text one character at a time.

        For each character, it checks the notebook (Map) to see if it has been counted before.

        If it has, it adds 1 to that character's count.

        If not, it writes the character down in the notebook and puts a 1 next to it, saying, "I've seen this character once."

    3. Find the First Unique Character:

        Then, the code goes through the text again, this time looking for a character that appears only once.

        It checks the notebook (Map) for the count of each character.

        The moment it finds a character that appears only once, it gives that character back as the answer.

    4. What if No Unique Character is Found:

        If the code goes through the whole text and doesn't find any character that appears only once, it returns null.

    */




    // Define a function called 'firstNonRepeatingChar'.
    // It takes a string as an argument.
    function firstNonRepeatingChar(string) {
        
        // Create a new Map named 'charCounts'.
        // This Map will hold each character from the string
        // and how many times it appears.
        const charCounts = new Map();
        
        // Loop through each character in the string.
        for (let i = 0; i < string.length; i++) {
            
            // Get the character at index 'i'.
            const c = string[i]
            
            // Check if character is in Map.
            // If not, pretend count is 0. Add 1 to count.
            // Save the new count in the Map.
            charCounts.set(c, (charCounts.get(c) || 0) + 1);
        }
        
        // Loop through the string again to find
        // the first character that appears only once.
        for (let i = 0; i < string.length; i++) {
            
            // Get the character at index 'i'.
            const c = string[i]
            
            // If this character appears only once,
            // return it.
            if (charCounts.get(c) === 1) {
                return c;
            }
        }
        
        // If no such character found, return 'null'.
        return null;
    }


// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

// // ---------------
// // All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");


