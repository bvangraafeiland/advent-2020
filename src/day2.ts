export function numValidPasswords(passwordsDatabase: string[], validator: (row: string) => boolean) {
    return passwordsDatabase.filter(validator).length;
}

export function isValidSledRentalPassword(databaseRow: string) {
    const [, min, max, char, password] = databaseRow.match(/^(\d+)-(\d+) (.): (.+)$/) ?? [];
    const numOccurrences = (password.match(new RegExp(char, 'g')) ?? []).length;

    return numOccurrences >= parseInt(min) && numOccurrences <= parseInt(max);
}

export function isValidOfficialPassword(databaseRow: string) {
    const [, firstPosition, secondPosition, char, password] = databaseRow.match(/^(\d+)-(\d+) (.): (.+)$/) ?? [];
    const [index1, index2] = [parseInt(firstPosition) - 1, parseInt(secondPosition) - 1];

    return (password[index1] === char) !== (password[index2] === char);
}
