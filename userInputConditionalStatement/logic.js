var name = prompt('Please enter your name');
alert(`Hi, ${name}`);

//===============================================

var table = prompt('Enter a number to print its multiplication table', 5);
document.write(`<h2>Multiplication table of ${table}</h2>`)
for (var i = 1; i < 11; i++) {
  console.log(table + ' * ' + i + ' = ' + (table * i));
  document.write(`<p>${table} * ${i} = ${table * i}</p>`);
}

var cityName = prompt('Please enter your city');
if (cityName.toLowerCase() === 'Karachi'.toLowerCase()) {
  alert('Welcome to city of lights');
}

var gender = prompt('Enter your gender');
if (gender.toLowerCase() === 'male') {
  alert('Good morning Sir');
} else if (gender.toLowerCase() === 'female') {
  alert('Good morning Ma\'am');
}


var signalColor = prompt('Enter signal color').toLowerCase();
if (signalColor === 'red') {
  alert('Vehicles must stop');
} else if (signalColor === 'yellow') {
  alert('vehicles should get ready to move');
} else if (signalColor === 'green') {
  alert('vehicles can move now');
}


var currentAge = prompt('Enter your current age');
var maxAge = prompt('Enter your max age');
if (currentAge <= maxAge) {
  alert('You are welcome');
}

var remainFule = Number(prompt('Enter remaining fuel in litres'));
if (remainFule < 0.25) {
  alert('Please refill the fuel in your car');
}


