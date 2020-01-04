function decimalToBinary(N) {
    let binaryNumber = "";
    while(N > 0) {
        binaryNumber = "" + (N%2) + binaryNumber;
        N = Math.floor(N/2);
    }
    return binaryNumber;
}
