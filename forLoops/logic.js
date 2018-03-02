console.log('Connected');

// Task 1
document.write('<strong>Task 1</strong>');
document.write('<p>');
for (var i = 0; i < 5; i++) {
  document.write('Hello World<br>');
}
document.write('</p>');

// Task 2
document.write('<strong>Task 2</strong>');
document.write('<p>');
for (var i = 0; i < 10; i++) {
  document.write(`${i + 1}<br>`);
}
document.write('</p>');

// Task 3
document.write('<strong>Task 3</strong>');
document.write('<p>');
var tableNumber = prompt('Enter table you want to display');
var tableLength = prompt('Enter table length');
document.write(`Multiplication table of ${tableNumber}<br>Length ${tableLength}<br>`);
for (var i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} * ${i} = ${tableNumber * i}<br>`);
}
document.write('</p>');

// Task 4
document.write('<strong>Task 4</strong>');
document.write('<p>');
var a = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for (var i = 0; i < a.length; i++) {
  document.write(`${a[i]}<br>`);
  // document.write(a[i] + '<br>');
}
document.write('</p>');

// Task 5
document.write('<strong>Task 5</strong>');
document.write('<p>');
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]}<br>`);
}
document.write('<br><br>');
for (var i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]}<br>`);
}
document.write('</p>');

// Task 6
document.write('<strong>Task 6</strong>');
var items = [];
var itemLength = Number(prompt('Enter number of items'));
for (var i = 0; i < itemLength; i++) {
  items[i] = prompt(`Enter value for index ${i}`);
}
document.write('<p>');
document.write(`Number of items: ${itemLength}<br>Items:<br><br>`);
for (var i = 0; i < items.length; i++) {
  document.write(`${items[i]}<br>`);
}
document.write('</p>');

// Task 7
document.write('<strong>Task 7</strong>');
document.write('<p>');
document.write('<strong>Counting:</strong><br><br>');
for (var i = 1; i <= 15; i++){
  document.write(`${i},`);
}
document.write('<br><br><strong>Reverse counting</strong><br><br>');
for (var i = 10; i >= 1; i--){
  document.write(`${i},`);
}
document.write('<br><br><strong>Even:</strong><br><br>');
for (var i = 0; i <= 20; i = i + 2){
  document.write(`${i},`);
}
document.write('<br><br><strong>Odd:</strong><br><br>');
for (var i = 1; i < 20;  i = i + 2){
  document.write(`${i},`);
}
document.write('<br><br><strong>Series:</strong><br><br>');
for (var i = 2; i <= 20;  i = i + 2){
  document.write(`${i}k,`);
}
document.write('</p>');

// Task 8
document.write('<strong>Task 8</strong>');
document.write('<p>');
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInputB = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?').toLowerCase();
var isItemAvail = false;
for (var i = 0; i < a.length; i++) {
  if (userInputB === a[i]) {
    document.write(`${a[i]} is available at index ${i} in our bakery`);
    isItemAvail = true;
  }
}
if (isItemAvail === false) {
  document.write(`We are sorry. ${userInputB} is <strong>not available</strong> in our bakery`);
}
document.write('</p>');

// Task 9
document.write('<strong>Task 9</strong>');
var searchingArray = [21, 53, 78, 91, 12];
var largeNo = searchingArray[0];
for (var i = 0; i < searchingArray.length; i++) {
  if (largeNo < searchingArray[i]) {
    largeNo = searchingArray[i];
  }
}
document.write(`<p>Array items: ${searchingArray.toString()}<br>
The largest number is ${largeNo}</p>`);

// Task 10
document.write('<strong>Task 10</strong>');
var searchingArray2 = [21, 53, 78, 91, 12];
var smallNo = searchingArray2[0];
for (var i = 0; i < searchingArray2.length; i++) {
  if (smallNo > searchingArray2[i]) {
    smallNo = searchingArray2[i];
  }
}
document.write(`<p>Array items: ${searchingArray2.toString()}<br>
The smallest number is ${smallNo}</p>`);

// Task 11
document.write('<strong>Task 11</strong>');
var searchingArray3 = [21, 53, 78, 91, 12];
// var smallNo2 = searchingArray3[0];
// var largeNo2 = searchingArray3[0];
// for (var i = 0; i < searchingArray3.length; i++) {
//   if (smallNo2 > searchingArray3[i]) {
//     smallNo2 = searchingArray3[i];
//   }
//   if (largeNo2 < searchingArray3[i]) {
//     largeNo2 = searchingArray3[i];
//   }
// }
var arrSort = searchingArray3.sort();
document.write(`<p>Array items: ${searchingArray3.toString()}<br>
The smallest number is ${arrSort[0]}<br>
The largest number is ${arrSort[arrSort.length - 1]}</p>`);

// Task 12
document.write('<strong>Task 12</strong>');
document.write('<p>')
var range = 100 / 5;
for (var i = 1; i <= range; i++) {
  document.write(`${5 * i},`);
}
document.write('</p>')

// Task 13
document.write('<strong>Task 13</strong>');
var students = ['Ali', 'Sami', 'Taha', 'Inam'];
var scores = [58, 73, 89, 90];
document.write('<div><table border = 1><thead><tr><th scope = "col">Students</th><th scope = "col">Scores</th></tr></thead><tbody>');
for (var i = 0; i < 4; i++) {
  document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`);
}
document.write('</tbody></table></div>');

