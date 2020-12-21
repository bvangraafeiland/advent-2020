export function numTreesEncountered(map: string[][]) {
    const rows = [...map.keys()];
    const cols = map[0].length;
    return rows.filter((rowNumber) => {
        return map[rowNumber][(rowNumber * 3) % cols] === '#';
    }).length;
}
