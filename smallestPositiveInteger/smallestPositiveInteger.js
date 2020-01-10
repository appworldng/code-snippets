function solution(A) {
    A.sort(function(a,b){return a-b});
    let smallestPositiveInteger = A[0];
    let maximum = Math.max(...A);
    if(maximum < 0) {
        smallestPositiveInteger = 1;
    } else {
        for(let i=1; i<A.length; i++) {
            if((A[i] - smallestPositiveInteger) > 1) {
                return smallestPositiveInteger + 1;
            }
            smallestPositiveInteger = A[i];
        }
        return smallestPositiveInteger + 1;
    }
    return smallestPositiveInteger;
}
