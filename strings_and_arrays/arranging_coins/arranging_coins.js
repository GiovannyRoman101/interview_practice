/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let count = 0
    let level = 0
	
    for (let i = 1; count < n; i++) {
        count += i
        level = i
    }
    if (count > n) {
        return level - 1
    }
    return level
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
