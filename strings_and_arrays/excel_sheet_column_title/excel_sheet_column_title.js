/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	let str = ''
	while(columnNumber !== 0){
		let letter = Math.floor(columnNumber %26)
		if(letter === 0){
			letter = 26
		}
		columnNumber = Math.floor((columnNumber - letter) /26)
		str = String.fromCharCode(letter + 64) + str
	}
	return str
}
console.log(convertToTitle(28))