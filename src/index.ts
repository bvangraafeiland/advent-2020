import fs from 'fs/promises';
import { productOfPairs, productOfTriples } from "./day1";
import { getLines, getNumbers, parsePassportInput } from "./utilities";
import { isValidOfficialPassword, isValidSledRentalPassword, numValidPasswords } from "./day2";
import { multiplyEncounteredTrees, numTreesEncountered } from "./day3";
import { numCompletePassports, numValidPassports } from "./day4";
import { getPositionFromBoardingPass } from "./day5";

fs.readFile('./input/day1.txt').then((contents) => {
    const numbers = getNumbers(contents.toString());
    console.log(`day 1, part 1: ${productOfPairs(numbers)}`);
    console.log(`day 1, part 2: ${productOfTriples(numbers)}`);
});

fs.readFile('./input/day2.txt').then((contents) => {
    const passwords = getLines(contents.toString());
    console.log(`day 2, part 1: ${numValidPasswords(passwords, isValidSledRentalPassword)}`);
    console.log(`day 2, part 2: ${numValidPasswords(passwords, isValidOfficialPassword)}`);
});

fs.readFile('./input/day3.txt').then((contents) => {
    const map = getLines(contents.toString()).map((line) => line.split(''));
    console.log(`day 3, part 1: ${numTreesEncountered(map, 3, 1)}`);
    console.log(`day 3, part 2: ${multiplyEncounteredTrees(map)}`);
});

fs.readFile('./input/day4.txt').then((contents) => {
    const passports = parsePassportInput(contents.toString());
    console.log(`day 4, part 1: ${numCompletePassports(passports)}`);
    console.log(`day 4, part 2: ${numValidPassports(passports)}`);
});

fs.readFile('./input/day5.txt').then((contents) => {
    let positions = getLines(contents.toString()).map(getPositionFromBoardingPass);
    const highestSeatId = positions
        .map(([row, col]) => row * 8 + col)
        .sort((a, b) => b - a)[0];
    console.log(`day 5, part 1: ${highestSeatId}`);
});
