/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let arr = []
    let counter = 0
    let direction = false
    for (let i = 0; i < s.length; i++) {
        if (counter === 0 || counter === numRows-1) {
            direction = !direction
        }
        if (arr[counter] === undefined) {
            arr[counter] = s[i]
        } else {
            arr[counter] = arr[counter] + s[i]
        }

        if (direction) {
            counter++
        } else {
            counter--
        }
    }
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }

    return result
}

console.log(convert('PAYPALISHIRING', 3))
