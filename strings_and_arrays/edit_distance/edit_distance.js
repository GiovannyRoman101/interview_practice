/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	if(word1 === word2 ){
		return 0
	}else if(word1 !== null && word2 === null){
		return word1.length
	}else if(word1 === null && word2 !== null){
		return word2.length
	}
	let dp = []
	// insert values since word2 is empty
	for(let i = 0; i <= word1.length; i++){
		dp.push([i])
	}
	// insert values since word1 is empty
	for(let i = 0; i <= word2.length; i++){
		dp[0][i] = i
	}

	for(let i = 1; i <= word1.length; i++){
		for(let j = 1; j <= word2.length; j++){
			if(word1[i-1] === word2[j-1]){
				// get the min value if letters are the same
				dp[i][j] = dp[i-1][j-1]
			}else{
				// operations in order replace, remove, insert
				dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) 
			}
		}
	}
	return dp[dp.length-1][dp[0].length-1]
}

console.log(minDistance('horse', 'ros'))
