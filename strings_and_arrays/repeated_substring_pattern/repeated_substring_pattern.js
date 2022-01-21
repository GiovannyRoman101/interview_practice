/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	if(s === null ||s.length === 0){
		return true
	}
	let conbinations = []
	for(let i = 1; i <= Math.floor(s.length/2); i++){
		conbinations.push(s.slice(0,i))
	}

	for(let i = 0; i < conbinations.length; i++){
		let index = 0
		while(index < s.length){
			let word = conbinations[i]
			if(word === s.slice(index,index+ word.length)){
				index += word.length
			}else{
				break
			}
		}
		if(index === s.length){
			return true
		}
	}
	return false
}


console.log(repeatedSubstringPattern('abab'))

console.log(repeatedSubstringPattern('aba'))