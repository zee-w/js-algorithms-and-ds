# Big O Notations

Consider an example in which we have two set of code(which does the same operation) written by two different programmers. How would we determine that which code's performance is better.

Answer is Big O notation. It is the way to mathematically figure out which code would perform better. 


## Important Concepts in Big O

> - Time Complexity: We want to run our code as quickly as possible, this is called Time Complexity. We don't measure Time Complexity in the TIME take, However, we measure it in the no of operations. This is becasue if we run the same set of code in a different faster machine, the time of execution would reduce.

> - Space Complexity:We want to run our code with the lowest amount of memory it can consume, this is called Space Complexity.


> - Big O always measures the Worst Case 

> - We always drop constants in Big O, e.g. if a code has time complexity of O(2n), we always drop the constant (2 in this case). We say that the Big O is O(n) instead of O(2n)

> - We also always drop the non dominants in Big O, e.g. O(n^2 + n)  is written as O(n^2)


## Cheat Sheet for Big O:  https://www.bigocheatsheet.com/