//2
let txt ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = txt.split(' ');
console.log(words);

//3
//part1
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

//part2
const shopingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shopingCart.includes('Sugar')) {
    shopingCart.push('Sugar');
}
console.log(shopingCart);

//part3
const shoppingCart1 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart1.splice(3,1);
console.log(shoppingCart1);

//part4
const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart2[2]= 'green tea';
console.log(shoppingCart2);

//4
const countries = [ 'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya' ];
if (countries.includes('Ethiopia'))
 {
    console.log('ETHIOPIA');
}
else{
    countries.push('Ethiopia');
}

//5
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
if (webTechs.includes('Sass'))
 {
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Sass');
}
console.log(webTechs);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


