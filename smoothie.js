/* eslint-disable no-promise-executor-return */
/* eslint-disable no-restricted-syntax */

// practice JS event loop
//
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
const getFruit = async (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓',
    };
    await delay(1000);
    return fruits[name];
};
// make smoothie waiting for each fruit
const makeSmoothie = async () => {
    console.time('makeSmoothie');
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    console.timeEnd('makeSmoothie');
    return [a, b];
};
// make smoothie getting all fruits concurrently (preferred)
const makeSmoothieConcurrently = async () => {
    console.time('makeSmoothieConcurrently');
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = Promise.all([a, b]);
    console.timeEnd('makeSmoothieConcurrently');
    return smoothie;
};
// using map on promises (getting all concurrently)
// resolving in the for await
const fruitLoop = async () => {
    console.time('fruitLoop');
    const fruits = [
        'pineapple',
        'peach',
        'strawberry',
    ];
    const smoothie = fruits.map((f) => getFruit(f));
    for await (const emoji of smoothie) {
        console.log(emoji);
    }
    console.timeEnd('fruitLoop');
};
(async () => {
    console.log(await makeSmoothie());
    console.log(await makeSmoothieConcurrently());
    await fruitLoop();

    const fruits = [
        'pineapple',
        'peach',
        'strawberry',
    ];
    // strings are immutable
    fruits.forEach((f) => {
        console.log(fruits);
        console.log(f);
        const upperFruit = f.toUpperCase();
        console.log(f);
        console.log(upperFruit);
        console.log(fruits);
    });
})();
