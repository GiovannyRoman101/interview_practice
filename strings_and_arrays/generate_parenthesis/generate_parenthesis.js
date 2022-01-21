/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    function backtracking( num_parenthesis, left_num = 0, right_num = 0, curr_str = '') {
        if (num_parenthesis === left_num && num_parenthesis === right_num) {
            result.push(curr_str)
        } else {
            if (left_num < num_parenthesis) {
                backtracking(
                    num_parenthesis,
                    left_num + 1,
                    right_num,
                    curr_str + '('
                )
            }
            if (right_num < left_num) {
                backtracking(
                    num_parenthesis,
                    left_num,
                    right_num + 1,
                    curr_str + ')'
                )
            }
        }
    }
    backtracking(n)
    return result
}

console.log(generateParenthesis(3))
