/*

Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]


*/

function topKFrequent(nums, k) {
    let myMap = new Map();
    let myArr=[]
   
    for(const num of nums){
    myMap.set(num, (myMap.get(num) || 0)+1)
    }

    const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));

    for(const [key,value] of mapSort1){
    myArr.push(key)
    }

    return myArr.slice(0,k);
}


topKFrequent([1,2,2,3,3,3], 2)