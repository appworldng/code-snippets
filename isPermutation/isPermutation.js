function solution(A) {
    A.sort(function(a, b){return a-b});
    let bool = 1;
    if(A[0] === 1) {
        for(let i=0; i<A.length; i++) {
            if((i+1) < A.length) {
                if(A[i] != A[i+1] - 1) {
                    bool = 0;
                }
            }
        }
    } else {
        bool = 0;
    }
    return bool;
}