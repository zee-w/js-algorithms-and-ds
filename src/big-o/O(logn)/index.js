/* 

Consider an array [1,2,3,4,5,6,7,8] -> we want to search the number 1 from the array. 

Solution: 

Divide the array into two. 

//Step 1//: [1,2,3,4] & [5,6,7,8] -> Notice that '1' is in the first array, so we can discard the second half. 

updated array: [1,2,3,4]

Now, Divide the array again into two halves.

//Step 2//: We get [1,2] & [3,4] -> find the array with '1' and drop the other. 

Repeat the steps until we find 1 in the array.

//Step 3//: [1] & [2]

This technique is called divide and conqure.


Now count the number of steps we went through above, i.e. 3 steps. Also we had 8 items in the array to begin with. 

So, 2^3 = 8
      or 
    log2 8 = 3
      or
    How many times do we divide 8 by 2 so that we get 1 item. 

*/