/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
	function area (x1,x2, y1,y2){
		return Math.abs(x2 - x1) * Math.abs(y2-y1)
	}
	let a = area(ax1,ax2,ay1,ay2)
	let b = area(bx1,bx2,by1,by2)

	function hasIntersection(){
		// b box left  < a box right
		// b box right > a box left

		// b box bottom < a box top
		// b box top > a box bottom
		return bx1 < ax2 && bx2 > ax1 && by1 < ay2 && by2 > ay1
	}

	if(hasIntersection()){
		return a+ b - area(Math.max(ax1, bx1), Math.min(ax2,bx2), Math.max(ay1,by1), Math.min(ay2,by2))
	}

	return a+b
}
console.log(computeArea(-3,0,3,4,0,-1,9,2))