function solution(N) {
    let times = Math.round(N.length/2);
    let O = [];
    for(let i=0; i<times; i++) {
        let start = i * 2;
        let end = start + 2;
        let pair = N.slice(start, end);
        O.push(pair);
    }
    return O;
}

console.log(solution("3457832954"));