/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let islands = 0
    if (grid === null || grid.length === 0) {
        return islands
    }

    function dfs(board, x, y) {
        if (x < 0 || y < 0 || x >= board.length || y >= board[x].length) {
            return
        } else {
            if (board[x][y] === '1') {
                board[x][y] = '0'
                dfs(board, x - 1, y)
                dfs(board, x + 1, y)
                dfs(board, x, y + 1)
                dfs(board, x, y - 1)
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islands++
                dfs(grid, i, j)
            }
        }
    }
    return islands
}
console.log(
    numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ])
)
