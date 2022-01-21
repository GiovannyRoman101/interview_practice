/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	let map = new Map()
	for(let i = 0; i < s.length; i++){
		if(!map.has(s[i])){
			map.set(s[i], 0)
		}
		map.set(s[i], 1+ map.get(s[i]))
	}
	let result = ''
	let sorted = new Map([...map.entries()].sort((a,b)=>{return b[1] - a[1]}))
	for(let key of sorted.keys()){
		for(let i = 0; i < sorted.get(key); i++){
			result += key
		}
	}
	return result
}

console.log(frequencySort('tree'))
