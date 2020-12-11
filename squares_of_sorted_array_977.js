var sortedSquares = function(nums) {
    let i=0;
    let num;
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]*nums[i];
        
        
    }
    nums=nums.sort((a,b) => {
          return a-b // sort by ascending order
      })
    return nums;
    
};
