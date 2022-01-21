/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let map = new Map()
	map.set('I', 1)
	map.set('IV', 4)
	map.set('V', 5)
	map.set('IX', 9)
	map.set('X', 10)
	map.set('XL', 40)
	map.set('L', 50)
	map.set('XC', 90)
	map.set('C', 100)
	map.set('CD', 400)
	map.set('D', 500)
	map.set('CM', 900)
	map.set('M', 1000)
	let result = 0
	for(let i = 0; i < s.length; i++){
		if(i < s.length-1){
			if(map.has(s[i]+s[i+1])){
				result += map.get(s[i]+s[i+1])
				i++
			}else{
				if(map.has(s[i])){
					result+= map.get(s[i])
				}
			}
		}else{
			if(map.has(s[i])){
				result+= map.get(s[i])
			}
		}
	}
	return result
}
