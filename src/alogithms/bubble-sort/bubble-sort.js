
/*

Here's a step-by-step explanation of the code:


    function bubbleSort(array) {: This line defines the bubbleSort() function, which takes an array as an argument.

    for (let i = array.length - 1; i > 0; i--) {: This outer loop iterates from the last index of the array to the first index. 
    It controls the number of passes through the array.

    for (let j = 0; j < i; j++) {: This inner loop iterates from the first index to the index i (exclusive) of the array. 
    It compares adjacent elements and swaps them if they are in the wrong order.

    if (array[j] > array[j+1]) {: This line checks if the current element array[j] is greater than the next element array[j+1]. 
    If so, they need to be swapped.

    let temp = array[j];: This line creates a temporary variable temp to store the value of the current element array[j].

    array[j] = array[j+1];: This line assigns the value of the next element array[j+1] to the current element array[j].

    array[j+1] = temp;: This line assigns the value stored in the temporary variable temp (the original value of array[j]) to the next element array[j+1]. This effectively swaps the two elements.

    }: This closing brace marks the end of the if statement.

    }: This closing brace marks the end of the inner loop.

    }: This closing brace marks the end of the outer loop.

    return array;: This line returns the sorted array.

    */



function bubbleSort(array) { // Sort array using Bubble Sort
    // Outer loop: Iterate from end to start of array
    for (let i = array.length - 1; i > 0; i--) {
        // Inner loop: Iterate until index i
        for (let j = 0; j < i; j++) {
            // If elements are out of order
            if (array[j] > array[j+1]) {
                // Swap adjacent elements
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array; // Return sorted array
}