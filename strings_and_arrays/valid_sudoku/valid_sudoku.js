/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(isInRow(board, i,j) || IsInCol(board, i,j) || isInBox(board,i,j) ){
				return false
			}
        }
    }
    return true
}

function isInRow(board, row , col){
	let number = board[row][col]
    if (number === '.') {
        return false
    }
	for (let i = 0; i < board.length; i++) {
        if (row === i) {
            continue
        }
        if (board[i][col] === number) {
            return true
        }
    }
	return false
}

function IsInCol(board, row,col){
	let number = board[row][col]
    if (number === '.') {
        return false
    }
	for (let i = 0; i < board.length; i++) {
        if (col === i) {
            continue
        }
        if (board[row][i] === number) {
            return true
        }
    }
	return false
}

function isInBox(board, row, col){
	let number = board[row][col]
    if (number === '.') {
        return false
    }
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			let calc_row = Math.floor((row / 3 )) * 3 + i
			let calc_col = Math.floor((col / 3)) *3 + j
			if( calc_col === col && calc_row === row){
				continue
			}
			if(board[calc_row][calc_col] === number){
				return true
			}
		}
	}

	return false
}

console.log(
    isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ])
)

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))