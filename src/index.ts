import fs from 'fs/promises';
import { productOfPairs, productOfTriples } from "./day1";
import { getLines, getNumbers } from "./utilities";
import { isValidOfficialPassword, isValidSledRentalPassword, numValidPasswords } from "./day2";
import { numTreesEncountered } from "./day3";

fs.readFile('./input/day1.txt').then((contents) => {
    let numbers = getNumbers(contents.toString());
    console.log(`day 1, part 1: ${productOfPairs(numbers)}`);
    console.log(`day 1, part 2: ${productOfTriples(numbers)}`);
});

fs.readFile('./input/day2.txt').then((contents) => {
    let passwords = getLines(contents.toString());
    console.log(`day 2, part 1: ${numValidPasswords(passwords, isValidSledRentalPassword)}`);
    console.log(`day 2, part 2: ${numValidPasswords(passwords, isValidOfficialPassword)}`);
});

fs.readFile('./input/day3.txt').then((contents) => {
    let map = getLines(contents.toString()).map((line) => line.split(''));
    console.log(`day 3, part 1: ${numTreesEncountered(map)}`);
    // console.log(`day 2, part 2: ${numValidPasswords(passwords, isValidOfficialPassword)}`);
});
