/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function (n) {
// 	if(n <=1){
// 		return 0
// 	}
// 	let table = []
// 	let result = 0
// 	for(let i = 0; i < n; i++){
// 		if(i <= 1){
// 			table[i] = false
// 		}else if(table[i] === false){
// 			continue
// 		}else{
// 			for(let j = 1;j < n; j++){
// 				if( i*j === i && table[i*j] !== false){
// 					result ++
// 					table[i*j] = true
// 				}else if(i*j >= n){
// 					break
// 				}else{
// 					table[i*j] = false
// 				}
// 			}
// 		}
// 	}
// 	return result
// }

function countPrimes(n){
	if(n <= 1){
		return 0
	}
	let arr = []
	let result = 0
	for(let i = 2; i < n; i++){
		if(arr[i]){
			continue
		}
		result++
		for(let a  =i**2; a < n; a = a+i){
			arr[a] = 1
		}
	}
	return result
}

console.log(countPrimes(100))