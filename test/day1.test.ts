import { productOfPairs, productOfTriples } from "../src/day1";
import { getNumbers } from "../src/utilities";

const input = `1721
979
366
299
675
1456`;
let numbers = getNumbers(input);

describe('day 1', () => {
    it('returns the product of a pair of numbers that add up to 2020', () => {
        expect(productOfPairs(numbers)).toBe(514579);
    });
    it('returns the product of three numbers that add up to 2020', () => {
        expect(productOfTriples(numbers)).toBe(241861950);
    });
});
