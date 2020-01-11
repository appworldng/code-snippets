function solution(A) {
    let B = []; let firstOccurence = Number.MAX_VALUE;
    for(let i=0; i<A.length; i++) {
        if(B.indexOf(A[i]) < 0) {
            B.push(A[i]);
        } else {
            if(A.indexOf(A[i]) < firstOccurence) {
                firstOccurence = A.indexOf(A[i]);
            }
        }
    }
    return A[firstOccurence]? A[firstOccurence] : 0;
}

console.log(solution([10, 5, 3, 4, 3, 5, 6]));
console.log(solution([6, 10, 5, 4, 9, 120, 4, 6, 10]));
console.log(solution([]));
console.log(solution([0, 1]));
console.log(solution([0, 1, 2, 1, 2]));