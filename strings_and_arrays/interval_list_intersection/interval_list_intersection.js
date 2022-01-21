/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let result = []
    if (firstList.length === 0 || secondList.length === 0) {
        return result
    }

    while (firstList.length !== 0 && secondList.length !== 0) {
        let interval1 = firstList.shift()
        let interval2 = secondList.shift()
        if (interval1[0] <= interval2[0] && interval2[0] <= interval1[1]) {
            let temp = [interval2[0], Math.min(interval1[1], interval2[1])]
            result.push(temp)
        } else if ( interval2[0] <= interval1[0] && interval1[0] <= interval2[1]) {
            let temp = [interval1[0], Math.min(interval1[1], interval2[1])]
            result.push(temp)
        }

		if(interval1[1] > interval2[1]){
			firstList.unshift(interval1)
		}else{
			secondList.unshift(interval2)
		}
    }

    return result
}


// var intervalIntersection = function (firstList, secondList) {
//     let result = []
//     let ptr1 = 0
// 	let ptr2 = 0

// 	while(ptr1 < firstList.length && ptr2 < secondList.length){
// 		let num1 = firstList[ptr1]
// 		let num2 = secondList[ptr2]

// 		if(num1[0] <= num2[1] && num2[0] <= num1[1]){
// 			result.push([Math.max(num1[0], num2[0]), Math.min(num1[1], num2[1])])
// 		}

// 		if(num1[1] > num2[1] ){
// 			ptr2++
// 		}else{
// 			ptr1++
// 		}
// 	}
//     return result
// }

console.log(
    intervalIntersection(
        [
            [0, 2],
            [5, 10],
            [13, 23],
            [24, 25],
        ],
        [
            [1, 5],
            [8, 12],
            [15, 24],
            [25, 26],
        ]
    )
)
console.log(
    intervalIntersection(
        [[8, 15]],
        [
            [2, 6],
            [8, 10],
            [12, 20],
        ]
    )
)
