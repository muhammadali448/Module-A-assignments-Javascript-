var no1 = 3;
var no2 = 5;
var sum = no1 + no2;
var sub = no2 - no1;
var mult = no1 * no2;
var divide = no2 / no1;
var modulus = no2 % no1;
// alert('Sum of ' + no1 + '\n add' + add);
alert(`Sum of ${no1} and ${no2} is ${sum}
Subtraction of ${no2} and ${no1} is ${sub}
Multiplication of ${no1} and ${no2} is ${mult}
Divide of ${no2} by ${no1} is ${divide}
Modulus of ${no2} by ${no1} is ${modulus}`);

var number;

document.write('Value after variable declaration: ' + number);
number = 3;
document.write('<br>Initial value: ' + number);
number++;
document.write('<br>Value after increment is: ' + number);
number += 7;
document.write('<br>Value after decrement is: ' + number);
document.write('<br>he remainder is: ' + number % 3);

var tickets = 5;
var movieePrice = 600

document.write(`<p>Total cost to buy ${tickets} tickets to a movie is ${tickets * movieePrice}<p>`);

var table = prompt('Enter number to print the table');
for (var i = 1; i < 11; i++) {
  console.log(table + ' * ' + i + ' = ' + (table * i));
  document.write(`<p>${table} * ${i} = ${table * i}</p>`);
}

var celcius = 12;
var farenhite = 68;

document.write(`<p>${celcius}C is ${(celcius * (9 / 5) + 32)}F</p>`);
document.write(`<p>${farenhite}F is ${(farenhite - 32) * 5 / 9}C</p>`);

var priceItem1 = 560;
var quantityItem1 = 2;
var priceItem2 = 200;
var quantityItem2 = 5;
var shippingCharges = 150;

var shoppingCharge = ((priceItem1 * quantityItem1) + (priceItem2 * quantityItem2)) + shippingCharges;
document.write('<h2>Shopping Cart</h2>')
document.write(`<p>Price of Item 1: ${priceItem1}<br>Quantity of Item 1: ${quantityItem1}<br>
Price of Item 2: ${priceItem2}<br>Quantity of Item 2: ${quantityItem2}<br>
<br>Shipping Charges: ${shippingCharges}<br><br>Total cost of your order is: ${shoppingCharge} PKR`);
                       
var totalMarks = 1200;
var obtainedMarks = 900;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write(`<h2>Marks Sheet</h2><p>Total marks: ${totalMarks}<br>Obtained Marks: ${obtainedMarks}<br>Percentage: ${percentage}%`);

var usDollar = 10;
var saudiRiyal = 25;
var pakistaniRupee = (usDollar * 104) + (saudiRiyal * 28);
document.write(`<h2>Currency in PKR</h2><p>Total currency in PKR: ${pakistaniRupee}`);

var someNumber = 3;
someNumber = ((someNumber + 5) * 10) / 2;
alert(`Some number: ${someNumber}`);

var currentYear = 2018;
var birthYear = 1995;
document.write(`<h2>The Age Calculator</h2><p>Current Year: ${currentYear}<br>
Birth Year: ${birthYear}<br>They are either ${currentYear - birthYear} or ${(currentYear - birthYear) + 1} years old </p>`);


const PI = 3.142;
let radius = 12;
document.write(`<h2>The Geometrizer</h2><p>Radius of a circle is: ${radius}<br>
The circumference is: ${2 * PI * radius}<br>The area is: ${PI * Math.pow(radius, 2)}</p>`);

let a = 10;
document.write(`<p>Result:<br>The value of a is: ${a}<br>........................................<br>
The value of ++a is: ${++a}<br> Now the value of a is: ${a}<br>,<br>
The value of a++ is: ${a++}<br> Now the value of a is: ${a}<br><br>
The value of --a is: ${--a}<br> Now the value of a is: ${a}<br><br>
The value of a-- is: ${a--}<br> Now the value of a is: ${a}</p>`)

let a1 = 2;
let b1 = 1;
var result = --a1 - --b1 + ++b1 + b1--; // a1: 1, b1: 0, result: 1 - 0 + 1 + 1 = 3
document.write(`<br><br><p>a is: ${a1}<br>b is: ${b1}<br>result is: ${result}<br></p>`)


let snack = 'Chocolate Chip';
let currentAge = 22;
let maximumAge = 70;
let snackPerDay = 3;
let snackRestForLife = (maximumAge - currentAge) * snackPerDay;
document.write(`<h2>The Lifetime Supply Calculator</h2><br>
<p>Favorite Snack: ${snack}<br>Current Age: ${currentAge}<br>
Estimated Maximum Age: ${maximumAge}<br>Amount of snacks per day: ${snackPerDay}<br><br>
You will need ${snackRestForLife} ${snack} to last you until the ripe old age of ${maximumAge}</p>`);


