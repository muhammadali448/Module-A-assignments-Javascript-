console.log('Connected');
// Task 1
document.write('<strong>Task 1</strong>');
var age = Number(prompt('Enter your age (Task 1 age)'));
var isAge = age > 18;
switch (isAge) {
  case true:
    document.write('<p>Old enough</p>');
    break;
  default:
    document.write('<p>Too young</p>');
}

// Task 2
document.write('<strong>Task 2</strong>');
var inputNumber = Number(prompt('Enter number to check divisble by 3'));
// var check = inputNumber % 3 === 0; 
switch (inputNumber % 3) {
  case 0:
    document.write(`<p>${inputNumber} is divisble by 3</p>`);
    break;
  default:
    document.write(`<p>${inputNumber} is not divisble by 3</p>`);
}

// Task 3
document.write('<strong>Task 3</strong>');
var number1 = Number(prompt('Enter number 1'));
var number2 = Number(prompt('Enter number 2'));
var operation = prompt('Enter operation +, -, *, /, %');
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

// Task 4
document.write('<strong>Task 4</strong>');
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDate = new Date();
var currentDay = currentDate.getDay();
switch(currentDay){
  case 0 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 1 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 2 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 3 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 4 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 5 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 6 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
}

// Task 5
document.write('<strong>Task 5</strong>');
switch(currentDay){
  case 0 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  case 6 :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]}</p>`);
  break;
  default :
  document.write(`<p>Current day of week is: ${dayNames[currentDay]} (neither Saturday nor Sunday)</p>`);
}

// Task 6
document.write('<strong>Task 6</strong>');
function checkCar() {
  var text;
  var favCar = prompt("What is your favorite car?");
  switch (favCar) {
    case 'BMW':
      text = 'German car';
      break;
    case 'Peugeot':
      text = 'French car';
      break;
    case 'Ford':
      text = 'French car';
      break;
    default:
      text = 'Unknown car name';
  }
  document.write(`<p>favorite car is: ${text}</p>`);
}
checkCar();

// Task 7
document.write('<strong>Task 7</strong>');
function checkFruit() {
  var text2;
  var fruits = prompt("Enter a fruit name");
  switch (fruits) {
    case "Banana":
      text2 = "Banana is good!";
      break;
    case "Orange":
      text2 = "I am not a fan of orange.";
      break;
    case "Apple":
      text2 = "How you like them apples?";
      break;
    default:
      text2 = "I have never heard of that fruit.";
  }
  document.write(`<p>favorite fruit is: ${text2}</p>`);
}
checkFruit();

// Task 8
document.write('<strong>Task 8</strong>');
function checkGrade(grade) {
  var range;
  switch (grade) {
    case 'a':
      range = 'Marks [>= 87 and <= 100]';
      break;
    case 'b+':
      range = 'Marks [>= 80 and <= 86]';
      break;
    case 'b':
      range = 'Marks [>= 72 and <= 79]';
      break;
    case 'c+':
      range = 'Marks [>= 66 and <= 71]';
      break;
    case 'c':
      range = 'Marks [>= 60 and <= 65]';
      break;
    case 'd':
      range = 'Marks [>= 50 and <= 59]';
      break;
    default:
      range = 'Invalid grade';
  }
  document.write(`<p>Grade is: ${grade} and range is: ${range}</p>`);
}
var userGrade = prompt('Enter your grade (Find range)');
checkGrade(userGrade.toLowerCase());

// Task 9
document.write('<strong>Task 9</strong>');
function findMonth(monthNumber) {
  var monthName;
  switch (monthNumber) {
    case 1:
      monthName = 'January';
      break;
    case 2:
      monthName = 'Febuary';
      break;
    case 3:
      monthName = 'March';
      break;
    case 4:
      monthName = 'April';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'June';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'August';
      break;
    case 9:
      monthName = 'September';
      break;
    case 10:
      monthName = 'October';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'December';
      break;
    default:
      monthName = 'Invalid month';
  }
  document.write(`<p>Month no is: ${monthNumber} and month name is: ${monthName}</p>`);
}
var monthNumber = Number(prompt('Enter month (number)'));
findMonth(monthNumber);

// Task 10
document.write('<strong>Task 10</strong>');
function isVoteable(ageVote) {
  var voteable;
  ageVote < 18 ? voteable = 'Too young' : voteable = 'Old enough';
  document.write(`<p>Age is ${ageVote}, you are ${voteable} to cast your vote</p>`);
}
var ageVote = Number(prompt('Enter your age (Voteable or not)'));
isVoteable(ageVote);

// Task 11
document.write('<strong>Task 11</strong>');
document.write('<p>');
document.write('Using while loop<br>');
var i = 0;
while(i < 5) {
  document.write('Hello World<br>');
  i++;
}
document.write('<br>Using Do while loop<br>');
var j = 0;
do {
  document.write('Hello World<br>');
  j++;
}while(j < 5);
document.write('</p>');

// Task 12
document.write('<strong>Task 12</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 0;
while(i < 10){
  document.write(`${i + 1}<br>`);
  i++;
}
document.write('<br>Using Do while loop<br>');
i = 0;
do {
  document.write(`${i + 1}<br>`);
  i++;
}while(i < 10);
document.write('</p>');

// Task 13
document.write('<strong>Task 13</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 1;
var tableNumber = prompt('Enter table you want to display');
var tableLength = prompt('Enter table length');
document.write(`Multiplication table of ${tableNumber}<br>Length ${tableLength}<br>`);
while(i <= tableLength) {
  document.write(`${tableNumber} * ${i} = ${tableNumber * i}<br>`);
  i++;
}
document.write('<br>Using Do while loop<br>');
i = 1;
do {
  document.write(`${tableNumber} * ${i} = ${tableNumber * i}<br>`);
  i++;
}while(i <= tableLength);
document.write('</p>');

// Task 14
document.write('<strong>Task 14</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 0;
var a = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
while(i < a.length) {
  document.write(`${a[i]}<br>`);
  i++;
}
document.write('<br>Using Do while loop<br>');
i = 0;
do {
  document.write(`${a[i]}<br>`);
  i++;
}while(i < a.length);
document.write('</p>');

// Task 15
document.write('<strong>Task 15</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 0;
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
while(i < fruits.length){
  document.write(`${fruits[i]}<br>`);
  i++;
}
document.write('<br><br>');
i = 0;
while(i < fruits.length) {
  document.write(`Element at index ${i} is ${fruits[i]}<br>`);
  i++;
}
document.write('<br>Using Do while loop<br>');
i = 0;
do {
  document.write(`${fruits[i]}<br>`);
  i++;
}while(i < fruits.length);
document.write('<br><br>');
i = 0;
do {
  document.write(`Element at index ${i} is ${fruits[i]}<br>`);
  i++
}while(i < fruits.length);
document.write('</p>');

// Task 16
document.write('<strong>Task 16</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 0;
var items = [];
var itemLength = Number(prompt('Enter number of items'));
while(i < itemLength){
  items[i] = prompt(`Enter value for index ${i}`);
  i++;
}
document.write(`Number of items: ${itemLength}<br>Items:<br><br>`);
i = 0;
while(i < itemLength){
  document.write(`${items[i]}<br>`);
  i++;
}
document.write('<br>Using Do while loop<br>');
i = 0;
do {
  items[i] = prompt(`Enter value for index ${i}`);
  i++;
}while(i < itemLength);
document.write(`Number of items: ${itemLength}<br>Items:<br><br>`);
i = 0;
do {
  document.write(`${items[i]}<br>`);
  i++;
}while(i < itemLength);
document.write('</p>');

// Task 17
document.write('<strong>Task 17</strong>');
document.write('<p>');
document.write('Using while loop<br>');
i = 0;
document.write('<strong>Counting:</strong><br><br>');
while(i <= 15){
  document.write(`${i},`);
  i++;
}
document.write('<br><br><strong>Reverse counting</strong><br><br>');
i = 10;
while(i >= 1){
  document.write(`${i},`);
  i--;
}
document.write('<br><br><strong>Even:</strong><br><br>');
i = 0;
while(i <= 20){
  document.write(`${i},`);
  i = i + 2;
}
document.write('<br><br><strong>Odd:</strong><br><br>');
i = 1;
while(i < 20) {
  document.write(`${i},`);
  i = i + 2;
}
document.write('<br><br><strong>Series:</strong><br><br>');
i = 2;
while(i <= 20){
  document.write(`${i}k,`);
  i = i + 2;
}
document.write('<br><br><br>Using Do while loop<br>');
i = 0;
document.write('<strong>Counting:</strong><br><br>');
do {
  document.write(`${i},`);
  i++;
}while(i <= 15);
document.write('<br><br><strong>Reverse counting</strong><br><br>');
i = 10;
do {
  document.write(`${i},`);
  i--;
}while(i >= 1);
document.write('<br><br><strong>Even:</strong><br><br>');
i = 0;
do {
  document.write(`${i},`);
  i = i + 2;
}while(i <= 20);
document.write('<br><br><strong>Odd:</strong><br><br>');
i = 1;
do {
  document.write(`${i},`);
  i = i + 2;
}while(i < 20);
document.write('<br><br><strong>Series:</strong><br><br>');
i = 2;
do {
  document.write(`${i}k,`);
  i = i + 2;
}while(i <= 20);
document.write('</p>');

// Task 18
document.write('<strong>Task 18</strong>');
document.write('<p>');
document.write('Using while loop<br>');
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInputB = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?').toLowerCase();
var isItemAvail = false;
i = 0;
while(i < a.length){
  if (userInputB === a[i]) {
    document.write(`${a[i]} is available at index ${i} in our bakery`);
    isItemAvail = true;
  }
  i++;
}
if (isItemAvail === false) {
  document.write(`We are sorry. ${userInputB} is <strong>not available</strong> in our bakery`);
}
document.write('<br><br>Using Do while loop<br>');
isItemAvail = false;
i = 0;
do {
  if (userInputB === a[i]) {
    document.write(`${a[i]} is available at index ${i} in our bakery`);
    isItemAvail = true;
  }
  i++;
}while(i < a.length);
if (isItemAvail === false) {
  document.write(`We are sorry. ${userInputB} is <strong>not available</strong> in our bakery`);
}
document.write('</p>');

// Task 19
document.write('<strong>Task 19</strong>');
var students = ['Ali', 'Sami', 'Taha', 'Inam'];
var scores = [58, 73, 89, 90];
document.write('<div>Using while loop<br><table border = 1><thead><tr><th scope = "col">Students</th><th scope = "col">Scores</th></tr></thead><tbody>');
i = 0;
while(i < 4){
  document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`);
  i++;
}
document.write('</tbody></table>');
document.write('<br><br>Using Do while loop<br>');
document.write('<table border = 1><thead><tr><th scope = "col">Students</th><th scope = "col">Scores</th></tr></thead><tbody>');
i = 0;
do {
  document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`);
  i++;
}while(i < 4);
document.write('</tbody></table>');
document.write('</div>');

// Task 20
document.write('<br><strong>Task 20</strong>');
var scoresArray = [12, 45, 3, 22, 34, 50];
var stopValue = Number(prompt(`Enter stop value for ${scoresArray.toString()}`));
var scoreNewArr;
i = 0;
while(i < scoresArray.length){
  if (stopValue === scoresArray[i]) {
    scoreNewArr = scoresArray.slice(0, i + 1);
  }
  i++;
}
document.write(`<div>Using while loop<br>Original array: ${scoresArray.toString()}<br>
Stop value: ${stopValue}<br>
Array after entering stop value: ${scoreNewArr.toString()}`);
document.write('<br><br>Using Do while loop<br>');
i = 0;
do {
  if (stopValue === scoresArray[i]) {
    scoreNewArr = scoresArray.slice(0, i + 1);
  }
  i++;
}while(i < scoresArray.length);
document.write(`Original array: ${scoresArray.toString()}<br>
Stop value: ${stopValue}<br>
Array after entering stop value: ${scoreNewArr.toString()}</div>`);

// Task 21
document.write('<br><strong>Task 21</strong>');
var matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
document.write('<p>Using while loop<br>');
i = 0;
while(i < matrixArray.length){
  j = 0;
  while(j < matrixArray[i].length){
    document.write(`${matrixArray[i][j]} `);
    j++;
  }
  document.write('<br>');
  i++;
}
document.write('<br><br>Using Do while loop<br>');
i = 0;
do {
  j = 0;
  do {
    document.write(`${matrixArray[i][j]} `);
    j++;
  }while(j < matrixArray[i].length);
  document.write('<br>');
  i++; 
}while(i < matrixArray.length);
document.write('</p>');

// Task 22
document.write('<strong>Task 22</strong>');
var userInputD = Number(prompt('Enter a number'));
document.write('<p>Using while loop<br>');
i = userInputD;
while(i >= 0){
  document.write(`${i}, `);
  i -= .5;
}
document.write('<br><br>Using Do while loop<br>');
i = userInputD;
do {
  document.write(`${i}, `);
  i -= .5;
}while(i >= 0);
document.write('</p>');

// Task 23
document.write('<strong>Task 23</strong>');
document.write('<p>Using while loop<br>');
i = 0;
while(i <= 20) {
  if (i % 2 === 0) {
    document.write(`${i} is even<br>`);
  } else {
    document.write(`${i} is odd<br>`);
  }
  i++;
}
document.write('<br><br>Using Do while loop<br>');
i = 0;
do {
  if (i % 2 === 0) {
    document.write(`${i} is even<br>`);
  } else {
    document.write(`${i} is odd<br>`);
  }
  i++
}while(i <= 20);
document.write('</p>');

// Task 24
document.write('<strong>Task 24</strong>');
var oddProduct = 1;
i = 1;
while(i <= 7) {
  oddProduct *= i;
  i += 2;
}
document.write('<p>Using while loop<br>');
document.write(`The product of the odd integers from 1 to 7 is ${oddProduct}`);
document.write('<br><br>Using Do while loop<br>');
i = 1;
oddProduct = 1;
do {
  oddProduct *= i;
  i += 2;
}while(i <= 7);
document.write(`The product of the odd integers from 1 to 7 is ${oddProduct}</p>`);

// Task 25
document.write('<strong>Task 25</strong>');
var userInputStar = Number(prompt('Enter no to print stars', 7));
document.write('<div>Using while loop<br>');
i = userInputStar;
while(i > 0) {
  j = 0;
  while(j < i) {
    document.write('*');
    j++;
  }
  document.write('<br>');
  i--;
}
document.write('<br><br>Using Do while loop<br>');
i = userInputStar;
do {
  j = 0;
  do {
    document.write('*');
    j++;
  }while(j < i);
  document.write('<br>');
  i--;
}while(i > 0);
document.write('</div>');

// Task 26
document.write('<br><strong>Task 26</strong>');
var inputNoLines = Number(prompt('Enter no of lines'), 5);
document.write('<div>Using while loop<br>');
document.write('<strong>a.</strong><br>')
i = 0;
while(i < inputNoLines - 1){
  j = 0;
  while(j < inputNoLines){
    document.write('*');
    j++;
  }
  document.write('<br>');
  i++;
}
document.write('<br>.<strong>b.</strong>');
i = 0;
while(i <= inputNoLines){
  j = 0;
  while(j < i) {
    document.write('*');
    j++
  }
  document.write('<br>');
  i++;
}
document.write('<br><strong>c.</strong><br>');
i = inputNoLines;
while(i > 0) {
  j = 0;
  while(j < i) {
    document.write('*');
    j++;
  }
  document.write('<br>');
  i--;
}
document.write('<br><br>Using Do while loop<br>');
document.write('<strong>a.</strong><br>')
i = 0;
do {
  j = 0;
  do {
    document.write('*');
    j++;
  }while(j < inputNoLines);
  document.write('<br>');
  i++;
}while(i < inputNoLines - 1);
document.write('<br>.<strong>b.</strong><br>');
i = 1;
do {
  j = 0;
  do {
    document.write('*');
    j++
  }while(j < i);
  document.write('<br>');
  i++;
}while(i <= inputNoLines);
document.write('<br><strong>c.</strong><br>');
i = inputNoLines;
do {
  j = 0;
  do {
    document.write('*');
    j++;
  }while(j < i);
  document.write('<br>');
  i--;
}while(i > 0);
document.write('</div>');