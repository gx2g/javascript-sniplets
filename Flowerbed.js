/*

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1
There are no two adjacent flowers in flowerbed
0 <= n <= flowerbed.length

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true


*/

/*

@param {number[]} flowerbed
@param {number} n
@param {boolean}

*/

const canPlaceFlowers = function(flowerbed, n)
{
    let i = 0;
    while(i < flowerbed.length && n !== 0) /* while i is less then flowerbed length and not equal to 0 */
    {
        if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1)
        {
            n--;
            i++;
        }
        i++; /* increment i again to skip next plot in flowerbed */   
    }
    return n === 0;
}

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1));


