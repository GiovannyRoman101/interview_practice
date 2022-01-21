/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

	function backtracking(x,y){
		if(x <0 || y < 0 || x >= board.length || y >= board[x].length || board[x][y] !== 'O' ){
			return
		}
		board[x][y] = ''
		backtracking(x+1, y)
		backtracking(x-1, y)
		backtracking(x, y+1)
		backtracking(x, y-1)
	}

	// check left side and right side
	// mark them as blank if it has O
	for(let i = 0; i < board.length; i++){
		if(board[i][0] === 'O'){
			backtracking(i,0)
		}
		if(board[i][board[i].length-1] === 'O'){
			backtracking(i,board[i].length-1)
		}
	}

	// check top side and bottom side
	// mark them as blank if it has O
	for(let i = 0; i < board[0].length; i++){
		if(board[0][i] === 'O'){
			backtracking(0,i)
		}

		if(board[board.length-1][i] === 'O'){
			backtracking(board.length-1,i)
		}
	}


	// convert O to X and blanks to O

	for(let i = 0; i < board.length; i++){
		for(let j = 0; j < board[i].length;j++ ){
			if(board[i][j] === 'O'){
				board[i][j] = 'X'
			}
			if(board[i][j] === ''){
				board[i][j] = 'O'
			}
		}
	}
}

// let board = [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
// ]
let board1 = [["X","O","X"],["O","X","O"],["X","O","X"]]
// solve(board)
solve(board1)
console.log(board1)


