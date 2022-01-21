// problem 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = []

	for(let i = 0; i < s.length; i++){
		if(s[i] === '(' || s[i] === '{' || s[i] === '['){
			stack.push(s[i])
		}else{
			let prev = stack.pop()
			if( (prev === '(' && s[i] === ')') || (prev === '[' && s[i] === ']') || (prev === '{' && s[i] === '}') ){
				continue
			}else{
				return false
			}
		}
	}
	if(stack.length === 0){
		return true
	}
	return false
}
