var age = 22;
alert('I am ' + age + ' years old');

var track = 3;

alert('You have visited this website ' + track + ' times');

var dateOfBirth = 1995; 
const para = document.createElement('p');
const para2 = document.createElement('p');
para.textContent = 'My birth year is ' + dateOfBirth; 
para2.textContent = 'Data type of my declared variable is ' +
 typeof(dateOfBirth); 
document.body.appendChild(para);
document.body.appendChild(para2);

var name = 'Muhammad Ali';
var productTitle = 'Black Medium Formal Shirt';
var quantity = 1;
var productInfo = name + ' ordered ' + quantity + ' ' + productTitle + ' on Daraz.pk';
const para3 = document.createElement('p');
para3.textContent = productInfo;
document.body.appendChild(para3);