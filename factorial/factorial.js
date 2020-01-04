function solution(N) {
  let factorial = 1;
  while(N > 0) {
    factorial *= (N-1);
    N--;
  }
  return factorial;
}
