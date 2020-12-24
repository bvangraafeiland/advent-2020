export function getPositionFromBoardingPass(boardingPass: string): [number, number] {
    return [getPosition(boardingPass.slice(0, 7), 0, 127), getPosition(boardingPass.slice(7), 0, 7)];
}

export const getSeatId = ([row, col]: [number, number]) => row * 8 + col

function getPosition(boardingPass: string, lower: number, upper: number): number {
    if (lower === upper) return lower;

    switch (boardingPass[0]) {
        case 'F':
        case 'L':
            return getPosition(boardingPass.slice(1), lower, lower + Math.floor((upper - lower) / 2));
        case 'B':
        case 'R':
            return getPosition(boardingPass.slice(1), lower + Math.ceil((upper - lower) / 2), upper);
    }

    throw new Error('Invalid input');
}

export function getMissingSeatId(seatIds: number[]) {
    let sortedIds = seatIds.sort((a, b) => a - b);
    const differences = sortedIds.map((id, index) => {
        return sortedIds[index + 1] - id;
    });

    return sortedIds[differences.indexOf(2)] + 1;
}
