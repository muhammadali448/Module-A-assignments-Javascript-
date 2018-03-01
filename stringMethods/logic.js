// console.log('connected js....');

// Task 1
var firstName = prompt('Enter First name');
var lastName = prompt('Enter Last name');
var fullName = `${firstName} ${lastName}`;
alert(fullName);

// Task 2
var mobileModel = prompt('Enter favorite mobile phone model');
document.write(`<p>My favorite phone is: ${mobileModel}<br>
Length of string: ${mobileModel.length}</p>`);

// Task 3
var country = 'Pakistani';
document.write(`<p>String: ${country}<br>
Index of 'n': ${country.indexOf('n')}</p>`);

// Task 4
var helloWorld = 'Hello World';
document.write(`<p>String: ${helloWorld}<br>
Last index of 'l': ${helloWorld.lastIndexOf('l')}</p>`);

// Task 5
document.write(`<p>String: ${country}<br>
Character at index 3: ${country.charAt(3)}</p>`);

// Task 6
firstName += ' ';
alert(firstName.concat(lastName));

// Task 7
var city = 'Hyderabad';
document.write(`<p>City: ${city}<br>
After replacement: ${city.replace('Hyder', 'Islam')}</p>`);

// Task 8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write(`<p>Message: ${message}<br>
After replacement: ${message.replace(/and/g, '&')}</p>`);

// Task 9
var str = '472';
var num = Number(str);
document.write(`Value: ${str}<br>
Type: ${typeof (str)}<br>
Value: ${num}<br>
Type: ${typeof (num)}`);

// Task 10
var url = prompt('Enter any URL');
var domain = url.substr(4);
document.write(`<p>URL: ${url}<br>
Domain: ${domain}</p>`);

// Task 11
var userInputLower = prompt('Enter any word (Lower Case)');
document.write(`<p>User input: ${userInputLower}<br>
Upper case: ${userInputLower.toUpperCase()}</p>`);

// Task 12
var userInputUpper = prompt('Enter any word (Upper Case)');
document.write(`<p>User input: ${userInputUpper}<br>
Lower case: ${userInputUpper.toLowerCase()}</p>`);

// Task 13
var userInputAny = prompt('Enter any word (Upper Case or Lower Case)');
document.write(`<p>User input: ${userInputAny}<br>
Title case: ${userInputAny[0].toUpperCase() + userInputAny.slice(1)}</p>`);

// Task 14
var numDot = 35.36;
var strWD = String(numDot); // convert this number into String
document.write(`<p>Number: ${numDot}<br>
Result: ${strWD.replace('.', '')}</p>`);

// Task 15
var a = '3';
var b = '3';
var x = a + b;
document.write(`<p>a is ${a}<br>
b is ${b}<br>
a + b is ${x}</p>`)

// Task 16 
var y = Number(a) - Number(b);
document.write(`<p>a is ${a}<br>
b is ${b}<br>
a - b is ${y}</p>`);

// Task 17
function isUserNameValid(userName) {
  for (var i = 0; i < userName.length; i++) {
    if (userName.charCodeAt([i]) === 33 || userName.charCodeAt([i]) === 44 ||
      userName.charCodeAt([i]) === 46 || userName.charCodeAt([i]) === 64) {
      return false;
    }
  }
  return true;
}
var userName = prompt('Enter a user name');
do {
  if (isUserNameValid(userName)) {
  } else {
    userName = prompt('Please enter a valid user name');
  }
} while (isUserNameValid(userName) === false);
if (isUserNameValid(userName)) {
  alert(`${userName} is valid`);
}

// Task 18
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInputB = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?').toLowerCase();
var isItemAvail = false;
for (var i = 0; i < a.length; i++) {
  if (userInputB === a[i]) {
    document.write(`<p>${a[i]} is available at index ${i} in our bakery`);
    isItemAvail = true;
  }
}
if (isItemAvail === false) {
  document.write(`<p>We are sorry. ${userInputB} is <strong>not available</strong> in our bakery</p>`);
}

// Task 19
var strVar = prompt('Enter 1st string');
var strVar2 = prompt('Enter 2nd string');
if(strVar > strVar2){
  document.write(`${strVar} is greater than ${strVar2}`);
}else if(strVar2 > strVar){
  document.write(`${strVar2} is greater than ${strVar}`);
}else{
  document.write(`${strVar} and ${strVar2} are equal in comparison`);
}

// Task 20
var str = 'ali';
str.charCodeAt
var isValid = false;
while(!isValid){
var userPassword = prompt('Enter user password');
if (userPassword.charAt(0) >= '0' && userPassword.charAt(0) <= '9') {
  alert('Password can\'t begin with a number');
  isValid = false;
} else if (userPassword.length < 6) {
  alert('Password length should be greater than 6');
  isValid = false;
}
else {
  for (var i = 0; i < userPassword.length; i++) {
    if ((userPassword.charCodeAt(i) >= 65 && userPassword.charCodeAt(i) <= 90) ||
      (userPassword.charCodeAt(i) >= 97 && userPassword.charCodeAt(i) <= 122) ||
       (userPassword.slice(1).charCodeAt(i) >= 0 && userPassword.slice(1).charCodeAt(i) <=9)){
        isValid = true;
    }else{
      break;
    }
  }
}
}
if(isValid){
  alert('Valid Password');
}
if(!isValid){
  alert('Incorrect Password');
}

// Task 21
var university = 'Bahria University';
var newUniversity = university.split('');
for(var i = 0; i < newUniversity.length; i++){
  document.write(`<p>${newUniversity[i]}</p>`);
}

// Task 22
var lastInput = prompt('Enter any word to find its last character');
document.write(`<p>User input: ${lastInput}<br>
Last character of input: ${lastInput.slice(lastInput.length - 1)}</p>`);

// Task 23
var text = 'The quick brown fox jumps over the lazy dog';
var newText = text.split(' ');
var counter = 0;
for(var i = 0; i < newText.length; i++){
  if(newText[i].toLowerCase() == 'the'){
    counter++;
  }
}
document.write(`Text: ${text}<br>
There are ${counter} occurrence(s) of the word 'the'`);

// Task 24
var strr = 'Pakistan'.toLowerCase();
var vowels = 0;
var consonants = 0;
for(var i = 0; i < strr.length; i++){
  if(strr.charAt(i) == 'a' || strr.charAt(i) == 'e' || strr.charAt(i) == 'i' || strr.charAt(i) == 'o' || strr.charAt(i) == 'u'){
    vowels++;
  }else{
    consonants++;
  }
}
document.write(`<p>Text: ${strr}<br>
There are ${vowels} vowels and ${consonants} consonants</p>`);

