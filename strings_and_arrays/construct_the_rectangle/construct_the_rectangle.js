/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
	let length = 0
	let width = 0
	for(let i = 1; i <= Math.sqrt(area); i++ ){
		if(area % i  === 0){
			let temp = area / i
			if(length === 0 && width === 0){
				length = i
				width = temp
			}else if(Math.abs( i - temp) < Math.abs(length- width)){
				length = i
				width = temp
			}
		}
	}
	return [width, length]
}

console.log(constructRectangle(122122))