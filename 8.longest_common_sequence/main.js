/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let count = 0;
    let lastSmall = Number.MIN_SAFE_INTEGER;
    let longestSeq = 1;

    nums.sort((a, b) => a - b);
    for(let i=0; i<nums.length; i++){
        if(lastSmall+1 !== nums[i] && lastSmall !== nums[i]){
            count = 1;
            lastSmall = nums[i];
        }
        if(lastSmall+1 === nums[i]){
            count++;
            lastSmall = nums[i];
        }
        longestSeq = Math.max(longestSeq, count);
    }
    return longestSeq;
};