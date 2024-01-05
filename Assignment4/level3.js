//question 1
let month = prompt("enter your month");
if(month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december'){
    console.log(`${month} has 31 days`);
} else if(month === 'april' || month === 'june' || month === 'september' || month === 'november')
{
    console.log(`${month} has 30 days`);
} else if(month === 'february')
{
    console.log(`${month} has 28 days`);
}

//2
let month1 = prompt("enter your month");
if(month1 === 'january' || month1 === 'march' || month1 === 'may' || month1 === 'july' || month1 === 'august' || month1 === 'october' || month1 === 'december'){
    console.log(`${month1} has 31 days`);
} else if(month1 === 'april' || month1 === 'june' || month1 === 'september' || month1 === 'november')
{
    console.log(`${month1} has 30 days`);
} else if(month1 === 'february')
{
    console.log(`${month1} has 29 days`);
}