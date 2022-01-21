/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	let arr1 = version1.split('.')
	let arr2 = version2.split('.')
	while(arr1.length !== 0 && arr2.length !== 0){
		let num1 = parseInt(arr1.shift())
		let num2 = parseInt(arr2.shift())
		if(num1 > num2){
			return 1
		}else if(num1 < num2){
			return -1
		}
	}
	while(arr1.length !== 0 && arr2.length === 0){
		let num1 = parseInt(arr1.shift())
		if(num1 !==0){
			return 1
		}
	}

	while(arr1.length === 0 && arr2.length !== 0){
		let num2 = parseInt(arr2.shift())
		if(num2 !==0){
			return -1
		}
	}
	return 0
}
