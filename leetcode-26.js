var removeDuplicates = function(nums) {
    var i = 0 ;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=nums[i]){
            i++;
            nums[i]=nums[j];
        }
            }
    return i+1;
};
