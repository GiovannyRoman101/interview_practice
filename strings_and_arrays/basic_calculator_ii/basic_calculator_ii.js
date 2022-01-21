/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let result = 0
	let stack = []

	for(let  i = 0 ; i < s.length ; i++){
		if(s[i] === ' '){
			continue
		}else if( s[i] === '/' || s[i] === '+' || s[i] === '-' || s[i] === '*'){
			let temp = stack.pop()
		}else{

		}
	}s

	return str
}
console.log(calculate(" 3/2 "))