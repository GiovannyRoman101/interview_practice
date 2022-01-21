/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	if(s.length !== t.length){
		return false
	}
	let map1 = new Map()
	let map2 = new Map()
	for(let i = 0; i < s.length; i++){
		if(!map1.has(t[i])){
			map1.set(t[i], s[i])
		}
		if(!map2.has(s[i])){
			map2.set(s[i], t[i])
		}

		if(map1.get(t[i]) === s[i] && map2.get(s[i]) === t[i]){
			continue
		}
		return false
	}
	return true
}

console.log(isIsomorphic('egg','add'))
console.log(isIsomorphic('foo', 'bar'))