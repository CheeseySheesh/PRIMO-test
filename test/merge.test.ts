const { merge } = require("../src/merge");

describe('merge function', () => {
    it('should merge three sorted arrays into one sorted array', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [10, 8, 6, 4, 2].sort((a, b) => b - a); // Sort in descending order
        const collection3 = [9, 11, 13];

        const merged = merge(collection1, collection2, collection3);
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

        expect(merged).toEqual(expected);
    });

    it('should handle empty arrays', () => {
        const collection1 = [];
        const collection2 = [];
        const collection3 = [];

        const merged = merge(collection1, collection2, collection3);
        const expected = [];

        expect(merged).toEqual(expected);
    });

    it('should handle arrays of different lengths', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [10, 8, 6, 4, 2];
        const collection3 = [9, 11, 13, 15, 17];

        const merged = merge(collection1, collection2, collection3);
        const expected = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 15, 17];

        expect(merged).toEqual(expected);
    });
});