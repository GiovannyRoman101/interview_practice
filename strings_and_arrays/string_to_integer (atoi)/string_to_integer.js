/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let stack = []
    let isPositive = true
    let hasSign = false
    let min = Math.pow(-2, 31)
    let max = Math.pow(2, 31) - 1
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            if (stack.length === 0 && s.charCodeAt(i) === 48) {
                continue
            }
            stack.push(s[i])
        } else if (s.charCodeAt(i) === 32) {
            continue
        } else if (s.charCodeAt(i) === 45 || s.charCodeAt(i) === 43) {
            if (hasSign) {
                return 0
            } else {
                hasSign = true
                if (s.charCodeAt(i) === 45) {
                    isPositive = false
                }
            }
        } else {
            break
        }
    }
    if (stack.length === 0) {
        return 0
    }
    let num = parseInt(stack.join(''))
    if (!isPositive) {
        num *= -1
    }
    if (num > max) {
        return max
    } else if (num < min) {
        return min
    }
    return num
}

var myAtoi = function(str) {
	const integer = parseInt(str) || 0;

	if (integer > 2 ** 31 - 1) return 2147483647;
	if (integer < -(2 ** 31)) return -2147483648;
	return integer;
}

console.log(myAtoi('42'))
console.log(myAtoi('    -42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('00000-42a1234'))
console.log(myAtoi('3.14'))
