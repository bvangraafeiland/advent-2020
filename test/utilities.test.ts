import { pairs, triples } from "../src/utilities";

describe('pairs', () => {
    it('should return all possible differing pairs of an array', () => {
        expect(pairs([1,2,3])).toEqual([[1,2], [1,3], [2,3]]);
    });
});

describe('triples', () => {
    it('should return all possible differing triples of an array', () => {
        expect(triples([1,2,3,4])).toEqual([[1,2,3], [1,2,4], [1,3,4], [2,3,4]]);
    });
});
