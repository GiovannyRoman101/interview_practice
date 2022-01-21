/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {

	if(grid.length === 0 || grid[0].length === 0){
		return 0
	}

	let robot_1_pos = 0
	let robot_2_pos = grid[0].length-1

	let total_cherry = 0
	if(robot_1_pos !== robot_2_pos){
		total_cherry += grid[0][robot_1_pos] + grid[0][robot_2_pos] 
	}else{
		total_cherry += grid[0][robot_1_pos]
	}

	for(let i= 1; i < grid.length; i++){
		

	}

}
