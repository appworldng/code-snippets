function solution(A, K) {
    //Get length of Array
    let length = A.length;
    let newPosition = 0;
    let B = []; let C = [];
    for(let i=0; i<A.length; i++) {
        if((i + K) > (length - 1)) {
            newPosition = (i + K) - length;
        } else {
            newPosition = i + K;
        }
        C[newPosition] = A[i];
    }
    return C;
}
