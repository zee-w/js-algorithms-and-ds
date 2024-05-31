// we pass the function number n and it runs n^2 times(Loop within a loop); 
// O(n^2) is always going to be a worse than O(n) on a graph.


function logItems(n){
    for (var i=0; i<=n; i++){
        for(var j=0; j<=n; j++){
            console.log(i,j);
        }
    }
}


console.log(logItems(10));


// The above code runs n * n= n^2 times i.e. 10 * 10 = 100 tiems. So the Big O is O(n^2)