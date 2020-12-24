export function getPositionFromBoardingPass(boardingPass: string): [number, number] {
    return [getPosition(boardingPass.slice(0, 7), 0, 127), getPosition(boardingPass.slice(7), 0, 7)];
}

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
