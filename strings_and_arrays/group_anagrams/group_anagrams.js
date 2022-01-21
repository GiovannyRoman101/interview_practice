/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let map = new Map()
	for(let str of strs){
		let val = str
		let key = str.split('').sort().join('')
		if(!map.has(key)){
			map.set(key, [])
		}
		let arr = map.get(key)
		arr.push(val)
		map.set(key, arr)
	}
	let result =[]
	for(let value of map.values()){
		result.push(value)
	}
	return result
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))