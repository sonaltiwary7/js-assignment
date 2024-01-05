//1
let a = [];
console.log(a);

//2
let subject = ["maths", "physics","chemistry", "biology", "computer", "hindi"];
console.log(subject[2]);

//3
let book = ["maths", "physics","chemistry", "biology", "computer", "hindi"];
console.log(book.length);

//4
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstItem = b[0];
console.log("First item:", firstItem);

let middleItem = b[Math.floor(b.length / 2)];
console.log("Middle item:", middleItem);

let lastItem = b[b.length - 1];
console.log("Last item:", lastItem);

//5
var mixed = [1, 'sonal', true, null, 4, "one"];

var arrayLength = mixed.length;

console.log("Array:", mixed);
console.log("Array length:", arrayLength);

//6
var itcompanies= ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7
var itcompanies= ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log( itcompanies);

//8
var itcompanies= ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("IT Companies:", itcompanies);

//9
var itcompanies= ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let first = itcompanies[0];
console.log("First item:", first);

let middle = itcompanies[Math.floor(itcompanies.length / 2)];
console.log("Middle item:", middle);

let last = itcompanies[itcompanies.length - 1];
console.log("Last item:", last);

//10
var itcompanies= ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("IT Companies:");
for (var i = 0; i < itcompanies.length; i++)
 {
  console.log(itcompanies[i]);
 }

//11
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log("IT Companies in Uppercase:");
for (var i = 0; i < itCompanies.length; i++) {
  var uppercase = itCompanies[i].toUpperCase();
  console.log(uppercase);
}

//12
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var sentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(sentence);

//13
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
function check(companyName) {
  var index = itCompanies.indexOf(companyName);

  if (index !== -1) {
    return companyName ;
  } else {
    return  companyName + 'company not found';
  }
}
console.log(check(infosys));

//14
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

function filter(companies) {
  var result = [];

  for (var i = 0; i < companies.length; i++) {
    var company = companies[i];
    
    if (company.toLowerCase().indexOf('o') === company.toLowerCase().lastIndexOf('o')) {
      result.push(company);
    }
  }

  return result;
}
var filteredCompanies = filter(itCompanies);
console.log("Filtered Companies:", filteredCompanies);

//15
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.sort();
console.log("Sorted IT Companies:", itCompanies);

//16
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.reverse();
console.log(itCompanies);

//17
var itcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var firstThreeCompanies = itcompanies.slice(0, 3);
console.log("First Three IT Companies:", firstThreeCompanies);

//18
var itcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var lastThreeCompanies = itcompanies.slice(6, 3);
console.log("First Three IT Companies:", lastThreeCompanies);

//19
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var middleIndex = Math.floor(itCompanies.length / 2);
var middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1); 
console.log("Middle IT Company or Companies:", middleCompanies);

//20
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.shift();
console.log("IT Companies after removing the first one:", itCompanies);

//21
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log("IT Companies after removing the middle one:", itCompanies);

//22
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.pop();
console.log("IT Companies after removing the last one:", itCompanies);

//23
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
