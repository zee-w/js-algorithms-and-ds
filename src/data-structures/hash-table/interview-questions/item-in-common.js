// Given two arrays arr1 and arr2. return true if there is a common value anmong them.


// Solution using two for loops or two pointers. 
// Time Complexity is O(n^2)
function solutionWithFor(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }   
    }
    return false;
}

console.log("Solution with two For loops: ");
console.log(solutionWithFor([1, 3, 5], [2, 4, 5]));




// Solution with JS objects. 
// Time complexity is O(n)

function solutionWithObject(arr1, arr2) {
    let arr1Obj={}

    for(let i=0; i<arr1.length;i++){
        arr1Obj[arr1[i]]=true
    }
    

    for(let j=0; j<arr2.length;j++){
        if(arr1Obj[arr2[j]]) return true
    }

    return false;
    
}


console.log("Solution with JS Objects: ");
console.log(solutionWithObject([1, 3, 5], [2, 4, 2]));





// Solution with JS Map. 
// Time complexity is O(n)
function solutionWithJSMap(arr1, arr2){
    const mapArr1 = new Map();
    
    for(let i of arr1){
        mapArr1.set(i,true);
    }
    console.log(mapArr1);
    
    for(let j of arr2){
        if(mapArr1.has(j)) return true;
    }
    return false;
    
}



console.log("Solution with JS MAP: ");
console.log(solutionWithJSMap([1, 3, 5], [2, 5, 5]));