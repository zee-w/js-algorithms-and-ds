
    /*
    The function maxProfit aims to find the maximum profit one could 
    achieve by buying and selling a stock once, given an array of stock prices (prices).


Constraints:

    The array can be empty or contain any number of elements.

    The elements in the array are non-negative integers, representing the stock prices.

    You must buy before you can sell the stock.


Parameters:

    prices: An array of integers representing stock prices.
Examples:

    Basic Example

        let prices = [7, 1, 5, 3, 6, 4];
        let result = maxProfit(prices);
        // The function should return 5
        // Buy at price 1 and sell at 6 to achieve a maximum profit of 5.

    Array with Decreasing Prices

        let prices = [5, 4, 3, 2, 1];
        let result = maxProfit(prices);
        // The function should return 0
        // No profit can be made in this case.

    */
    
    
    
    // Define the function maxProfit with a single parameter: prices
    // (an array of stock prices).
    function maxProfit(prices) {
     
        // Initialize 'minPrice' to the largest possible value in JavaScript.
        // This variable will store the lowest stock price seen so far.
        let minPrice = Number.MAX_VALUE;
     
        // Initialize 'maxProfit' to 0.
        // This variable will store the highest profit we can make.
        let maxProfit = 0;
     
        // Start a for loop that iterates through each stock price in the array.
        for (let price of prices) {
     
            // Update 'minPrice' with the minimum of the current 'minPrice'
            // and the current stock price.
            minPrice = Math.min(minPrice, price);
     
            // Calculate the profit if we buy at 'minPrice' and sell at the current price.
            let profit = price - minPrice;
     
            // Update 'maxProfit' with the maximum of the current 'maxProfit'
            // and the calculated profit.
            maxProfit = Math.max(maxProfit, profit);
        }
     
        // After the loop, 'maxProfit' will contain the highest profit we can make.
        // Return this value.
        return maxProfit;
    }



