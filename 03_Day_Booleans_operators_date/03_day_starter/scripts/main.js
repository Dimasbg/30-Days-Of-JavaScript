// this is your main.js script
let firstName = `Dimas`,
    lastName = `Gumelar`,
    country = `Indonesia`,
    city = `Depok`,
    age = 26,
    isMarried = false,
    year = 2024;

console.log(2, typeof (`10`) == typeof (10))
console.log(3, parseInt(`9.8`) == 10)
console.log(4.1, 1 < 2)
console.log(4.1, 2 < 3)
console.log(4.1, 3 < 4)
console.log(4.2, 1 > 2)
console.log(4.2, 1 > 3)
console.log(4.2, 1 > 4)
console.log(5.1, true)
console.log(5.2, true)
console.log(5.3, false)
console.log(5.4, false)
console.log(5.5, true)
console.log(5.6, true)
console.log(5.7, false)
console.log(5.8, false)
console.log(5.9, false)
console.log(5.10, true)
console.log(5.11, false)
console.log(5.12, `python`.length != `jargon`.length)
console.log(6.1, true)
console.log(6.2, false)
console.log(6.3, true)
console.log(6.4, true)
console.log(6.5, false)
console.log(6.6, true)
console.log(6.7, true)
console.log(6.8, false)
console.log(6.9, true)
console.log(6.10, true)
console.log(6.11, false)
const today = new Date();
console.log(7.1, today.getFullYear())
console.log(7.2, today.getMonth() + 1)
console.log(7.3, today.getDate())
console.log(7.4, today.getDay())
console.log(7.5, today.getHours())
console.log(7.6, today.getMinutes())
console.log(7.7, Date.now())

/* Level 2 */
console.log(`* Level 2 *`)
let b = prompt(`Enter base`);
let h = prompt(`Enter height`);
console.log(1, `The area of the triangle is ${0.5 * b * h}`);

let a = prompt(`Enter side a:`);
let bb = prompt(`Enter side b:`);
let c = prompt(`Enter side c:`);
console.log(2, `The perimeter of the triangle is ${parseFloat(a) + parseFloat(bb) + parseFloat(c)}`);

let length = parseFloat(prompt(`Enter Length:`));
let width = parseFloat(prompt(`Enter Width:`));
console.log(3, `The Area of rectangle is ${length * (2 * (length + width))}`)

let r = parseFloat(prompt(`Enter Radius:`));
console.log(4, `The area of a circle is ${Math.PI * r * r} and Circumference is ${2 * Math.PI * r}`);

let slope5 = 2;
console.log(5.1, `X intercept is `);
console.log(5.2, `Y intercept is ${slope5 * 0 - 2}`);

const slope = (x1, y1, x2, y2) => {
    return (y2 - y1) / (x2 - x1);
};
const slope6 = slope(2, 2, 6, 10);
console.log(6, `slope between point (2,2) and point (6,10) is ${slope6}`)

console.log(7, `compare no 5 and no 6 ${slope5 == slope6}`);

const number8 = (x, point) => {
    let result = x ** 2 + 6 * x + 9;
    if (result == point)
        return x;
    if (result > point)
        return number8(x - 1, point);
    return number8(x + 1, point);
}
console.log(8, `x is ${number8(0, 0)} for y = 0`);

let hour = parseFloat(prompt(`Enter hour:`))
let rate = parseFloat(prompt(`Enter rate per hour:`))
console.log(9, `Tour weekly erning is ${hour * rate}`)

let yourName = prompt(`Enter your Name:`)
console.log(10, yourName.length > 7 ? `your name is long` : `your name is short`);

firstName = prompt(`Enter your first name:`);
lastName = prompt(`Enter your last Name:`);
if (firstName.length > lastName)
    console.log(11, `Your first name, ${firstName} is longer than your family name, ${lastName}`);

let myAge = 250;
let yourAge = 25;
console.log(12, `I am ${myAge - yourAge} years older than you`);


let birthYear = parseInt(prompt(`Enter birth Year:`));
const calcAge = Date.getFullYear() - birthYear;
console.log(13, `You are ${calcAge}. ${calcAge >= 18 ? `You are old enough to drive` : `You will be allowed to drive after ${18 - calcAge} years.`}`)

let liveYear = parseInt(prompt(`Enter number of years you live:`))
console.log(14, `You lived ${liveYear * 60 * 60 * 24 * 365} seconds.`)

console.log(15.1, `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate().toString().padStart(2, '0')} ${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`)
console.log(15.2, `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()} ${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`)
console.log(15.3, `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()} ${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`)