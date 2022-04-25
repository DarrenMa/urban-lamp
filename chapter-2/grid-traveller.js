module.exports = {
    travel(rows, columns) {
        if (rows === 1 && columns === 1) {
            return 1;
        }
        if (rows === 0 || columns === 0) {
            return 0;
        }
        return this.travel(rows - 1, columns) + this.travel(rows, columns - 1);
    },
    travel2(rows, columns, memo = {}) {
        const key = `${rows},${columns}`;
        if (key in memo) {
            return memo[key];
        }
        if (rows === 1 && columns === 1) {
            return 1;
        }
        if (rows === 0 || columns === 0) {
            return 0;
        }
        memo[key] = this.travel2(rows - 1, columns, memo) + this.travel2(rows, columns - 1, memo);
        return memo[key];
    },
};
