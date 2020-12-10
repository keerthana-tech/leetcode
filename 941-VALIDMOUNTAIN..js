var validMountainArray = function(A) {
    let N = A.length;
    let i = 0;

        // walk up
        while (i+1 < N && A[i] < A[i+1])
            i++;

        // peak can't be first or last
        if (i == 0 || i == N-1)
            return false;

        // walk down
        while (i+1 < N && A[i] > A[i+1])
            i++;

         if (i == N-1)
             return true;
         else 
             return false;
    
    
        

};
