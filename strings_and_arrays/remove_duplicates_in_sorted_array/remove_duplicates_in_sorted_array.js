var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if( i > 0 && nums[i] === nums[i-1]){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};

console.log(removeDuplicates([1,1,2]))