/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	// create board
	let row = ''
	let board = []
	for(let i = 0; i < n; i++){
		row += '.'
	}
	for(let i = 0; i < n; i ++){
		board.push(row)
	}

	let count = 0
	function placeQueen(board, row = 0){
		if(board.length === row){
			count++
			return
		}else{
			for(let i = 0; i < board[row].length; i++){
				if(isValid(row,i,board)){
					board[row]= board[row].slice(0,i) + 'Q' + board[row].slice(i+1)
					placeQueen(board, row+1)
					board[row]= board[row].slice(0,i) + '.' + board[row].slice(i+1)
				}
			}
		}
	}

	function isValid(row,col,board){
		for(let i = 0; i < row; i++){
			for(let j = 0; j < board[i].length;j++){
				let val = board[i][j]
				let slope = Math.abs((i - row)/(j-col))
				if(val === 'Q' && (j === col || slope === 1)){
					return false
				}
			}
		}
		return true
	}

	placeQueen(board)
	return count
}



console.log(totalNQueens(3))