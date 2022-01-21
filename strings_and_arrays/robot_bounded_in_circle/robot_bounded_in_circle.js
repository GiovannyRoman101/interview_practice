/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let position = [0, 0]
    let direction = 'North'

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < instructions.length; j++) {
            direction = changeDirection(direction, instructions[j])
            if (instructions[j] === 'G') {
                if (direction === 'North') {
                    position[1]++
                } else if (direction === 'South') {
                    position[1]--
                } else if (direction === 'West') {
                    position[0]++
                } else {
                    position[0]--
                }
            }
        }
    }

    function changeDirection(direct, command) {
        let map = new Map()
        map.set('North', { Left: 'West', Right: 'East' })
        map.set('West', { Left: 'South', Right: 'North' })
        map.set('South', { Left: 'East', Right: 'West' })
        map.set('East', { Left: 'North', Right: 'South' })

        let poss = map.get(direct)
        if (command === 'L') {
            return poss.Left
        } else if (command === 'R') {
            return poss.Right
        } else {
            return direct
        }
    }

    if (position[0] === 0 && position[1] === 0) {
        return true
    }
    return false
}

console.log(isRobotBounded('GG'))
