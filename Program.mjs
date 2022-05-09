import { dateGenerator } from './Main.mjs';
import { ageGenerator } from './Main.mjs';
import { printOutInfo } from './Main.mjs';
import { setGoUp } from './Main.mjs';

var result = printOutInfo();
console.log("My name is" + ' ' + result[0], `I am ${ageGenerator(30, 40)} years old, 
as a date of ${dateGenerator()} i  ${setGoUp() ? "have a job." : "still am looking for a job."}`);
console.log("---------------------------------------------")
console.log("My name is" + ' ' + result[1], `I am ${ageGenerator(30, 40)} years old, 
as a date of ${dateGenerator()} i  ${setGoUp() ? "have a job." : "still am looking for a job."}`);
console.log("---------------------------------------------")
console.log("My name is" + ' ' + result[3], `I am ${ageGenerator(30, 40)} years old, 
as a date of ${dateGenerator()} i  ${setGoUp() ? "have a job." : "still am looking for a job."}`);
