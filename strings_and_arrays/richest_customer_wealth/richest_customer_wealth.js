/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0
    for (let account of accounts) {
        let sum = 0
        for (let i = 0; i < account.length; i++) {
            sum += account[i]
        }
        max = Math.max(sum, max)
    }
    return max
}

console.log(maximumWealth([[1,2,3],[3,2,1]]))