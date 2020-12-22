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

export function multiplyEncounteredTrees(map: string[][], slopes: { right: number, down: number }[]) {
    return slopes.map(( { right, down }) => numTreesEncountered(map, right, down))
        .reduce((previous, current) => previous * current);
}
