export function numValidPasswords(passwordsDatabase: string[]) {
    return passwordsDatabase.filter(isValidPassword).length;
}

function isValidPassword(databaseRow: string) {
    const [, min, max, char, password] = databaseRow.match(/^(\d+)-(\d+) (.): (.+)$/) ?? [];
    const numOccurrences = (password.match(new RegExp(char, 'g')) ?? []).length;

    return numOccurrences >= parseInt(min) && numOccurrences <= parseInt(max);
}
