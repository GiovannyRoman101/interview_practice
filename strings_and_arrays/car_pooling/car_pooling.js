/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    trips.sort((a, b) => {
        return a[1] - b[1]
    })
    let riders = 0

    let queue_riders = []
    for (let i = 0; i < trips.length; i++) {
        if (queue_riders.length === 0) {
            if (trips[i][0] > capacity) {
                return false
            }
            queue_riders.push(trips[i])
            riders += trips[i][0]
        } else {
            for (let j = 0; j < queue_riders.length; j++) {
                if (queue_riders[j][2] <= trips[i][1]) {
                    riders -= queue_riders[j][0]
                    queue_riders.splice(j, 1)
                    j--
                }
            }

            if (riders + trips[i][0] > capacity) {
                return false
            }
            queue_riders.push(trips[i])
            riders += trips[i][0]
        }
    }
    return true
}

console.log(
    carPooling(
        [
            [2, 1, 5],
            [3, 3, 7],
        ],
        4
    )
)
console.log(
    carPooling(
        [
            [2, 1, 5],
            [3, 3, 7],
        ],
        5
    )
)
