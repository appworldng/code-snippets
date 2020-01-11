//Non Favourable Time Complexity O(N) Algorithm
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

//Favourable Time Complexity O(sqrt(N)) Algorithm
function isPrime(num) {
    if (num <= 1) {
      return true
    } else if (num <= 3) {
      return true
    } else if (num%2 === 0 || num%3 === 0) {
      return false
    }
    let i = 5
    while (i*i <= num) {
      if (num%i === 0 || num%(i+2) === 0) {
        return false
      }
      i += 6
    }
    return true
}