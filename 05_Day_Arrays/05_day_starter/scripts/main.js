console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

let emptyArray = [];
let arrayNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(3, arrayNumber.length);
console.log(4, `First`, arrayNumber[0])
console.log(4, `Middle`, arrayNumber[Math.floor(arrayNumber.length / 2)])
console.log(4, `Last`, arrayNumber[arrayNumber.length - 1])
const mixedDataTypes = [1, "2", true, "4", 5, false];
console.log(5, mixedDataTypes.length);
const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];
console.log(7, itCompanies);
console.log(8, itCompanies.length);
console.log(9, `First`, itCompanies[0])
console.log(9, `Middle`, itCompanies[Math.floor(itCompanies.length / 2)])
console.log(9, `Last`, itCompanies[itCompanies.length - 1])
itCompanies.forEach(b => {
    console.log(10, b);
});
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
};
console.log(11, itCompanies);
// let sentence = ``;
// for (let i = 0; i < itCompanies.length; i++) {
//     if (i != itCompanies.length - 1)
//         sentence += itCompanies[i];
//     sentence
// };
console.log(12, `${itCompanies.splice(itCompanies.length - 1, 1).join(`,`)} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

const findCompany = (val) => {
    const result = itCompanies.indexOf(val);

    if (certainCompany >= 0)
        return itCompanies[result];

    return `Company is not found`;
}

console.log(13, findCompany(`Microsoft`));