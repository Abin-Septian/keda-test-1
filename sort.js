function sortDescending(arr) {
    const array = [...arr];
    for (let i = 0; i < array.length; i++) {
        let maxI = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maxI]) {
                maxI = j;
            }
        }
        if (maxI !== i) {
            [array[i], array[maxI]] = [array[maxI], array[i]];
        }
    }
    return array;
}

module.exports = {
    sortDescending,
};
