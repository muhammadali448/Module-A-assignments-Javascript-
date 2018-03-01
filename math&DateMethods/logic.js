console.log('Connected');
// Task 1
var positiveNumber = prompt('Enter a positive number');
document.write(`<h3>Task 1</h3><p>number: ${positiveNumber}<br>
round off value: ${Math.round(positiveNumber)}<br>
floor value: ${Math.floor(positiveNumber)}<br>
ceil value: ${Math.ceil(positiveNumber)}</p>`);

// Task 2
var negativeNumber = prompt('Enter a negative number');
document.write(`<h3>Task 2</h3><p>number: ${negativeNumber}<br>
round off value: ${Math.round(negativeNumber)}<br>
floor value: ${Math.floor(negativeNumber)}<br>
ceil value: ${Math.ceil(negativeNumber)}</p>`);

// Task 3
var positiveFloatingNumber = prompt('Enter a positive floating point number');
document.write(`<h3>Task 3</h3><p>number: ${positiveFloatingNumber}<br>
round off value: ${Math.round(positiveFloatingNumber)}<br>
floor value: ${Math.floor(positiveFloatingNumber)}<br>
ceil value: ${Math.ceil(positiveFloatingNumber)}</p>`);

// Task 4
var negativeFloatingNumber = prompt('Enter a negative floating point number');
document.write(`<h3>Task 4</h3><p>number: ${negativeFloatingNumber}<br>
round off value: ${Math.round(negativeFloatingNumber)}<br>
floor value: ${Math.floor(negativeFloatingNumber)}<br>
ceil value: ${Math.ceil(negativeFloatingNumber)}</p>`);

// Task 5
var absoluteNumber = prompt('Enter a number to give absolute number');
document.write(`<h3>Task 5</h3><p>The absolute value of ${absoluteNumber} is ${Math.abs(absoluteNumber)}</p>`);

// Task 6
var diceValueRandom = Math.floor(Math.random() * 6) + 1; // generated 1 to 6 numbers
document.write(`<h3>Task 6</h3><p>random dice value: ${diceValueRandom}</p>`)

// Task 7
var coinValueRandom = Math.floor(Math.random() * 2) + 1;
if(coinValueRandom === 1){
  document.write(`<h3>Task 7</h3><p>${coinValueRandom}<br>
  random coin value: Tails`);
}else{
  document.write(`<h3>Task 7</h3><p>${coinValueRandom}<br>
  random coin value: Heads`);
}

// Task 8
var randomGen1to100 = Math.floor(Math.random() * 100) + 1;
document.write(`<h3>Task 8</h3><p>random number between 1 and 100: ${randomGen1to100}</p>`);

// Task 9
var userWeight = prompt('Enter your weight in kilograms');
document.write(`<h3>Task 9</h3><p>The weight of user is: ${parseFloat(userWeight)} Kilograms`);

// Task 10
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = Number(prompt('Enter a number between 1 and 10'));
if(userNumber === secretNumber){
  document.write(`<h3>Task 10</h3><p>Congratulations you guess the secret number ${secretNumber}`);
}else{
  alert(`Try again! secret number is ${secretNumber}`);
}

// Task 11
document.write(`<h3>Task 11</h3><p>${Date()}</p>`);

// Task 12
var date = new Date();
var monthNames = ['January', 'February', 'March', 'Aprail', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write(`<h3>Task 12</h3><p>Current month: ${monthNames[date.getMonth()]}</p>`);

// Task 13
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
document.write(`<h3>Task 13</h3><p>Today is ${dayNames[date.getDay()]}</p>`);

// Task 14
if(dayNames[date.getDay()] === 'Sat' || dayNames[date.getDay()] === 'Fri'){
  document.write('<h3>Task 14</h3><p>It\'s Fun day</p>');
}

// Task 15
if(date.getDate() < 16){
  document.write('<h3>Task 15</h3><p>First fifteen days of the month</p>');
}else{
  document.write('<h3>Task 15</h3><p>Lastdays of the month</p>');
}

// Task 16
var date2 = new Date('January 1, 1970');
var milliseconds = date.getTime() - date2.getTime();
var minutes = milliseconds / 60000;
document.write(`<h3>Task 16</h3><p>${Date()}<br>
Elasped milliseconds since January 1, 1970: ${milliseconds}<br>
Elasped minutes since January 1, 1970: ${minutes}</p>`);

// Task 17
if(date.getHours() >= 12){
  document.write('<h3>Task 17</h3><p>It\'s PM</p>');
}else{
  document.write('<h3>Task 17</h3><p>It\'s AM</p>');
}

// Task 18
var laterDate = new Date('December 31, 2020');
document.write(`<h3>Task 18</h3><p>Later date: ${laterDate}</p>`);

// Task 19
var ramadanDate = new Date('June 18, 2015');
var daysPass =   date.getTime() - ramadanDate.getTime();
daysPass = Math.floor(daysPass / (1000 * 60 * 60 * 24));
document.write(`<h3>Task 19</h3><p>${daysPass} days have passed since 1st Ramadan, 2015</p>`);

// Task 20
var beginDate = new Date('January 1, 2018');
var seconds = (date.getTime() - beginDate.getTime()) / 1000;
document.write(`<h3>Task 20</h3><p>${Date()},<br>
${seconds} seconds had passed since beginning of ${date.getFullYear()}</p>`);

// Task 21
var currentDate = new Date();
document.write(`<h3>Task 21</h3><p>current date: ${currentDate}<br>`);
currentDate.setHours(currentDate.getHours() - 1);
document.write(`1 hour ago, it was ${currentDate}</p>`);

// Task 22
document.write(`<h3>Task 22</h3><p>current date: ${currentDate}<br>`);
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write(`100 years back, it was ${currentDate}</p>`);

// Task 23
var todayDate = new Date();
var birthDate = Number(prompt('Enter your age'));
document.write(`<h3>Task 23</h3><p>Your age is ${birthDate}<br>
Your birth year is ${todayDate.getFullYear() - birthDate}`);

// Task 24
var customerName = prompt('Enter Customer name');
var currentMonth = monthNames[todayDate.getMonth()];
var noOfUnits = Number(prompt('Enter no of units'));
var chargePerUnit = Number(prompt('Enter charge per unit'));
var netAmountPayableWDueD = noOfUnits * chargePerUnit;
var latePaymentCharge = 100;
var netAmountPayableADueD = netAmountPayableWDueD + latePaymentCharge; 
document.write(`<h3>Task 24</h3><div><h2>K-Electric Bill</h2>
Customer Name: <strong>${customerName}</strong><br>
Month: <strong>${currentMonth}</strong><br>
Number of units: <strong>${noOfUnits}</strong><br>
Charges per units: <strong>${chargePerUnit}</strong><br><br>
Net Amount Payable (within Due Date): ${netAmountPayableWDueD.toFixed(2)}<br>
Late payment surcharge: ${latePaymentCharge}<br>
Gross Amount Payable (after Due Date): ${netAmountPayableADueD.toFixed(2)}</div>`);