// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    N = N.toString(2);
    let numberOfOnes = 0;
    let numberOfZeros = 0;
    let binaryGap = 0;
    let markPosition = false;
    let binaryZeros = 0;
    for(let i=0; i<N.length; i++) {
        if(N[i] > 0) {
            numberOfOnes++;
        } else {
            numberOfZeros++;
        }
    }
    if(numberOfOnes) {
        for(let j=0; j<N.length; j++) {
            if(markPosition) {
                if(N[j] < 1) {
                    binaryZeros++;
                }
            }
            if((N[j] > 0) && !markPosition) {
                markPosition = true;
            } else if((N[j] > 0) && markPosition) {
                markPosition = false;
                if(binaryZeros > binaryGap) {
                    binaryGap = binaryZeros
                }
                binaryZeros = 0;
            }
        }
    } else {
        binaryGap = 0;
    }
    return binaryGap;
}
