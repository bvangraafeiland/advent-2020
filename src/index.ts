import fs from 'fs/promises';
import { productOfPairs, productOfTriples } from "./day1";
import { getLines, getNumbers } from "./utilities";
import { numValidPasswords } from "./day2";

fs.readFile('./input/day1.txt').then((contents) => {
    console.log(`day 1, part 1: ${productOfPairs(getNumbers(contents.toString()))}`);
    console.log(`day 1, part 2: ${productOfTriples(getNumbers(contents.toString()))}`);
});

fs.readFile('./input/day2.txt').then((contents) => {
    console.log(`day 2, part 1: ${numValidPasswords(getLines(contents.toString()))}`);
    // console.log(`day 1, part 2: ${productOfTriples(getNumbers(contents.toString()))}`);
});
