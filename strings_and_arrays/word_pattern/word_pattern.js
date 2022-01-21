/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = new Map()
    let arr_pattern = pattern.split('')
    let arr_word = s.split(' ')

    if (arr_pattern.length !== arr_word.length) {
        return false
    }

    for (let i = 0; i < arr_pattern.length; i++) {
        if (map.has(arr_pattern[i])) {
            if (map.get(arr_pattern[i]) !== arr_word[i]) {
                return false
            }
        } else {
            for (let value of map.values()) {
                if (value === arr_word[i]) {
                    return false
                }
            }
            map.set(arr_pattern[i], arr_word[i])
        }
    }
    return true
}
console.log(wordPattern('aaaa', 'dog cat cat dog'))
