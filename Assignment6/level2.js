//1
const generateRandomId = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
};
const desiredLength = 10;
const randomId = generateRandomId(desiredLength);

console.log("Random ID:", randomId);

//2
const generateRandomHexadecimal = () => {
    const randomHexadecimal = Math.floor(Math.random() * 16777215).toString(16);
    return randomHexadecimal;
};

const randomHexNumber = generateRandomHexadecimal();

console.log("Random Hexadecimal Number:", randomHexNumber);

//3
const generateRandomRGB = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

const randomRGBColor = generateRandomRGB();

console.log("Random RGB Color:", randomRGBColor);

//4
const countries = ['Albania','Bolivia', 'Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya' ];
const newArr = []
for(let i = 0; i < countries.length; i++)
{
    newArr.push(countries[i].toUpperCase())
}
const newArray = [newArr];

console.log("the new array:", newArr);


//5
const countrie = ['Albania','Bolivia', 'Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya' ];
const newAr = []
for(let i = 0; i < countrie.length; i++)
{
    newAr.push(countrie[i].length)
}
const newArray1 = [newAr];

console.log(newAr);


//6
const Countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const newArray2 = Countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);

console.log(newArray2);


//7
const countries1 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithLand = countries1.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these countries are without land");
}


//8
const countries2 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland','Iceland', 'Japan', 'Kenya'];

const countriesWithLand1 = countries2.filter(country => country.toLowerCase().endsWith('ia'));

if (countriesWithLand1.length > 0) {
    console.log(countriesWithLand1);
} else {
    console.log("All these countries are without land");
}


//9
const countries3 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countryWithMaxCharacters = countries3.reduce((maxCountry, currentCountry) => {
    return currentCountry.length > maxCountry.length ? currentCountry : maxCountry;
}, '');

console.log("Country with the most characters:", countryWithMaxCharacters);


//10
const countries4 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithFiveCharacters = countries4.filter(country => country.length === 5);

console.log("Countries with exactly 5 characters:", countriesWithFiveCharacters);


//11
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
const largestword = webTechs.reduce((maxWord, currentWord) => {
    return currentWord.length > maxWord.length ? currentWord : maxWord;
}, '');

console.log("Longest word in webTechs:", largestword);


//12
const webTechs1 = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
const techsWithLength = webTechs1.map(tech => [tech, tech.length]);

console.log(techsWithLength);


//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const MERN = mernStack.map(word => word[0]).join('');

console.log(MERN);


//14
const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let i = 0; i < techStack.length; i++) {
    console.log(techStack[i]);
}


//15
const fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruit.length; i >=0; i--) {
    console.log(fruit[i]);
}

//16
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']];
    for (let i = 0; i < fullStack.length; i++) 
{
    for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
}
}

