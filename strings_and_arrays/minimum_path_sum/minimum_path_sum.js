/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	if(grid.length === 0 || grid[0].length === 0){
		return 0
	}

	for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < grid[i].length; j++){
			if(i === 0 && j === 0){
				continue
			}else if(i === 0 && j !== 0){
				grid[i][j] += grid[i][j-1]
			}else if(i !==0 && j === 0){
				grid[i][j] += grid[i-1][j]
			}else{
				grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j])
			}
		}
	}

	return grid[grid.length-1][ grid[0].length -1]
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))