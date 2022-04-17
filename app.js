const fiboncacci = require('./fiboncacci');

(async () => {
    console.log('====== fiboncacci ======');
    console.log('Recursion solution');
    console.time('fib');
    console.log(`fib for 7: ${fiboncacci.fib(7)}`);
    console.log(`fib for 8: ${fiboncacci.fib(8)}`);
    console.log(`fib for 9: ${fiboncacci.fib(9)}`);
    console.log(`fib for 10: ${fiboncacci.fib(10)}`);
    console.log(`fib for 35: ${fiboncacci.fib(35)}`);
    // console.log(`fib for 50: ${fiboncacci.fib(50)}`);
    console.timeEnd('fib');

    console.log('Memoization solution');
    console.log('========================');
    console.time('fib2');
    console.log(`fib for 7: ${fiboncacci.fib2(7)}`);
    console.log(`fib for 8: ${fiboncacci.fib2(8)}`);
    console.log(`fib for 9: ${fiboncacci.fib2(9)}`);
    console.log(`fib for 10: ${fiboncacci.fib2(10)}`);
    console.log(`fib for 35: ${fiboncacci.fib2(35)}`);
    // console.log(`fib for 50: ${fiboncacci.fib2(50)}`);
    console.timeEnd('fib2');
    console.log('====== end fiboncacci ======');
})();
