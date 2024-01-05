//1
let score = prompt("enter your score");
if(score >= 80 && score <= 100){
    return  'A';
} else if(score >= 70  && score <= 89){
    return 'B';
} else if(score >= 60  && score <= 69){
    return 'C';
} else if(score >= 50  && score <= 59){
    return  'D';
} else if(score >=40){
    return 'F';
}

//2
let userInput = prompt("enter any month"); 
let month = new Date(Date.parse(userInput + " 1, 2023")).getMonth() + 1; 

let season = getSeason(month);
console.log("The season is " + season);
function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

//3
let userInput1 = prompt("enter any month"); 
let day = new Date(Date.parse(userInput + " 1, 2023")).getDay() + 1; 


function getDay(day) {
    if (day == 'sunday' && day == 'saturday') {
        return "weekend";
    } else {
        return "working day";
    }
}
