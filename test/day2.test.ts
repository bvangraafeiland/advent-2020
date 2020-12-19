import { getLines } from "../src/utilities";
import { numValidPasswords } from "../src/day2";

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const passwords = getLines(input);

describe('day 2', () => {
    it('should indicate how many passwords are valid', () => {
        expect(numValidPasswords(passwords)).toBe(2);
    });
    it('can handle multi-digit ranges', () => {
        expect(numValidPasswords(['10-50 a: aaaaaaaaaaaaaaaaaaaaaaaaabb'])).toBe(1);
    });
});
