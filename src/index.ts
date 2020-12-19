import fs from 'fs/promises';
import { productOfPairs, productOfTriples } from "./day1";
import { getNumbers } from "./utilities";

fs.readFile('./input/day1.txt').then((contents) => {
    console.log(`day 1, part 1: ${productOfPairs(getNumbers(contents.toString()))}`);
    console.log(`day 1, part 2: ${productOfTriples(getNumbers(contents.toString()))}`);
});
