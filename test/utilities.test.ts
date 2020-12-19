import { pairs } from "../src/utilities";

describe('pairs', () => {
    it('should return all possible differing pairs of an array', () => {
        expect(pairs([1,2,3])).toEqual([[1,2], [1,3], [2,3]]);
    });
});
