function fib(n) {
    // n under 2 is the base case, always 1
    if (n <= 2) {
        return 1;
    }
    return (fib(n - 1) + fib(n - 2));
}

function fib2(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    return memo[n];
}

console.log('Recursion solution');
console.time('fib');
console.log(`fib for 7: ${fib(7)}`);
console.log(`fib for 8: ${fib(8)}`);
console.log(`fib for 9: ${fib(9)}`);
console.log(`fib for 10: ${fib(10)}`);
console.log(`fib for 35: ${fib(35)}`);
// console.log(`fib for 50: ${fib(50)}`);
console.timeEnd('fib');

console.log('Memoization solution');
console.log('========================');
console.time('fib2');
console.log(`fib for 7: ${fib2(7)}`);
console.log(`fib for 8: ${fib2(8)}`);
console.log(`fib for 9: ${fib2(9)}`);
console.log(`fib for 10: ${fib2(10)}`);
console.log(`fib for 35: ${fib2(35)}`);
// console.log(`fib for 50: ${fib2(50)}`);
console.timeEnd('fib2');
