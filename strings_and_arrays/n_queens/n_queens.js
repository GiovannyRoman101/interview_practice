/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	let result = []
	let board = []
	let row = ''
	for(let i = 0; i < n; i++){
		row += '.'
	}
	for(let i = 0; i < n; i++){
		board.push(row)
	}


	function placeQueen(board, row = 0){
		if(row === board.length){
			result.push([...board])
			return
		}else{
			for(let i = 0; i < board[row].length; i++){
				if(isValid(board, row, i)){
					board[row] = board[row].slice(0,i) +'Q'+board[row].slice(i+1)
					placeQueen(board, row+1)
					board[row] = board[row].slice(0,i)+'.'+board[row].slice(i+1)
				}
			}
		}
	}

	function isValid(board, i , j){
		for(let row = 0; row < i; row++ ){
			for(let col = 0; col < board[row].length; col++){
				if(board[row][col] === 'Q' && ( j === col || Math.abs(((j - col)/ (i- row))) === 1 )){
					return false
				}
			}
		}
		return true
	}

	placeQueen(board)

	return result
	
}

console.log(solveNQueens(4))