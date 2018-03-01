console.log('connected');

// Task 1
document.write('<strong>Task 1</strong>');
var name;
function getName() {
  return name;
}
function setName(name) {
  this.name = name;
}
setName('Muhammad Ali');
document.write(`<p>My name is ${getName()}</p>`);

// Task 2
document.write('<strong>Task 2</strong>');
function displayTimeDate() {
  var current = new Date();
  document.write(`<p>Current date and time: ${current}</p>`);
}
displayTimeDate();

// Task 3
document.write('<strong>Task 3</strong>');
function getFullName(firstName, lastName) {
  document.write(`<p>Welcome to Bahria University ${firstName} ${lastName}</p>`);
}
getFullName('Muhammad', 'Ali');

// Task 4
document.write('<strong>Task 4</strong>');
function sumTwoNo(no1, no2) {
  return no1 + no2;
}
var no1 = Number(prompt('Enter 1st no (Addition)'));
var no2 = Number(prompt('Enter 2nd no (Addition)'));
document.write(`<p>Addition of ${no1} + ${no2} = ${sumTwoNo(no1, no2)}</p>`);

// Task 5
document.write('<strong>Task 5</strong>');
function calculateOperations(number1, number2, operation) {
  switch (operation) {
    case '+':
      document.write(`<p>${number1} + ${number2} = ${number1 + number2}</p>`);
      break;
    case '-':
      document.write(`<p>${number1} - ${number2} = ${number1 - number2}</p>`);
      break;
    case '*':
      document.write(`<p>${number1} * ${number2} = ${number1 * number2}</p>`);
      break;
    case '/':
      document.write(`<p>${number1} / ${number2} = ${number1 / number2}</p>`);
      break;
    case '%':
      document.write(`<p>${number1} % ${number2} = ${number1 % number2}</p>`);
      break;
    default:
      document.write(`<p>${operation} is not a correct operation</p>`);
  }
}
calculateOperations(5, 7, '*');

// Task 6
document.write('<strong>Task 6</strong>');
function squares(no1) {
  return no1 * no1;
}
var squareNo = Number(prompt('Enter any no (square)'));
document.write(`<p>Square of ${squareNo} is ${squares(squareNo)}</p>`);

// Task 7
document.write('<strong>Task 7</strong>');
document.write('<p>');
function counter(startNo, endNo) {
  for(var i = startNo; i <= endNo; i++){
    document.write(`${i}<br>`);
  }
}
counter(5, 10);
document.write('</p>');

// Task 8
document.write('<strong>Task 8</strong>');
function calculateArguments() {
  document.write(`<p>Arguments length: ${arguments.length}</p>`);
}
calculateArguments('name', 3, true, 5, 7);

// Task 9
document.write('<strong>Task 9</strong>');
function calculateMaxNo() {
  var largeNo = arguments[0];
  for (var i = 0; i < arguments.length; i++){
    if(largeNo < arguments[i]){
      largeNo = arguments[i];
    }
  }
  document.write(`<p>Largest number in arguments is: ${largeNo}</p>`);
}
calculateMaxNo(2, 5, 10, 91, 1, 92, 100, 3);

// Task 10
document.write('<strong>Task 10</strong>');
function calculateAreaOfRectangle(width, height){
  return width * height;
}
var width = 25;
var height = 10;
document.write(`<p>Area of rectangle (arguments): ${calculateAreaOfRectangle(2, 5)}<br>
Area of rectangle (variables): ${calculateAreaOfRectangle(width, height)}</p>`);

// Task 11
document.write('<strong>Task 11</strong>');
function sortArray(arr){
  return arr.sort();
}
var arrWithoutSort = [2, 5, 3, 1, 4];
document.write(`<p>Array without sort: ${arrWithoutSort.toString()}<br>
Array with sort: ${sortArray(arrWithoutSort).toString()}</p>`);

// Task 12
document.write('<strong>Task 12</strong>');
function calculateSum(arr){
  var sum = 0; 
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
var arrForSum = [3, 4, 1, 4, 4, 6, 7, 10];
document.write(`<p>Sum of ${arrForSum.toString()} is: ${calculateSum(arrForSum)}</p>`);

// Task 13
document.write('<strong>Task 13</strong>');
var param = function inner() { 
  return typeof inner; 
}
document.write(`<p>type of inner function: ${param()}</p>`); 

// Task 14
document.write('<strong>Task 14</strong>');
function calculatePower(base, power){
  return Math.pow(base, power);
}
var base = 2;
var power = 3;
document.write(`<p>Power of ${base} ^ ${power} = ${calculatePower(base, power)}</p>`);

// Task 15
document.write('<strong>Task 15</strong>');
function calculateDiceRandom(){
  var generateRandomDice = Math.floor(Math.random() * 6) + 1;
  return generateRandomDice;
}
document.write(`<p>Dice selected number (1-6) is ${calculateDiceRandom()}</p>`);

// Task 16
document.write('<strong>Task 16</strong>');
function reverseNumber(number){
  number.toString();
  var numStr = number.toString();
  var reverseNum = '';
  for (var i = numStr.length - 1; i >= 0; i--){
    reverseNum += numStr[i];
  }
  return reverseNum;
}
var numWR = 23145;
document.write(`<p>Number without reverse: ${numWR}<br>
Number with reverse: ${reverseNumber(numWR)}</p>`);

// Task 17
document.write('<strong>Task 17</strong>');
function convertStrCapitalized(enterStrNor) {
  var enterStr = enterStrNor.split(' ');
  document.write(`<p>User String: ${enterStrNor}<br>Convert Capitalized String: `);
  for (var i = 0; i < enterStr.length; i++) {
    document.write(`${enterStr[i].charAt(0).toUpperCase() + enterStr[i].slice(1)} `);
  }
  document.write('</p>');
}
var enterStrNor = prompt('Enter any String');
convertStrCapitalized(enterStrNor);

// Task 18
document.write('<strong>Task 18</strong>');
function findLongestStr(enterStr) {
  enterStr = enterStr.split(' ');
  var maxLength = enterStr[0].length;
  var longStr = enterStr[0];
  for (var i = 0; i < enterStr.length; i++) {
    if (maxLength < enterStr[i].length) {
      maxLength = enterStr[i].length;
      longStr = enterStr[i];
    }
  }
  return longStr;
}

document.write(`<p>Input String: ${enterStrNor}<br>
Longest Substring is: ${findLongestStr(enterStrNor)}</p>`);

// Task 19
document.write('<strong>Task 19</strong>');
function findVowels(userEnterStr) {
  var checkVowel = false;
  var countVowels = 0;
  for(var i = 0; i < userEnterStr.length; i++) {
    if (userEnterStr.charAt(i) == 'a' || userEnterStr.charAt(i) == 'e' || userEnterStr.charAt(i) == 'i' || userEnterStr.charAt(i) == 'o' || userEnterStr.charAt(i) == 'u') {
      countVowels++;
    }
  }
  return countVowels;
}
var userEnterStr = prompt('Enter a string (find vowels)');
document.write(`<p>User input string: ${userEnterStr}<br>
No of vowels is: ${findVowels(userEnterStr)}</p>`);