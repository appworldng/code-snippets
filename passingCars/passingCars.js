function solution(A) {
    let pairs = 0;
    let totalNumberOfZeros = 0;
    let totalPairs = 0;
    for(let i=0; i<A.length; i++) {
        if(A[i] === 0) {
            totalNumberOfZeros++;
            pairs = 0;
        }
        if(A[i] === 1) {
            pairs = 1;
            totalPairs += (totalNumberOfZeros*pairs);
        }
    }
    if(totalPairs > 1000000000) {
        totalPairs = -1;
    }
    return totalPairs;
}