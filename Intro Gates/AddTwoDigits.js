//You are given a two-digit integer n. Return the sum of its digits.

// Example For n = 29, the output should be addTwoDigits(n) = 11

function addTwoDigits(n) {
    let tens = Math.floor(n/10);
    let ones = n % 10;
    let sum = tens + ones;
    return sum
    }