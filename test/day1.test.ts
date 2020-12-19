import { productOfEntries } from "../src/day1";

const input = `1721
979
366
299
675
1456`;

describe('day 1', () => {
    it('returns the product of numbers that add up to 2020', () => {
        expect(productOfEntries(input)).toBe(514579);
    });
});
