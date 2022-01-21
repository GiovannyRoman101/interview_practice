/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let memo = new Array(amount +1).fill(Infinity)
	memo[0] = 0
	for(let i = 1 ; i <= amount;i++){
		for(let j = 0; j < coins.length; j++){
			if(i >= coins[j]){
				memo[i] = Math.min(memo[i], memo[i - coins[j]]+1)
			}
		}
	}
	return memo[amount] === Infinity ? -1 : memo[amount]
}

console.log(coinChange([1,2,5],11))