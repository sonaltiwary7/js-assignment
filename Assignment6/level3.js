//1
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const countriesCopy = countries.slice();
console.log(countriesCopy);


//2
const countries1 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const copiedCountries = countries1.slice();
const sortedCountries = copiedCountries.sort();
console.log(sortedCountries);

//3
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
const sortedwebTechs = webTechs.sort();
const sortedmernStack = mernStack.sort();
console.log("sorted mernStack:",sortedmernStack);
console.log("sorted webStacks:",sortedwebTechs);


//4
const countries2 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithLand = countries2.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0)
 {
    const countriesarray = [countriesWithLand];
    console.log("countries with land:", countriesarray);
} 


//5
const countries3 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countryWithMaxCharacters = countries3.reduce((maxCountry, currentCountry) => {
    return currentCountry.length > maxCountry.length ? currentCountry : maxCountry;
}, '');

console.log("Country with the highest characters:", countryWithMaxCharacters);


//6
const countries4 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithLand1 = countries4.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand1.length > 0)
 {
    const countriesarray = [countriesWithLand1];
    console.log("countries with land:", countriesarray);
} 


//7
const countries5 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithFiveCharacters = countries5.filter(country => country.length === 4);

console.log("Countries with exactly 5 characters:", countriesWithFiveCharacters);


//8

const countries6 = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
  const countriesWithTwoOrMoreWords = countries6.filter(country => country.split(' ').length >= 2);  
  console.log(countriesWithTwoOrMoreWords);
  

//9
const countries7 = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
 
const reversedAndCapitalizedCountries = countries7
  .reverse()
  .map(country => country.toUpperCase());

console.log(reversedAndCapitalizedCountries);