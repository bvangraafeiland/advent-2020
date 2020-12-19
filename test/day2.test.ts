import { getLines } from "../src/utilities";
import { isValidOfficialPassword, isValidSledRentalPassword, numValidPasswords } from "../src/day2";

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const passwords = getLines(input);

describe('day 2', () => {
    it('should indicate how many passwords are valid', () => {
        expect(numValidPasswords(passwords, isValidSledRentalPassword)).toBe(2);
    });
    it('can handle multi-digit ranges', () => {
        expect(numValidPasswords(['10-50 a: aaaaaaaaaaaaaaaaaaaaaaaaabb'], isValidSledRentalPassword)).toBe(1);
    });
    it('validates a password by official standards', () => {
        expect(numValidPasswords(passwords, isValidOfficialPassword)).toBe(1);
    });
});
