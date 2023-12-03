class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;

        int count = 0;
        int lastSmall = Integer.MIN_VALUE;
        int longestSeq = 1;

        Arrays.sort(nums);
        for(int i=0; i<nums.length; i++){
            if(lastSmall+1 != nums[i] && lastSmall != nums[i]){
                count=1;
                lastSmall = nums[i];
            }
            if(lastSmall+1 == nums[i]){
                count++;
                lastSmall = nums[i];
            }
            longestSeq = Math.max(longestSeq, count);
        }
        return longestSeq;
    }
}