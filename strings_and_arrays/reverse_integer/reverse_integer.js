/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	if(x > (Math.pow(2,31)-1) || x < (Math.pow(-2,31))){
		return 0
	}

	let sign = 1
	if(x >= 0){
		sign = 1
	}else{
		sign *= -1
		x *= -1
	}
	let result = 0
	
	while(x !== 0){
		result *= 10
		let val = x %10
		x = Math.floor(x / 10)
		result += val
	}
	if(result * sign > (Math.pow(2,31)-1) || result * sign < (Math.pow(-2,31))){
		return 0
	}
	return result * sign
}

console.log(reverse(-123))