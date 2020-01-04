# Decimal To Binary

A decimal number (a positive Integer N) can be converted from base 10 to base 2 (binary) by simply dividing the decimal value in bits with denominator value of 2.

Once rearranged the binary value can now be obtained from last remainder to first remainder. For example, number 5 has binary representation 101 since 5 divided by 2 yields a value of 2 with a remainder of 1, the value 2 can now be further divided by 2 to yield a value of 1 with a remainder of 0 and lastly the value 1 can be divided by 2 to yield a value of 0 with a remainder of 1 => 101. Another example is, number 6 has binary representation 110 since 6 divided by 2 yields a value of 3 with a remainder of 0, the value 3 can now be further divided by 2 to yield a value of 1 with a remainder of 1 and lastly the value 1 can be divided by 2 to yield a value of 0 with a remainder of 1 => 110.

Write a function:

## Solution(N)

that, given a positive integer N, returns the binary value of a decimal number.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
