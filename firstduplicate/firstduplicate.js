function firstDuplicate(a) {
    let index = -1; let minimalIndexValue = -1; let b = [];
    for(let i=0; i<a.length; i++) {
        for(let j=0; j<a.length; j++) {
            if(j!=i) {
                if(b.indexOf(a[i]) < 0) {
                    if(a[j] === a[i]) {
                        if(index > -1) {
                            if(j < index) {
                                index = j;
                                b.push(a[index]);
                            }
                        } else {
                            index = j;
                            b.push(a[index]);
                        }
                    }
                }
            }
        }
    }
    if(index > -1) minimalIndexValue = a[index];
    return minimalIndexValue;
}
