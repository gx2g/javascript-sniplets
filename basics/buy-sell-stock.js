// Best time to buy and sell stock JS

/*
@param {number[]} prices
@return {number}

*/

const maxProfit = function(prices) 
{
    let total = 0;
    // loop through prices
    for(let i =1; i<prices.length; i++)
    {
        // if current price greater then previous
        if(prices[i] > prices[i-1])
        {
            // find difference between the two, current price - previous price
            let diff = prices[i] - prices[i-1];
            // total + the difference
            total += diff;
        }
    }

    return total;


};

console.log(maxProfit([7,1,5,3,6,4])); // Output: 7
console.log(maxProfit([1,2,3,4,5])); // Output: 4
console.log(maxProfit([7,6,5,4,3,1])); // Output: 0