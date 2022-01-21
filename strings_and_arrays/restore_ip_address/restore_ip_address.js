/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let result = []

	function backtracking(remaining,curArray = [], index = 0 ){
		if(remaining.length === 0 && index === 4 ){
			if(curArray.length === 4){
				result.push( curArray.join('.'))
			}
		}else{
			for(let i = 1; i <= 3; i++){
				if(remaining.length < i){
					break
				}
				if(i > 1 && remaining[0] == '0'){
					break
				}
				let num = parseInt(remaining.slice(0,i))
				if(0 <= num  && num <= 255){
					curArray.push(num)
					backtracking(remaining.slice(i) , curArray, index +1)
					curArray.pop()
				}
			}
		}
	}
	backtracking(s)
	return result
}

console.log(restoreIpAddresses('1111'))
console.log(restoreIpAddresses('010010'))
