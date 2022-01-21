/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s3.length !== s1.length + s2.length) {
        return false
    }
    let dp = new Array(s1.length + 1).fill(new Array(s2.length + 1).fill(false))


	// think of path from top left to bottom right
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
			// first row and column is checking blank character
            if (i === 0 && j === 0) {
                dp[i][j] = true
            } else if (i === 0) {
				//checks if second string matches letter in s3 and previous character already matched
                dp[i][j] =
                    dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1)
            } else if (j === 0) {
				//checks if first string matches letter in s3 and previous character already matched
                dp[i][j] =
                    dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(i + j - 1)
            } else {
				// checks if s1 or s2 character matches s3
                dp[i][j] =
                    (dp[i][j - 1] &&
                        s2.charAt(j - 1) === s3.charAt(i + j - 1)) ||
                    (dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(i + j - 1))
            }
        }
    }

    return dp[s1.length][s2.length]
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
console.log(isInterleave('', '', ''))
