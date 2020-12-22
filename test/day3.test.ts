import { multiplyEncounteredTrees, numTreesEncountered } from "../src/day3";
import { getLines } from "../src/utilities";
import { slopes } from "../src";

const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const map = getLines(input).map((line) => line.split(''));
describe('day 3', () => {
    it('counts the right amount of trees in the example', () => {
        expect(numTreesEncountered(map, 3, 1)).toBe(7);
    });
    it('multiplies the number of trees in the given slopes', () => {
        expect(multiplyEncounteredTrees(map, slopes)).toBe(336);
    });
});
