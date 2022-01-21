/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	if(digits.length === 0){
		return digits
	}
	let carry = 1
	for(let i = digits.length -1; i >= 0; i--){
		let sum = digits[i] + carry
		if(sum >9){
			carry = Math.floor(sum / 10)
			digits[i] = Math.floor(sum % 10)
		}else{
			digits[i] = sum
			carry = 0
			break
		}
	}
	if(carry !== 0 ){
		digits.unshift(carry)
	}
	return digits
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([0]))
console.log(plusOne([9,9]))