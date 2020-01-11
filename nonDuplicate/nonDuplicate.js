function solution(A) {
    let B = [];
    let sumA = 0;
    let sumB = 0;
    for(let i=0; i<A.length; i++) {
        if(B.indexOf(A[i]) < 0) {
            B.push(A[i]);
        }
        sumA += A[i];
    }
    for(let j=0; j<B.length; j++) { 
        sumB += B[j];
    }
    return ((sumA+sumB)-3*(sumA-sumB))/2;
}