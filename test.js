// function groupAnagrams(strs) {
//   let myMap= new Map();

//   for(let string of strs){
//       let splited= string.split('');
//       let sorted=splited.sort().join('');
  
//       if(myMap.has(sorted)){
//           myMap.get(sorted).push(string)
//       }else {
//           myMap.set(sorted, [string]);
//       }
//   }
//   console.log(myMap);
//   return Array.from(myMap.values());

// }



// groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])



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


const arrayK = myArr.slice(0,k)

console.log(arrayK)
}

topKFrequent([1,1,1,1,2,2,2,3,3],2)



