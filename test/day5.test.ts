import { getPositionFromBoardingPass } from "../src/day5";

const boardingPasses = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL',
];

describe('day 5', () => {
    it('should derive the row and seat numbers from the boarding pass', () => {
        expect(boardingPasses.map(getPositionFromBoardingPass)).toStrictEqual([
            [44, 5],
            [70, 7],
            [14, 7],
            [102, 4],
        ]);
    });
});
