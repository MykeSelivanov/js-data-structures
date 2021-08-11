// Write a function to multiply(a,b)
// where a and b are both positive integers
// you can only use + or - operators

function multiply(x, y) {
    // base
    if (y === 0) return 0;
    
    return x + multiply(x, y-1);
}

console.log(multiply(5,11)); // 55