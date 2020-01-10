function solution(A) {
    let loopTimes = A.length - 1;
    let difference = 0;
    let stored = false;
    let endPointLoopA = 1;
    let minimalDifference = 0;
    for(i=0; i<loopTimes; i++) {
        let firstSum = 0;
        let secondSum = 0;
        for(let j=0; j<endPointLoopA; j++) {
            firstSum += A[j];
        }
        for(let k=endPointLoopA; k<A.length; k++) {
            secondSum += A[k];
        }
        endPointLoopA++
        difference = Math.abs(firstSum - secondSum);
        if(!stored) {
            minimalDifference = difference;
            stored = true;
        } else {
            if(minimalDifference > difference) {
                minimalDifference = difference;
            }
        }
    }
    return minimalDifference;
}