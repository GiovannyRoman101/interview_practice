/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function (s) {
	let result = []
	if(s === null || s.length < 10){
		return result
	}
	let map = new Map()
	for(let i = 0; i <= (s.length -10);i++){
		let seq = s.slice(0+i, 10+i)
		if(map.has(seq)){
			let temp = map.get(seq)
			temp++
			if(temp === 2){
				result.push(seq)
			}
			map.set(seq, temp)
		}else{
			map.set(seq, 1)
		}
	}
	return result
}

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))