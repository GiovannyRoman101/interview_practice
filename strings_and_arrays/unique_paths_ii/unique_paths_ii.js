/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let grid = []
	for(let i = 0; i < obstacleGrid.length; i++){
		if(obstacleGrid[i][0] === 1){
			grid.push([0])
		}else if( i > 0 && grid[i-1][0] === 0){
			grid.push([0])
		}else{
			grid.push([1])
		}
	}

	for(let i = 0; i < obstacleGrid[0].length; i++){
		if(obstacleGrid[0][i] === 1){
			grid[0][i] = 0
		}else if( i > 0 && grid[0][i-1] === 0){
			grid[0][i] = 0
		}else{
			grid[0][i] = 1
		}
	}
	for(let i = 1; i < obstacleGrid.length; i++){
		for(let j = 1; j < obstacleGrid[i].length; j++){
			if(obstacleGrid[i][j] === 1){
				grid[i][j] = 0
			}else {
				grid[i][j] = grid[i][j -1] + grid[i-1][j]
			}
		}
	}
	
	return grid[grid.length -1][grid[0].length-1]
}

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))