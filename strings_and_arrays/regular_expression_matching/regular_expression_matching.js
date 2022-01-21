/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    function backtracking(curStr, pattern) {
        if (curStr.length === 0 && pattern.length === 0) {
            return true
        }
        // check if any character
        if (pattern[0] === '.') {
            // can be any character
            if (pattern[1] === '*') {
                let flag = backtracking(curStr, pattern.slice(2))
                let index = 0
                while (index <= curStr.length) {
                    flag =
                        flag ||
                        backtracking(curStr.slice(index + 1), pattern.slice(2))
                    index++
                }
                return flag
            } else {
                // check if there is no string but still needs a character
                if (curStr.length === 0) {
                    return false
                }
                return backtracking(curStr.slice(1), pattern.slice(1))
            }
        } else if (pattern[1] === '*') {
            let flag = backtracking(curStr, pattern.slice(2))
            let index = 0
            while (index < curStr.length && curStr[index] === pattern[0]) {
                flag =
                    flag ||
                    backtracking(curStr.slice(index + 1), pattern.slice(2))
                index++
            }
            return flag
        } else if (curStr[0] === pattern[0]) {
            return backtracking(curStr.slice(1), pattern.slice(1))
        } else {
            return false
        }
    }
    return backtracking(s, p)
}

var isMatchDP = function (s, p) {
    const dp = Array.from({ length: s.length + 1 }, () => [false])
    dp[0][0] = true

    // fill first row
    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') dp[0][i] = dp[0][i - 2]
        else dp[0][i] = false
    }

    for (let r = 1; r <= s.length; r++) {
        for (let c = 1; c <= p.length; c++) {
            if (p[c - 1] === '*') {
                if (p[c - 2] === s[r - 1] || p[c - 2] === '.') {
                    dp[r][c] = dp[r][c - 2] || dp[r - 1][c]
                } else dp[r][c] = dp[r][c - 2]
            } else if (p[c - 1] === s[r - 1] || p[c - 1] === '.') {
                dp[r][c] = dp[r - 1][c - 1]
            } else dp[r][c] = false
        }
    }
    return dp[s.length][p.length]
}

// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('ab', '.*'))
// console.log(isMatch('ab', '*'))
// console.log(isMatch('ab', 'c*a*b'))
// console.log(isMatch('mississippi','mis*is*ip*.'))
// console.log(isMatch('a','.*..a*'))

console.log(isMatchDP('aa', 'a'))
console.log(isMatchDP('aa', 'a*'))
console.log(isMatchDP('ab', '.*'))
console.log(isMatchDP('ab', '*'))
console.log(isMatchDP('ab', 'c*a*b'))
console.log(isMatchDP('mississippi', 'mis*is*ip*.'))
console.log(isMatchDP('a', '.*..a*'))
