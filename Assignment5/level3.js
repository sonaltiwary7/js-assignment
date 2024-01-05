//1
//part1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Sorted Ages:", ages);
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);

//part2
const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
age.sort(function(a, b) {
    return a - b;
});
const middleIndex = Math.floor(age.length / 2);
if (age.length % 2 === 0)
 {
    const median = (age[middleIndex - 1] + age[middleIndex]) / 2;
    console.log("Median Age:", median);
} else
 {
    const median = age[middleIndex];
    console.log("Median Age:", median);
}

//part3
const ages3 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sumOfAges = ages3.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
const averageAge1 = sumOfAges / ages3.length;

console.log("Average Age:", averageAge1);


//part4
const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge1 = ages1[0];
const maxAge1 = ages1[ages1.length - 1];
const ageRange = maxAge1 - minAge1;
console.log("Minimum Age:", minAge1);
console.log("Maximum Age:", maxAge1);
console.log("Age Range:", ageRange);

//part5
const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const averageAge = ages2.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / ages2.length;
const minAge2 = ages2[0];
const maxAge2 = ages2[ages.length - 1];
const absMinDifference = Math.abs(minAge2 - averageAge);
const absMaxDifference = Math.abs(maxAge2 - averageAge);
if (absMinDifference < absMaxDifference) {
    console.log("The absolute difference between min and average is smaller.");
} else if (absMinDifference > absMaxDifference) {
    console.log("The absolute difference between max and average is smaller.");
} else {
    console.log("The absolute differences are equal.");
}

console.log("Absolute Difference (min - average):", absMinDifference);
console.log("Absolute Difference (max - average):", absMaxDifference);


//2
const country = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
const firstTen = country.slice(0,10);
console.log(firstTen);

//3
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const midleIndex = Math.floor(countries.length / 2);

if (countries.length % 2 === 1)
 {
    const middleCountry = countries[midleIndex];
    console.log("Middle Country:", midleCountry);
} else 
{
    const middleCountries = [countries[midleIndex - 1], countries[midleIndex]];
    console.log("Middle Countries:", midleCountries);
}


//4
const countrie = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const middlIndex = Math.ceil(countrie.length / 2);

const firstHalf = countrie.slice(0, middlIndex);
const secondHalf = countrie.slice(middlIndex);

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);
