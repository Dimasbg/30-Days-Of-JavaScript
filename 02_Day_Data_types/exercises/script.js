let challenge = `30 Days Of JavaScript`;
console.log(2, challenge);
console.log(3, challenge.length);
console.log(4, challenge.toUpperCase());
console.log(5, challenge.toLowerCase());
console.log(6, challenge.substring(0, challenge.indexOf(' ')));
console.log(7, challenge.slice(3));
console.log(8, challenge.includes(`Script`));
console.log(9, challenge.split());//Bestpracticenya di sebutin delimeternya challenge.split(``)
console.log(10, challenge.split(` `));
console.log(11, 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(`, `));
console.log(12, challenge.replace(`JavaScript`, `Python`));
console.log(13, challenge.charAt(15));
console.log(14, challenge.charCodeAt(challenge.indexOf(`J`)));
console.log(15, challenge.indexOf(`a`));
console.log(16, challenge.lastIndexOf(`a`));
console.log(17, `You cannot end a sentence with because because because is a conjunction`.indexOf(`because`));
console.log(18, `You cannot end a sentence with because because because is a conjunction`.lastIndexOf(`because`));
console.log(19, `You cannot end a sentence with because because because is a conjunction`.search(`because`));
console.log(20, ` ${challenge} `.trim());
console.log(21, challenge.startsWith(`3`));
console.log(22, challenge.endsWith(`t`));
console.log(23, challenge.match(/a/g));
console.log(24, `30 Days Of `.concat(`JavaScript`));
console.log(25, challenge.repeat(2));

/* Level 2 */
console.log(`* LEVEL 2 *`)
console.log(1, `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
console.log(2, `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
console.log(3, parseInt('10') === 10)
console.log(4, Math.ceil(parseFloat(`9.8`)) === 10)
console.log(5, `python`.includes(`on`) && `jargon`.includes(`on`))
console.log(6, `I hope this course is not full of jargon`.indexOf(`jargon`) != -1)
console.log(7, Math.floor(Math.random() * 101))
console.log(8, Math.floor(Math.random() * (101 - 50)) + 50)
console.log(9, Math.floor(Math.random() * 256))
console.log(10, `JavaScript`[Math.floor(Math.random() * `JavaScript`.length)])
console.log(11, `1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`)
console.log(12, 'You cannot end a sentence with because because because is a conjunction'.substr(31, 23))

/* Level 3 */
console.log(`* LEVEL 3 *`)
console.log(1, 'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length);
console.log(2, 'You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const sentenceObj = sentence
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .reduce((result, b) => { result[b] = (result[b] || 0) + 1; return result }, {});
let result3 = {};
console.log(sentenceObj);
for (const b in sentenceObj) {
    if (Object.values(result3).length===0)
        result3 = b;
    else {
        if (sentenceObj[b] > result3 || sentenceObj[b] > result3)
            result3 = sentenceObj[b]
    }
}
console.log(3, result3);
const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g).map(Number);
console.log(4, (income[0] + income[2]) * 12 + income[1]);