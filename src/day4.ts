export function numValidPassports(passports: string[]) {
    return passports.map(getPassportFields).filter((fields) => {
        return fields.filter(({ prop }) => prop !== 'cid').length === 7;
    }).length;
}

function getPassportFields(passport: string) {
    return passport.split(/\s/).filter(Boolean).map((field) => {
        const [prop, value] = field.split(':');
        return { prop, value };
    });
}
