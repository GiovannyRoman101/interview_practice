/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let result = ''
	let dict = []
	dict.push([1,'I'])
	dict.push([4,'IV'])
	dict.push([5,'V'])
	dict.push([9,'IX'])
	dict.push([10,'X'])
	dict.push([40,'XL'])
	dict.push([50,'L'])
	dict.push([90,'XC'])
	dict.push([100,'C'])
	dict.push([400,'CD'])
	dict.push([500,'D'])
	dict.push([900,'CM'])
	dict.push([1000,'M'])

	while(num !== 0){
		for(let i = dict.length -1 ; i >= 0; i-- ){
			if(num >= dict[i][0]){
				result += dict[i][1]
				num -= dict[i][0]
				break
			}
		}
	}
	return result
}

console.log(intToRoman(3))