var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // true
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // false
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true"); // false
}
if (c === 13) {
  alert("condition 2 is true"); // false
}
if (++c < 14) {
  alert("condition 3 is true"); // 
}
if (c === 14) {
  alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost11 = materialCost + laborCost;
if (totalCost11 === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}


var subject1 = Number(prompt('Enter marks in subject 1'));
var subject2 = Number(prompt('Enter marks in subject 2'));
var subject3 = Number(prompt('Enter marks in subject 3'));
var totalMarks = Number(prompt('Enter total marks'));
var obtainMarks = subject1 + subject2 + subject3;
var percentage = (obtainMarks / totalMarks) * 100;
var grade = '';
var remarks = ''
if (percentage >= 80) {
  grade = 'A-one';
  remarks = 'Excellent';
} else if (percentage >= 70) {
  grade = 'A';
  remarks = 'Good';
} else if (percentage >= 60) {
  grade = 'B';
  remarks = 'You need to improve';
} else {
  grade = 'Fail';
  remarks = 'Sorry';
}

document.write(`<h3>Marks Sheet</h3><br>
<p>Total marks: ${totalMarks}<br>
Marks obtained: ${obtainMarks}<br>
Percentage: ${percentage}%<br>
Grade: ${grade}<br>
Remarks: ${remarks}</p>`);


var item1Name = prompt('Enter Item 1 name');
var item1Price = Number(prompt(`Enter ${item1Name} price`));
var item1Quantity = Number(prompt(`Enter quantity of ${item1Name}`));
var item2Name = prompt('Enter Item 2 name');
var item2Price = Number(prompt(`Enter ${item2Name} price`));
var item2Quantity = Number(prompt(`Enter quantity of ${item2Name}`));
var shippingCharges = Number(prompt('Enter shipping charges'));
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
var discountPrice = 0;
if (totalCost > 2000) {
  discountPrice = totalCost - ((totalCost / 100) * 10);
}
document.write(`<h3>Shopping Cart</h3><p>Price of ${item1Name} is ${item1Price}<br>
Quantity of ${item1Name} is ${item1Quantity}<br>
Price of ${item2Name} is ${item2Price}<br>
Quantity of ${item2Name} is ${item2Quantity}<br><br>
Shipping Charges ${shippingCharges}<br><br>
Total cost of your order is ${totalCost} PKR<br>
Discounted Price is ${discountPrice}</p>`);

// guess number game
var guessNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = Number(prompt('Enter secret number ranging from 1 to 10'));
if (userNumber === guessNumber) {
  alert(`Bingo! Correct answer ${guessNumber}`);
} else if (userNumber === (guessNumber - 1) || userNumber === (guessNumber + 1)) {
  alert(`Close enough to the correct answer ${guessNumber}`);
} else {
  alert(`Wrong answer try next time secret number is ${guessNumber}`);
}

// divisible by 3
var divisibleCheck = Number(prompt('Enter number to check divisible by 3'));
if (divisibleCheck % 3 === 0) {
  alert(`${divisibleCheck} is divisble by 3`);
} else {
  alert(`${divisibleCheck} not divisble by 3`);
}

// Team A or Team B
var teamAName = prompt('Enter team A');
var teamAScore = Number(prompt(`Enter ${teamAName} score`));
var teamBName = prompt('Enter team B');
var teamBScore = Number(prompt(`Enter ${teamBName} score`));
if (teamAScore < teamBScore) {
  alert(`${teamBName} Won`);
} else if (teamAScore > teamBScore) {
  alert(`${teamAName} Won`);
} else {
  alert('Match Tie');
}

// checking type
var bool = Boolean(prompt('Enter boolean'));
var str = prompt('Enter string');
var num = Number(prompt('Enter a number'));
alert(`Boolean value ${bool} and type ${typeof (bool)}`);
alert(`String value ${str} and type ${typeof (str)}`);
alert(`Number value ${num} and type ${typeof (num)}`);

// even number or odd number
var checkNumberEvenOdd = Number(prompt('Enter any number to check even or odd'));
if(checkNumberEvenOdd % 2 === 0){
  alert(`${checkNumberEvenOdd} is an even number`);
}else{
  alert(`${checkNumberEvenOdd} is an odd number`);
}

// tempurature program
var tempurature = Number(prompt('Enter tempurature to check'));
if(tempurature > 40){
  alert('It is too hot outside');
}else if(tempurature > 30){
  alert('The weather today is normal');
}else if(tempurature > 20){
  alert('Today weather is cool');
}else if(tempurature > 10){
  alert('OMG! Today’s weather is so Cool.');
}

// calculator
var firstNumber = Number(prompt('Enter 1st number'));
var secondNumber = Number(prompt('Enter 2nd number'));
var operation = prompt('Enter operation you want to perform (+, -, *, /, %)');
if(operation === '+'){
  alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
}
if(operation === '-'){
  alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
}
if(operation === '*'){
  alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
}
if(operation === '/'){
  alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}
if(operation === '%'){
  alert(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
}



  var userInput = prompt('Enter day name');
  if(userInput === 'monday' || userInput ===  'tuesday' || userInput === 'wednesday' || userInput === 'thursday' || userInput === 'friday'){
    alert('It\'s a week day');
  }else if(userInput === 'saturday'){
    alert('It\'s a weekend');
  }else if(userInput === 'sunday'){
    alert('Yay! It’s a holiday');
  }

  // greater than 50

  var userCheckPass = Number(prompt('Enter score to check pass or fail'));
  if(userCheckPass > 50){
    alert('You are passed');
  }else{
    alert('Try again!');
  }

  // checking greater number

  var number1 = Number(prompt('Enter number 1'));
  var number2 = Number(prompt('Enter number 2'));
  if(number1 > number2){
    alert(`The greater number of ${number1} and ${number2} is ${number1}`);
  }else if(number2 > number1){
    alert(`The greater number of ${number1} and ${number2} is ${number2}`);
  }else{
    alert(`The greater number of ${number1} and ${number2} are equal`);
  }
  
  // Translator

  var numberCheckNP = Number(prompt('Enter number to check negative and positive'));
  if(numberCheckNP > 0){
    alert('Positive number');
  }else if(numberCheckNP < 0){
    alert('Negative number');
  }else{
    alert('Both 0 is a neutral number');
  }

  // Pluralizer

  var numb = Number(prompt('Please enter any number'));
  var noun = prompt('Please enter a noun');
  alert(`${numb} ${noun}`);

  // Translator

  var languag = prompt('Enter languages en, urdu, fr');
  if(languag === 'en'){
    alert('Hello, World');
  }else if(languag === 'urdu'){
    alert('Kesay ho duniya walo');
  }else if(languag === 'fr'){
    alert('fafoofafafooo fafdaoo');
  }else{
    alert('Language is not currently avalaible');
  }