import fs from "fs/promises";

export function numTreesEncountered(map: string[][], stepsRight: number, stepsDown: number) {
    const rows = [...rowsToVisit(map.length, stepsDown)];
    const cols = map[0].length;
    return rows.filter((rowNumber, step) => {
        return map[rowNumber][(step * stepsRight) % cols] === '#';
    }).length;
}

function* rowsToVisit(numRows: number, stepsDown: number) {
    for (let i = 0; i < numRows; i += stepsDown) {
        yield i;
    }
}

const slopes = [
    { right: 1, down: 1},
    { right: 3, down: 1},
    { right: 5, down: 1},
    { right: 7, down: 1},
    { right: 1, down: 2},
];
export function multiplyEncounteredTrees(map: string[][]) {
    return slopes.map(( { right, down }) => numTreesEncountered(map, right, down))
        .reduce((previous, current) => previous * current);
}
