/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let map = new Map()
	let num = n
	while(num !== 1){
		if(map.has(num)){
			return false
		}
		map.set(num, true)
		let sum = 0
		while(num !== 0){
			sum += (num %10) **2
			num = Math.floor(num / 10)
		}
		num = sum
	}
	return true
}

console.log(isHappy(19))