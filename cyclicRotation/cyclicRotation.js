function solution(A, K) {
    for(let i=0; i<K; i++) {
        let lastIndex = A.length - 1;
        let lastItem = A[lastIndex];
        for(let j=(A.length-1); j>-1; j--) {
            if(j>0) {
                A[j] = A[j-1];
            } else {
                A[j] = lastItem;
            }
        }
    }
    return A;
}