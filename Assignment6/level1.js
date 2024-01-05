//1
//for loop
for (let i = 0; i <= 10; i++)
{
    console.log(i);
}

//while loop
let j=0;
while(j<=10)
{
   console.log(j);
    j++;
}

//do while loop
let k=0;
do
{
    console.log(k);
    k++; 
}
while(k<=10)


//2
//for loop
for (let i = 10; i >= 10; i--)
{
    console.log(i);
}

//while loop
let a=10;
while(a>=0)
{
   console.log(j);
    a--;
}

//do while loop
let i=10;
do
{
    console.log(i);
    i--; 
}
while(i>=0)

//3
var b,n=10;
for ( b = 0; b <= n; b++)
 {
    console.log(b);
}

//4
var y,z;
for ( y = 1; y <= 7; y++)
 {
    let line = "";
    for (z=1;z<=y;z++)
    {  
        line += "#";
    }
    console.log(line);
}

//5
for(let i = 0; i <= 10; i++)
{
    console.log(`${i} * ${i} = ${i * i}`);
}

//6
for(let i = 0; i <= 10; i++)
{
    console.log(`${i}   ${i * i}   ${i * i * i}`);
}

//7
for (let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }

}

//8
for (let i = 0; i <= 100; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i);
    }

}

//9
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

//10
let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}

console.log("The sum is:", sum);

//11
let evensum = 0;
let oddsum = 0;

for (let i = 0; i <= 100; i++)
 {
    if(i % 2 === 0)
    {
        evensum = evensum + i;
    }
    else
    {
        oddsum = oddsum + i;
    }
 }
 console.log("Sum of evens:", evensum);
console.log("Sum of odds:", oddsum);

//12
let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}

const sumsArray = [sumEvens, sumOdds];

console.log("Sum of evens and odds as array:", sumsArray);


//13
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(getRandomNumber(min, max));
    }
    return randomArray;
};

const randomNumbers = generateRandomArray(5, 1, 100);

console.log("Random numbers:", randomNumbers);

//14
const getRandomNumber1 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateUniqueRandomArray = (length, min, max) => {
    const uniqueRandomArray = [];

    while (uniqueRandomArray.length < length) 
    {
        const randomNumber = getRandomNumber1(min, max);
        if (!uniqueRandomArray.includes(randomNumber)) {
            uniqueRandomArray.push(randomNumber);
        }
    }

    return uniqueRandomArray;
};

const uniqueRandomNumbers = generateUniqueRandomArray(5, 1, 100);
console.log("Unique random numbers:", uniqueRandomNumbers);

//15
const generateRandomId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
};

const randomId = generateRandomId();

console.log("Random ID:", randomId);
