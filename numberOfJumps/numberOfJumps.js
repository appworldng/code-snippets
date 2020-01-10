function solution(X, Y, D) {
    let distance = Y - X;
    let numberOfJumps = Math.ceil(distance/D);
    return numberOfJumps;
}
