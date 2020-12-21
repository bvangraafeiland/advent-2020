import { numTreesEncountered } from "../src/day3";
import { getLines } from "../src/utilities";

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
        expect(numTreesEncountered(map)).toBe(7);
    });
});
