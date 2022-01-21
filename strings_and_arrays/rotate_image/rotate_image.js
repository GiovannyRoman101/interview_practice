/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// TODO:
var rotate = function (matrix) {
    let iterLen = Math.floor(matrix.length / 2)
    for (let i = 0; i <= iterLen; i++) {
        for (let j = i; j < matrix.length - i - 1; j++) {
			let oppositeI = matrix.length - 1 - i
            let oppositeJ = matrix.length - 1 - j
			// [1]
            let tmp = matrix[i][j]
			// [1] <- [7]
            matrix[i][j] = matrix[oppositeJ][i]
			// [7] <- [9]
            matrix[oppositeJ][i] = matrix[oppositeI][oppositeJ]
            // [9] <- [3]
			matrix[oppositeI][oppositeJ] = matrix[j][oppositeI]
            // [3] <- [1]
			matrix[j][oppositeI] = tmp
        }
    }
    return matrix
}
console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
)
console.log(
    rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ])
)
