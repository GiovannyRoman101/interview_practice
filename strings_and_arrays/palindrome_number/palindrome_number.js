/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if(x < 0){
		return false
	}
	let arr = []
	while(x > 0){
		let num = x % 10
		arr.push(num)
		x = Math.floor(x / 10)
	}
	for(let i = 0; i < arr.length; i++){
		if(arr[i] !== arr[arr.length-1 -i]){
			return false
		}
	}
	return true
}

console.log(isPalindrome(1011))