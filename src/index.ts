import fs from 'fs/promises';
import { productOfEntries } from "./day1";

fs.readFile('./input/day1.txt').then((contents) => {
    console.log(`day 1, part 1: ${productOfEntries(contents.toString())}`);
});
