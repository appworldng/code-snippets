function solution(N) {
    let x = Math.abs(N[0]);
    let y = Math.abs(N[1]);
    let numberOfMoves = 0;
    function factorial(N) {
        let factorial = N;
        if(N) { factorial = N; } else { factorial = 1; }
        while(N > 1) {
            factorial *= (N-1);
            N--;
        }
        return factorial;
    }
    numberOfMoves = factorial(x + y)/(factorial(x) * factorial(y));
    return numberOfMoves;
}