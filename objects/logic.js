console.log('Connected');
// Task 1
document.write('<strong>Task 1</strong>');
let student = {
  name: 'Muhammad Ali',
  enrolNo: '02-132162-017',
  age: 22,
  gender: 'male'
};
let listOfAttributes = [];
for (let attribute in student) {
  listOfAttributes.push(attribute);
}
document.write(`<p>List of attributes in a object is: ${listOfAttributes}</p>`);

// Task 2
document.write('<strong>Task 2</strong>');
function gettingObjectAttributes(listOfAttributes, studentObject) {
  for (let attribute in studentObject) {
    listOfAttributes.push(attribute);
  }
}
var student1 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
let listOfAttributes1 = [];
gettingObjectAttributes(listOfAttributes1, student1);
document.write(`<p>Before delete: ${listOfAttributes1}<br>
Attributes values: ${student1.name}, ${student1.sclass}, ${student1.rollno}`);
delete student1.rollno;
let listOfAttributes2 = [];
gettingObjectAttributes(listOfAttributes2, student1);
document.write(`<br>After delete: ${listOfAttributes2}<br>
Attributes values: ${student1.name}, ${student1.sclass}, ${student1.rollno}</p>`)

// Task 3
document.write('<strong>Task 3</strong>');
document.write(`<p>Length of student object is: ${listOfAttributes1.length}</p>`);


// Task 4
document.write('<strong>Task 4</strong>');
var library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }];
document.write('<p>Libraray Reading Status:<br>');
for (var i = 0; i < library.length; i++) {
  document.write(`${library[i].title}, ${library[i].author}, ${library[i].readingStatus}<br>`);
}
document.write('</p>');

// Task 5
document.write('<strong>Task 5</strong>');
let favoriteRecipe = {
  title: 'Cheese macroni',
  serving: 3,
  ingredients: [
    '1 (8 ounce) box elbow macaroni',
    '1/4 cup butter',
    '1/4 cup all-purpose flour',
    '1/2 teaspoon salt',
    'ground black pepper to taste',
    '2 cups milk',
    '2 cups shredded Cheddar cheese'
  ]
};
document.write(`<div><br>Recipe name: ${favoriteRecipe.title}<br>Serving: ${favoriteRecipe.serving}<br>Ingredients: <ol>`);
for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
  document.write(`<li>${favoriteRecipe.ingredients[i]}</li>`);
}
document.write('</ol></div>');

// Task 6
document.write('<strong>Task 6</strong>');
let books = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    alreadyRead: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    alreadyRead: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    alreadyRead: false
  }
];
document.write('<p>');
for (var i = 0; i < books.length; i++) {
  document.write(`${books[i].title}, ${books[i].author}`);
  if (books[i].alreadyRead) {
    document.write(`, You already read ${books[i].title}<br>`);
  }else {
    document.write(`, You still need to read ${books[i].title}<br>`);
  }
}
document.write('</p>');

// Task 7
document.write('<strong>Task 7</strong>');
function Movie(title, duration, stars) {
  this.title = title;
  this.duration = duration;
  this.stars = stars;
  this.printInfo = function () {
    document.write(`<p>${this.title} last for ${this.duration} `);
    for (var i = 0; i < this.stars.length; i++) {
      document.write(`Stars: ${this.stars[i]}`);
    }
    document.write('</p>');
  };
}
const harryPotter = new Movie('Harry Potter and the Philosopher\'s Stone', '2 hours 50 minutes',['Daniel Radcliffe','Rupert Grint','Emma Watson']);
harryPotter.printInfo();