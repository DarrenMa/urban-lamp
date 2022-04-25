module.exports = {
    fib(n) {
        // n under 2 is the base case, always 1
        if (n <= 2) {
            return 1;
        }
        return (this.fib(n - 1) + this.fib(n - 2));
    },

    fib2(n, memo = {}) {
        if (n in memo) {
            return memo[n];
        }
        if (n <= 2) {
            return 1;
        }
        memo[n] = this.fib2(n - 1, memo) + this.fib2(n - 2, memo);
        return memo[n];
    },
};
