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
            if(N[j] > 0) {
                if(binaryZeros) {
                    if(binaryZeros > binaryGap) {
                        binaryGap = binaryZeros;
                    }
                }
                binaryZeros = 0;
            }
            if(N[j] < 1) {
                binaryZeros++;
            }
        }
    } else {
        binaryGap = 0;
    }
    return binaryGap;
}
