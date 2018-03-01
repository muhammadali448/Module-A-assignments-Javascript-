var userName;
var myName = 'Muhammad Ali';
var message = 'Hello World';
alert(message);
var age = 22;
var university = 'Bahria University';
var department = 'Computer Engineering';
var semester = 4;
var bio = 'My name is ' + myName + '.\n' + 'I am ' + age + ' years old.'
  + '\nI am doing ' + department + ' at ' + university
  + '.\nI am in ' + semester + ' semester.';
alert(bio);

const arrPizza = ['P', 'i', 'z', 'z', 'a'];

// console.log(...arrPizza.slice(0, 5));
// console.log(...arrPizza.slice(0, 4));
let pizza = '';
for(let i = arrPizza.length; i > 0; i--){
    // console.log(...arrPizza.slice(0, i));
    pizza += '\n' + arrPizza.slice(0, i).join(' ');
}

alert(pizza);



var jobTitle = 'Software Developer';
var residency = 'New York';
var partnerName = 'ABC';
var kids = 2;
alert('You will be a ' + jobTitle + ' in ' + residency + ', and married to ' + partnerName + ' with ' + kids + ' kids.');
var email = 'muhammadali19960@outlook.com';
alert('My email address is ' + email);
var book = 'A smarter way to learn JavaScript';
alert('I am trying to learn from the book \'' + book + '\'' );

// document.querySelector('h3').textContent = bio;


const heading = document.createElement('p');
heading.textContent = bio;
document.body.appendChild(heading);
