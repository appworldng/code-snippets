function solution(N) {
    let factorial = N;
    if(N) { factorial = N; } else { factorial = 1; }
    while(N > 1) {
        factorial *= (N-1);
        N--;
    }
    return factorial;
}
