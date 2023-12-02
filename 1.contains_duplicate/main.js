/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();

    for(let i=0; i<nums.length; i++){
        const n = nums[i];
        if(map.has(n)) return true;
        map.set(n, 1);
    }
    return false;
};