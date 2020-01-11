function solution(N) {
    let numberOfFactors = 0;
    if(N%2) {
        if(N%3) {
            return 2;
        }
    }
    let A = N;
    for(let i=1; i<A; i++) {
        if(!(N%i)) {
            numberOfFactors += 2;
            A = N/i;
        }
    }
    return numberOfFactors;
}