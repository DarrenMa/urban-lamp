/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function canSum(targetSum, numbers) {
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (const n of numbers) {
        const remainder = targetSum - n;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }
    return false;
}

const canSum2 = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (const n of numbers) {
        const remainder = targetSum - n;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
};

const howSum = (targetSum, numbers) => {
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (const n of numbers) {
        const remainder = targetSum - n;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult) {
            return [...remainderResult, n];
        }
    }

    return null;
};

const howSum2 = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (const n of numbers) {
        const remainder = targetSum - n;
        const remainderResult = howSum2(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, n];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    let shortestCombination = null;
    for (const n of numbers) {
        const remainder = targetSum - n;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, n];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

const bestSum2 = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    let shortestCombination = null;
    for (const n of numbers) {
        const remainder = targetSum - n;
        const remainderCombination = bestSum2(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, n];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return memo[targetSum];
};

module.exports = {
    canSum, canSum2, howSum, howSum2, bestSum, bestSum2,
};
