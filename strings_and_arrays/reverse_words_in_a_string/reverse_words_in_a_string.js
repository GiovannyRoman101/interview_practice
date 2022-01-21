/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let arr = s.split(' ').filter(word =>{ return word !== ''})
	let str = ''
	for(let i = arr.length -1; i >= 0; i--){
		if(i === 0){
			str += arr[i]
		}else{
			str += arr[i] + ' '
		}
	}
	return str
	
}

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))