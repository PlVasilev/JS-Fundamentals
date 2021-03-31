function solve3([nums]) {
    nums = nums.split(' ').map(n => Number(n));
    if(nums[0] + nums[1] === nums[2]){
        console.log(`${Math.min(nums[0], nums[1])} + ${Math.max(nums[0], nums[1])} = ${nums[2]}`)      // `` = $ in C#
    }else if(nums[1] + nums[2] === nums[0]){
        console.log(`${Math.min(nums[1], nums[2])} + ${Math.max(nums[1], nums[2])} = ${nums[0]}`)
    }else if(nums[0] + nums[2] === nums[1]){
        console.log(`${Math.min(nums[0], nums[2])} + ${Math.max(nums[0], nums[2])} = ${nums[1]}`)
    }else {
        console.log('No')
    }
}
solve3(['0 0 0'])
solve3(['8 15 7'])