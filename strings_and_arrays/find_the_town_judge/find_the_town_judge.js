/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1 && trust.length === 0) {
        return 1
    }
    let map = new Map()
    let counter = new Array(n + 1).fill(0)

    for (let i = 0; i < trust.length; i++) {
        let temp = trust[i]
        if (!map.has(temp[1])) {
            map.set(temp[1], new Set())
        }
        counter[temp[0]]++
        let trusted = map.get(temp[1])
        trusted.add(temp[0])
    }

    for (let i = 1; i <= n; i++) {
        if (map.has(i)) {
            let temp = map.get(i)
            if (temp.size === n - 1 && counter[i] === 0) {
                return i
            }
        }
    }
    return -1
}

console.log(findJudge(2, [[1, 2]]))

console.log(
    findJudge(3, [
        [1, 2],
        [2, 3],
    ])
)

console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
    ])
)
