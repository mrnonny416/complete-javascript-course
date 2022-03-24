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


const firstName = 'Tawee';
const job = 'Student';
const birthYear = '1998';
const year = 2022;
const tawee = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!"
console.log(tawee);

const taweeNew = `I'm ${firstName}, a ${year - birthYear} years oke ${job}!`;
console.log(taweeNew);

console.log(`Just a regular string...`);

console.log('String wiht \n\
multiple \n\
lines')

console.log(`String wiht
multiple
lines`);



const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years 😊`)
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//type conversion
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 10);

console.log(Number('non'));
console.log(typeof NaN);

console.log(String(23), 23)

// type coercion

console.log('I am ' + 23 + ' Years Old')
console.log('I am ' + 23 + ' Years Old')
console.log('22' + '10' + 3)
console.log('23' / '2')

let n = '1' + 1;
n = n - 1;
console.log(n)

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('non'));
console.log(typeof({}));

const money = 100;
if (money) {
    console.log("Don't spend it all 😁");
} else {
    console.log('You should det a job')
}