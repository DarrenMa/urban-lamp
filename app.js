const fiboncacci = require('./chapter-1/fiboncacci');
const gridTraveller = require('./chapter-2/grid-traveller');
const targetSum = require('./chapter-3/targetsum');

(async () => {
    console.log('====== fiboncacci ======');
    console.log('Recursion solution');
    console.log('========================');
    console.time('fib');
    console.log(`fib for 35: ${fiboncacci.fib(35)}`);
    console.timeEnd('fib');

    console.log('Memoization solution');
    console.log('========================');
    console.time('fib2');
    console.log(`fib for 35: ${fiboncacci.fib2(35)}`);
    console.timeEnd('fib2');
    console.log('====== grid traveller ======');
    console.log('Recursion solution');
    console.log('========================');
    console.time('travel');
    console.log(`Combinations for a grid of (15, 15): ${gridTraveller.travel(15, 15)}`);
    console.timeEnd('travel');

    console.log('Memoization solution');
    console.log('========================');
    console.time('travel2');
    console.log(`Combinations for a grid of (15, 15): ${gridTraveller.travel2(15, 15)}`);
    console.timeEnd('travel2');

    console.log('====== canSum ======');
    console.log('Recursion solution');
    console.log('========================');
    console.time('canSum');
    console.log(`${targetSum.canSum(170, [7, 14])}`);
    console.timeEnd('canSum');

    console.log('====== canSum2 ======');
    console.log('Memoization solution');
    console.log('========================');
    console.time('canSum2');
    console.log(`${targetSum.canSum2(170, [7, 14])}`);
    console.timeEnd('canSum2');

    console.log('====== howSum ======');
    console.log('Recursion solution');
    console.log('========================');
    console.time('howSum');
    console.log(`${targetSum.howSum(8, [2, 3, 5])}`);
    console.log(`${targetSum.howSum(300, [7, 14])}`);
    console.timeEnd('howSum');

    console.log('====== howSum2 ======');
    console.log('Memoization solution');
    console.log('========================');
    console.time('howSum2');
    console.log(`${targetSum.howSum2(300, [7, 14])}`);
    console.timeEnd('howSum2');

    console.log('====== bestSum ======');
    console.log('Recursion solution');
    console.log('========================');
    console.time('bestSum');
    console.log(`${targetSum.bestSum(8, [2, 3, 5])}`);
    console.log(`${targetSum.bestSum(50, [2, 5, 25])}`);
    console.timeEnd('bestSum');

    console.log('====== bestSum2 ======');
    console.log('Memoization solution');
    console.log('========================');
    console.time('bestSum2');
    console.log(`${targetSum.bestSum2(8, [2, 3, 5])}`);
    console.log(`${targetSum.bestSum2(50, [2, 5, 25])}`);
    console.timeEnd('bestSum2');
})();
