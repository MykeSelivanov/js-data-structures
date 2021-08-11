// calculate the factorial of a number

function factorial(num) {
    // base
    if (num < 0) throw new Error('Num could not be negative!');
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(7)); // 5040
console.log(factorial(10)); // 3628800
console.log(factorial(-1)); // Err