// Task 14
document.write('<strong>Task 14</strong>');
var scoresArray = [12, 45, 3, 22, 34, 50];
var stopValue = Number(prompt(`Enter stop value for ${scoresArray.toString()}`));
for (var i = 0; i < scoresArray.length; i++) {
  if (stopValue === scoresArray[i]) {
    scoresArray = scoresArray.slice(0, i + 1);
  }
}
document.write(`<p>Original array: ${scoresArray.toString()}<br>
Stop value: ${stopValue}<br>
Array after entering stop value: ${scoresArray.toString()}</p>`)

// Task 15
document.write('<strong>Task 15</strong>');
var matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
document.write('<p>');
for (var i = 0; i < matrixArray.length; i++) {
  for (var j = 0; j < matrixArray[i].length; j++) {
    document.write(`${matrixArray[i][j]} `);
  }
  document.write('<br>');
}
document.write('</p>');

// Task 16
document.write('<strong>Task 16</strong>');
var userInputD = Number(prompt('Enter a number'));
document.write('<p>');
for (var i = userInputD; i >= 0; i = i - .5) {
  document.write(`${i}, `);
}
document.write('</p>');

// Task 17
document.write('<strong>Task 17</strong>');
document.write('<p>');
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i} is even<br>`);
  } else {
    document.write(`${i} is odd<br>`);
  }
}
document.write('</p>');

// Task 18
document.write('<strong>Task 18</strong>');
var oddProduct = 1;
for (var i = 1; i <= 7; i += 2) {
  oddProduct *= i;
}
document.write(`<p>The product of the odd integers from 1 to 7 is ${oddProduct}</p>`);

// Task 19
document.write('<strong>Task 19</strong>');
var userInputStar = Number(prompt('Enter no to print stars', 7));
document.write('<div>');
for (var i = userInputStar; i > 0; i--){
  for (var j = 0; j < i; j++){
    document.write('*');
  }
  document.write('<br>');
}
document.write('</div>');

// Task 20
document.write('<strong>Task 20</strong>');
var inputNoLines = Number(prompt('Enter no of lines'), 5);
document.write('<div>');
document.write('<strong>a.</strong><br>')
for (var i = 0; i < inputNoLines - 1; i++) {
  for (var j = 0; j < inputNoLines; j++) {
    document.write('*');
  }
  document.write('<br>');
}

document.write('<br>.<strong>b.</strong>');
for (var i = 0; i <= inputNoLines; i++) {
  for (var j = 0; j < i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

document.write('<br><strong>c.</strong><br>');
for (var i = inputNoLines; i > 0; i--){
    for (var j = 0; j < i; j++){
      document.write('*');
    }
    document.write('<br>');
  }
document.write('</div>');