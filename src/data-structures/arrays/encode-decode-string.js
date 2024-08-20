/*

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["leet","code","love","you"]

Output:["leet","code","love","you"]

Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

*/


    function encode(strs) {
        let result='';

        for(let string of strs){
            result=result+ `${string.length}#${string}`
        }
        console.log(result)
        return result;
    }


    function decode(str) {
        let result=[]
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++
            }

            let length=parseInt(str.substring(i, j),10)
            i = j + 1;
            j = i + length;

            result.push(str.substring(i, j))
            i=j;

           
        }
        return result;
    }


    encode(["leet","name","hello","worlds"])

    console.log(decode('4#leet4#name5#hello6#worlds'))
