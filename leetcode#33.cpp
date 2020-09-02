class Solution {
public:
    int search(vector<int>& nums, int target) {
    int n=nums.size();
    int small=nums[0];
    for(int i=0;i<n;i++){
        if(nums[i]<small){
            small=i;
            break;
        }
    }
    int start=small;
    int left=0;
    int right=n-1;
    if(target>=nums[start]&& target<=nums[right]){
        left=start;
    }
    else{
        right=start;
    }
    while(left<=right){
        int mid=left+(right-left)/2;
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
   }
        return -1;
}
};
