function sumEvenNumbers(obj) {
    let total = 0;

    for (const key in obj) {
        const value = obj[key];

        if (typeof value === "number" && value % 2 === 0) {
            total += value;
        } else if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        ) {
            total += sumEvenNumbers(value);
        }
    }

    return total;
}

module.exports = {
    sumEvenNumbers,
};
