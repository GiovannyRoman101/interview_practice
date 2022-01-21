/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let count = 0
	let ind = 0

	while(ind < flowerbed.length){
		if(flowerbed[ind] === 0 && (ind === 0 || flowerbed[ind -1] === 0) && (ind === flowerbed.length -1 || flowerbed[ind +1] === 0)){
			count++
			flowerbed[ind] = 1
		}
		ind++
	}
	return count >= n
}

// console.log(canPlaceFlowers([1,0,0,0,1],1))
console.log(canPlaceFlowers([1,0,0,0,1],2))