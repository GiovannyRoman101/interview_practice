/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
	

	function dfs(row, col, origColor, newColor){
		if(row < 0 || row >= image.length || col < 0 || col >= image[row].length){
			return
		}
		if(image[row][col] === newColor){
			return
		}
		if(image[row][col] === origColor){
			image[row][col] = newColor 
			dfs(row-1, col, origColor, newColor )
			dfs(row+1, col, origColor, newColor )
			dfs(row, col-1, origColor, newColor )
			dfs(row, col+1, origColor, newColor)
		}
	}
	dfs(sr,sc, image[sr][sc], newColor)
	return image
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,1,2))
console.log(floodFill([[0,0,0],[0,0,0]],0,0,2))
console.log(floodFill([[0,0,0],[0,1,1]],1,1,1))