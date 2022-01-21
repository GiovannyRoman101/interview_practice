/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0
	let min = prices[0]
	for(let i = 1; i < prices.length; i++){
		if(prices[i] < min){
			min = prices[i]
		}else{
			profit = Math.max(profit, prices[i] - min)
		}
	}
	return profit
}

console.log(maxProfit([7,6,4,3,1]))