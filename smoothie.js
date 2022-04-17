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
const makeSmoothie = async () => {
    console.time('makeSmoothie');
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    console.timeEnd('makeSmoothie');
    return [a, b];
};
const makeSmoothieConcurrently = async () => {
    console.time('makeSmoothieConcurrently');
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = Promise.all([a, b]);
    console.timeEnd('makeSmoothieConcurrently');
    return smoothie;
};
(async () => {
    console.log(await makeSmoothie());
    console.log(await makeSmoothieConcurrently());
})();
