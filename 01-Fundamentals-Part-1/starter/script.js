/*let js = 'Amazing';
//if (js === 'Amazing') alert('Java Script is FUN!');

console.log(40 + 8 + 23 - 11);

console.log('Nonny');
console.log(23);
// Start Variable
let firstName = "firstName 3 Time";


console.log(firstName);
console.log(firstName);
console.log(firstName);

let tawee_sopapan = "TS";
let $function = 27;

let person = 'Nonny';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Student';

let job1 = 'Programmer';
let job2 = 'Student';

console.log(myFirstJob);


//End Variable
//Start Data Type

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'NONNY');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);


    //End Data Type

//Start let const var

let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'student';

lastName = 'Schmedtmann';
console.log(lastName);
//End let const var

const now = 2037;
const ageNon = now - 1991;
const ageMir = now - 2018;
console.log(ageNon, ageMir);

console.log(ageNon * 2, ageMir / 2, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 *2 * 2

const firstName = 'Tawee';
const lastName = 'Sopapan';
console.log(firstName + ' ' + lastName);
// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison operators
console.log(ageNon > ageMir);
console.log(ageMir >= 18);

const isFullAge = ageMir >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageNon = now - 1991;
const ageMir = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageNon + ageMir) / 2
console.log(ageNon, ageMir, averageAge);

//assignment 1
let country = 'Thailand',
    continent = 'SEA',
    population = 8,
    Finland = 6,
    AverragePopulation = 33;
console.log(country, continent, population);
let isIsland = false;
const language = 'Thai';
console.log(isIsland, population, country, language);
console.log(population / 2, population / 2 + 1, population > Finland, population < AverragePopulation)
let description = country + ' is in ' + continent + ' , and its ' + population + ' million people speak ' + language;
console.log(description);
*/

//////////////////////////////////
//coding Challenge #1
let markMass = 78,
    markHeights = 1.69,
    johnMass = 92,
    johnHeights = 1.95;
let markBMI = markMass / markHeights ** 2;
let johnBMI = johnMass / johnHeights ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
markMass = 95;
markHeights = 1.88;
johnMass = 85;
johnHeights = 1.76;
markBMI = markMass / markHeights ** 2;
johnBMI = johnMass / johnHeights ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);