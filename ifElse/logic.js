console.log('Connected');
// Task 1
var inputNumber = prompt('Enter number to check divisble by 3');
var number = inputNumber % 3;
console.log(typeof (number));
if (inputNumber % 3 === 0) {
  alert(`${inputNumber} is divisble by 3`);
} else {
  alert(`${inputNumber} isn't divisble by 3`);
}

// Task 2
var checkEO = prompt("Enter number to check even or odd");
if (checkEO % 2 === 0) {
  alert(`${checkEO} is an even number`);
} else {
  alert(`${checkEO} is an odd number`);
}

// Task 3
var ageInput = prompt("Enter your age");
if (ageInput > 18) {
  alert(`Old enough`);
} else {
  alert(`Too young`);
}

// Task 4
var userName = prompt('Enter your name');
if (userName === "Muhammad Ali") {
  alert(`${userName} Welcome to Bahria University`);
}

// Task 5
var inputNumber = Number(prompt('Enter number to check divisble by 3'));
// var check = inputNumber % 3 === 0; 
switch (inputNumber % 3) {
  case 0:
    alert(`${inputNumber} is divisble by 3`);
    break;
  default:
    alert(`${inputNumber} is not divisble by 3`);
}

// Task 6
var inputCheckNS = prompt('Enter only one character (number, upper, lower string');
if (inputCheckNS.charAt(0) >= 0 && inputCheckNS.charAt(0) <= 9) {
  alert(`${inputCheckNS} is a number`);
} else if (inputCheckNS.charCodeAt(0) >= 65 && inputCheckNS.charCodeAt(0) <= 90) {
  alert(`${inputCheckNS} is upper case letter`);
} else if (inputCheckNS.charCodeAt(0) >= 97 && inputCheckNS.charCodeAt(0) <= 122) {
  alert(`${inputCheckNS} is lower case letter`);
}

// Task 7
var number1 = Number(prompt('Enter number 1'));
var number2 = Number(prompt('Enter number 2'));
var operation = prompt('Enter operation +, -, *, /, %');
switch (operation) {
  case '+':
    alert(`${number1} + ${number2} = ${number1 + number2}`);
    break;
  case '-':
    alert(`${number1} - ${number2} = ${number1 - number2}`);
    break;
  case '*':
    alert(`${number1} * ${number2} = ${number1 * number2}`);
    break;
  case '/':
    alert(`${number1} / ${number2} = ${number1 / number2}`);
    break;
  case '%':
    alert(`${number1} % ${number2} = ${number1 % number2}`);
    break;
  default:
    alert(`${operation} is not a correct operation`);
}

// Task 8
var inputTime = Number(prompt('Enter time (1900 = 7pm'));
if (inputTime >= 0000 && inputTime < 1200) {
  alert('Good morning');
} else if (inputTime >= 1200 && inputTime < 1700) {
  alert("Good afternoon");
} else if (inputTime > 1700 && inputTime < 2100) {
  alert('Good evening');
} else if (inputTime >= 2100 && inputTime <= 2359) {
  alert('Good night');
}

// Task 9
var leapYear = prompt('Enter year to check leap or not (YYYY)');
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 4 === 0 && leapYear % 100 === 0 && leapYear % 400 === 0)) {
  alert(`${leapYear} is leap year`);
} else {
  alert(`${leapYear} is not a leap year`);
}

// Task 10
var savePassword = 'ali222';
var userPassword = prompt('Enter your password');
if (userPassword === '' || userPassword.indexOf(' ') >= 0) {
  alert('Please enter your password');
} else if (userPassword === savePassword) {
  alert('Correct! The password you entered matches the original password');
} else {
  alert('Incorrect password');
}

// Task 11
document.write('<strong>Task 11</strong>');
var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("<p>You are not Fahad</p>");
}

// Task 12
document.write('<strong>Task 12</strong>');
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}
document.write(`<p>${greeting}</p>`);

// Task 13
var no1 = Number(prompt('Enter 1st no'));
var no2 = Number(prompt('Enter 2nd no'));
if (no1 > no2) {
  alert(`${no1} > ${no2}`);
} else if (no1 < no2) {
  alert(`${no1} < ${no2}`);
} else {
  alert(`${no1} = ${no2}`);
}

// Task 14
var numberCheckNP = Number(prompt('Enter number to check negative and positive'));
if (numberCheckNP > 0) {
  alert('Positive number');
} else if (numberCheckNP < 0) {
  alert('Negative number');
} else {
  alert('Both 0 is a neutral number');
}

// Task 15
var hourInput = Number(prompt('Enter hour (format i.e. 14 for 2pm , 15 for 3pm)'));
if (hourInput >= 6 && hourInput <= 9) {
  alert('Breakfast is served.');
} else if (hourInput >= 11 && hourInput <= 13) {
  alert('Time for lunch.');
} else if (hourInput >= 17 && hourInput <= 20) {
  alert('It\'s dinner time.');
} else {
  alert('Sorry, you\'ll have to wait, or go get a snack.');
}

// Task 16
var checkVariable = true;
if (typeof (checkVariable) === 'string') {
  alert('It\'s a string');
} else if (typeof (checkVariable) === 'number') {
  alert('It\'s a number');
} else if (typeof (checkVariable) === 'undefined') {
  alert('It\'s undefined');
} else if (typeof (checkVariable) === 'boolean') {
  alert('It\'s a boolean');
}

// Task 17
var userEnterChar = prompt('Enter only one character');
var charUser = userEnterChar.slice(0, 1);
var checkVowel = false;
if (charUser.charAt(0) == 'a' || charUser.charAt(0) == 'e' || charUser.charAt(0) == 'i' || charUser.charAt(0) == 'o' || charUser.charAt(0) == 'u') {
  // alert(`${charUser} is a vowel`)
  checkVowel = true
}
else {
  alert(`${charUser} is not a vowel`);
}


// Task 18
if (10 !== 8) {
  alert('true');
} else {
  alert('false');
}

// Task 19
var monthNumber = Number(prompt('Enter month (number)'));
switch (monthNumber) {
  case 1:
    alert('January');
    break;
  case 2:
    alert('Febuary');
    break;
  case 3:
    alert('March');
    break;
  case 4:
    alert('April');
    break;
  case 5:
    alert('May');
    break;
  case 6:
    alert('June');
    break;
  case 7:
    alert('July');
    break;
  case 8:
    alert('August');
    break;
  case 9:
    alert('September');
    break;
  case 10:
    alert('October');
    break;
  case 11:
    alert('November');
    break;
  case 12:
    alert('December');
    break;
  default:
    alert('Invalid month');
}

// Task 20
var age = 16;
var voteable;
age < 18 ? voteable = 'Too young' : voteable = 'Old enough';
alert(voteable);