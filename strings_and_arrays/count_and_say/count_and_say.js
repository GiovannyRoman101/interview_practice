/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	if(n === 1){
		return '1'
	}else{
		return say(countAndSay(n-1))
	}
}
// counts the number of like terms
function say(str){
	let i = 0
	let j = 0
	let temp = ''

	while(i < str.length){
		let count = 0 
		let elem = str[j]
		while(j < str.length && str[j] === elem){
			count++
			j++
		}
		temp = temp + count + elem
		i = j
	}
	return temp
}

console.log(countAndSay(5))