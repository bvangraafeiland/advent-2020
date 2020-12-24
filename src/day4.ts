export function numCompletePassports(passports: string[]) {
    return passports.map(getPassportFields).filter((fields) => {
        return fields.filter(({ prop }) => prop !== 'cid').length === 7;
    }).length;
}

export function numValidPassports(passports: string[]) {
    return passports.map(getPassportFields).filter((fields) => {
        return fields.filter(validate).length === 7;
    }).length;
}

const validate = ({ prop, value }: { prop: string, value: string }) => {
    switch (prop) {
        case 'byr':
            const birthYear = parseInt(value);
            return birthYear >= 1920 && birthYear <= 2002;
        case 'iyr':
            const issueYear = parseInt(value);
            return issueYear >= 2010 && issueYear <= 2020;
        case 'eyr':
            const expirationYear = parseInt(value);
            return expirationYear >= 2020 && expirationYear <= 2030;
        case 'hgt':
            const parts = value.match(/(\d+)(in|cm)/);
            if (!parts) return false;
            const number = parseInt(parts[1]);
            return parts[2] === 'cm' ? number >= 150 && number <= 193 : number >= 59 && number <= 76;
        case 'hcl':
            return RegExp(/^#[a-f0-9]{6}$/).test(value);
        case 'ecl':
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
        case 'pid':
            return RegExp(/^\d{9}$/).test(value);
    }
    return false;
}

function getPassportFields(passport: string) {
    return passport.split(/\s/).filter(Boolean).map((field) => {
        const [prop, value] = field.split(':');
        return { prop, value };
    });
}
