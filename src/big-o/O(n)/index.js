// we pass the function number n and it runs n times. 
// O(n) is always going to be a straght line on a graph. (number of operations are alwasys proportional to whatever n is)



function logItems(n){
    for (var i=0; i<=n; i++){
        console.log(i);
    }
}


console.log(logItems(10));


// The above code runs n=10 times, so its O(n)