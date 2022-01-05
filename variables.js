

const button = document.querySelector('button');
function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name);

console.log(`${greeting}, ${name}`);



//New stuff//
let hour = new Date().getHours();
let greetsing = 'Some Day';

if (hour < 10) {
    greetsing = "Good Morning";
} else if (hour < 20) {
    greetsing = "Good day";
} else {
    greetsing = "Good Evening";
}

console.log (greetsing);

const myNumber = Math.random();
console.log (myNumber);

const x = 1;

function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}

function add7 () {
    num1 = 5;
    num2 = 7;
    result = num1 = num2;
    console.log ("The result from Add7 funciton is " + result);
}

add7();

function multiply () {
    num1 = 10;
    num2 = 14;
    product = num1 * num2;
    console.log ("The product of multiply function is " + product);
}

multiply();

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log (capitalize("this is EPIC"));

function lastLetter(last) {
    return last.slice(-1);
}

console.log (lastLetter("how about those rabbits"));