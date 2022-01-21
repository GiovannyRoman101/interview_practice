// problem 79. Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	if(word === null || word.length === 0){
		return true
	}
	if(board === null || board.length === 0 || board[0].length === 0){
		return false
	}

	function search(board,x,y,currWord ){
		if(currWord.length === 0){
			return true
		}
		if((x < 0 || x >= board.length) || (y < 0 || y >= board[x].length)){
			return false
		}else{
			let flag = false
			if(board[x][y] === currWord[0]){
				let temp = board[x][y]
				board[x][y] = '-'
				flag = search(board,x-1,y,currWord.slice(1)) || search(board,x+1,y,currWord.slice(1)) ||
				search(board,x,y-1,currWord.slice(1)) || search(board,x,y+1,currWord.slice(1)) || flag
				board[x][y] = temp
			}
			return flag
		}
	}
	let result = false
	for(let i = 0; i < board.length ; i++){
		for(let j = 0; j < board[i].length;j++ ){
			if(board[i][j] === word[0]){
				result = search(board, i,j,word) || result
			}
		}
	}
	return result
}
