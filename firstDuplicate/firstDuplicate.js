function solution(N) {
    let O = [];
    for(let i=0; i<N.length; i++) {
        if(O.indexOf(N[i]) < 0) {
            O.push(N[i]);
        } else {
            return N[i];
        }
    }
}

a = [2, 1, 3, 5, 3, 2];
console.log(solution(a));