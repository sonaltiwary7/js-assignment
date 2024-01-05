//question 1
let age = prompt("enter your age:");
    if(age>= 18)
{
    console.log("You are old enough to drive");
 } else{
    let yearswait = 18 - age;
        console.log(`you are left with ${yearswait} years until to drive.`);
    }

//question 2
let yourage = prompt("enter your age:");
let myage = 21;
if(yourage > myage){
    let older = yourage - myage;
    console.log(`you are ${older} years older than me.`);
} else if(yourage <= myage){
        let younger = myage- yourage;
        console.log(`you are ${younger} years older than me.`);
} else {
    console.log("we are of same age");
}

//question 3
let a = prompt("enter value of a:"); //using if else
let b = prompt("enter value of b:");
if(a > b){
    console.log("a is greater than b");
} else{
    console.log("b is greater than a")
}

let a1 = prompt("enter value of a1:"); //using ternary operator
let b1 = prompt("enter value of b1:");
(a1 > b1)?
console.log("a is greater than b"): console.log("b is greater than a");

//question 4
let num = prompt("enter a number:");
if(num % 2 == 0){
    console.log(`${num} is an even number.`);
} else{
    console.log(`${num} is an odd number`);
}


