/**
 * @param {number[]} nums
 * @return {boolean}
 */
// time complex is o(n^2)
var canJump = function (nums) {
    let memo = []
    memo[nums.length - 1] = true
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            continue
        }

        for (let j = i; j < nums.length && j <= i + nums[i]; j++) {
            if (memo[j] === true) {
                memo[i] = true
                break
            } else {
                memo[j] = false
            }
        }
    }
    return memo[0]
}

var canJump1 = function(nums) {
    let canReach = 0;
    for(let i=0; i< nums.length; i++){
        if(canReach < i)return false;
        
        canReach = Math.max(canReach, i + nums[i]);
        if(canReach >= nums.length-1)return true;
    }
}


console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump1([3, 2, 1, 0, 4]))
