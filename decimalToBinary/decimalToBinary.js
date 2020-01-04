function decimalToBinary(N) {
    let binaryNumber = "";
    while(N > 0) {
        binaryNumber = binaryNumber + (N%2) + "";
        N = parseInt(N/2);
    }
    return parseInt(binaryNumber);
}
