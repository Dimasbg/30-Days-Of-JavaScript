// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')
let age = parseInt(prompt(`Eneter Your Age:`));
console.log(1, age >= 18 ? `You are old enough to drive.` : `You are left with ${18 - age} years to drive`);

let yourAge = parseInt(prompt(`Enter your age:`))
let myAge = 27;
if (myAge > yourAge)
    console.log(2, `I am ${myAge - yourAge} years older than you`);
else
    console.log(2, `You are ${yourAge - myAge} years older than me`);

let a = 4;
let b = 3;
console.log(3, a > b ? `a is greater than b` : `a is less than b`);

let number = parseInt(prompt(`Enter a number:`))
console.log(4, `${number} is an ${number % 2 === 0 ? `even` : `odd`} number`);


/* Level 2 */
let studentScore = parseInt(prompt(`Enter Student Score:`))
const calcGrade = (val) => {
    if (val >= 80 && val < 100)
        return `A`;
    if (val >= 70 && val <= 89)
        return `B`;
    if (val >= 60 && val <= 69)
        return `C`;
    if (val >= 50 && val <= 59)
        return `D`;
    return `F`;
};
console.log(1, `student grade is ${calcGrade(studentScore)}`);

let season = prompt(`Enter Season:`).toLowerCase();
const checkSeason = (val) => {
    if ([`september`, `october`, `november`].includes(val))
        return `Autumn`;
    if ([`december`, `january`, `february`].includes(val))
        return `Winter`;
    if ([`march`, `april`, `may`].includes(val))
        return `Spring`;
    return `Summer`;
};
console.log(2, `the season is ${checkSeason(season)}`)

const dayWork = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`],
    dayWeekEnd = [`saturday`, `sunday`];
let today = prompt(`What is the day today?`)
    .trim()
    .toLowerCase();
console.log(3, `${today} is a ${dayWeekEnd.includes(today) ? `weekend` : `working day`}.`)

/* Level 3 */
let monthInput = prompt(`Enter a month:`).trim().toLowerCase();
const months = [`January`, `february`, `march`, `april`, `may`, `june`, `july`, `september`, `november`, `december`];
const monthDay = new Date(new Date().getFullYear, months.indexOf(monthInput), 0).getDate();
console.log(`${monthInput} has ${monthDay} days.`)
