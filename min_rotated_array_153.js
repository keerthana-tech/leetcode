var findMin = function(nums) {
    var mid,start,end;
    start=0;
    end=nums.length-1;
    while(start<end){
        mid=Math.floor(start+(end-start)/2);
        if(nums[mid]>nums[end])
            start=mid+1;
        else
            end=mid;
    }
    return nums[start];
    
};
