class Solution {
    public int[] productExceptSelf(int[] nums) {
        int totalProduct = 1;
        int numZero = 0;
        for(int i=0; i<nums.length; i++) {
            if(nums[i]==0){
                numZero++;
            }
            else{
                totalProduct = totalProduct*nums[i];
            }
        }
        int ans[]  = new int[nums.length];
        for(int i=0; i<nums.length; i++) {
            if(numZero==1){
                if(nums[i]==0){
                    ans[i]=totalProduct;
                }
                else{
                    ans[i]=0;
                }
            }
            if(numZero==0){
                ans[i] = totalProduct/nums[i];
            }
        }
        return ans;
    }
}
