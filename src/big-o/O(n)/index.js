// No matter the number of inputs, we always find the value on same time.  (Constant Time)
// O(1) is the most efficeint a code is ever going to be. Its almost a straingt line on the graph.



function logItems(n){
    for (var i=0; i<=n; i++){
        console.log(i);
    }
}


console.log(logItems(10));


// The above code runs n=10 times, so its O(n)