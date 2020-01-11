function solution(N) {
    let numberOfFactors = 0;
    let bool = true;
    if(N === 1) return 1;
    function isPrime(num) {
        if (num <= 1) {
          return true
        } else if (num <= 3) {
          return true
        } else if (num%2 === 0 || num%3 === 0) {
          return false
        }
        let i = 5
        while (i*i <= num) {
          if (num%i === 0 || num%(i+2) === 0) {
            return false
          }
          i += 6
        }
        return true
    }
    if(isPrime(N)) return 2;
    let A = N;
    for(let i=1; i<A; i++) {
        if(!(N%i)) {
            if((N/i) != i) {
                numberOfFactors += 2;
            } else {
                numberOfFactors += 1;
            }
            A = N/i;
        }
    }
    return numberOfFactors;
}