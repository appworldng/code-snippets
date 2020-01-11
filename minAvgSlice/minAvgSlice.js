function solution(A) {
    let position = 0;
    let average = 0.00000000;
    let averageSlice = 0.00000000;
    let bool = false;
    let isAssigned = false;
    for(let i = 0; i < A.length; i++) {
        let loopTimes = A.length;
        let denominator = 1;
        let sum = 0;
        for(let j=i; j<loopTimes; j++) {
            sum += A[j];
            if(denominator > 1) {
                average = sum/denominator;
                isAssigned = true;
            }
            denominator++;
            if(bool) {
                if(average < averageSlice) {
                    averageSlice = average;
                    position = i;
                }
            } else {
                if(isAssigned) {
                    averageSlice = average;
                    bool = true;
                }
            }
        }
    }
    return position;
}

solution([10, 10, -1, 2, 4, -1, 2, -1]);