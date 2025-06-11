const { sortDescending, maxSubarraySum, sumEvenNumbers } = require("../index");

// Tests for sortDescending
describe("sortDescending", () => {
    test("sorts array in descending order", () => {
        expect(sortDescending([5, 2, 9, 1, 5])).toEqual([9, 5, 5, 2, 1]);
        expect(sortDescending([3, 1, 4, 1, 5])).toEqual([5, 4, 3, 1, 1]);
    });

    test("works with empty array", () => {
        expect(sortDescending([])).toEqual([]);
    });
});

// Tests for maxSubarraySum
describe("maxSubarraySum", () => {
    test("finds maximum subarray sum", () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });

    test("returns null for invalid input", () => {
        expect(maxSubarraySum([1, 2], 3)).toBeNull();
        expect(maxSubarraySum([], 1)).toBeNull();
    });
});

// Tests for sumEvenNumbers
describe("sumEvenNumbers", () => {
    test("sums even numbers in nested objects", () => {
        const input1 = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                },
            },
        };
        expect(sumEvenNumbers(input1)).toBe(6);

        const input2 = {
            a: 2,
            b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
            c: { c: { c: 2 }, cc: "ball" },
            d: 1,
            e: { e: { e: 4 }, ee: "car" },
        };
        expect(sumEvenNumbers(input2)).toBe(12);
    });

    test("returns 0 for no even numbers", () => {
        expect(sumEvenNumbers({ a: 1, b: { c: 3 } })).toBe(0);
    });
});
