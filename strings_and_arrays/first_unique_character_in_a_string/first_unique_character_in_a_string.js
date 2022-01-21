/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let map = new Map()
	for(let i = 0; i < s.length; i++){
		if(!map.has(s[i])){
			map.set(s[i], 0)
		}
		let temp = map.get(s[i])
		temp++
		map.set(s[i], temp)
	}
	for(let i = 0; i < s.length; i++){
		if(map.get(s[i]) === 1){
			return i
		}
	}
	return -1
}
