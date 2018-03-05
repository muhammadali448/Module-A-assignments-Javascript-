console.log('Connected');

// Task 1
var students = []; // literal notation

// Task 2
var students = new Array(); // Object notation

// Task 3
var arrayOfStrings = ['Ali', 'Yasir', 'Talha', 'Eraj', 'Amna'];

// Task 4
var arrayOfNumbers = [1, 2, 3, 4, 5];

// Task 5
var arrayOfBooleans = [true, false, true, false];

// Task 6
var mixedArray = ['Ali', 22, true];

// Task 7
var mobileNetworks = ['Ufone', 'Zong', 'Warid', 'Telenor', 'Jazz'];

// Task 8
document.write('<strong>Task 8</strong>');
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'Phd'];
document.write('<div><h2>Qualifications:</h2>');
for(var i = 0; i < qualifications.length; i++){
  document.write(`${i + 1}) ${qualifications[i]}<br>`);
}
document.write('</div>');

// Task 9
document.write('<strong>Task 9</strong>');
var topMovies = [];
topMovies.push('Logan');
topMovies.push('IT');
topMovies.push('Justice League');
topMovies.push('Jumangi: Welcome to the Jungle');
document.write('<div><h2>Top movies of 2017</h2>');
for(var i = 0; i < topMovies.length; i++){
  document.write(`${i + 1}) ${topMovies[i]}<br>`);
}
document.write(`<h3>Length of the array: ${topMovies.length}</h3></div>`);

// Task 10
document.write('<strong>Task 10</strong>');
var cars = ['Chevrolet Corvette', 'Porsche 911 GT3 / GT3 RS', 'Lamborghini Huracan', 'Ferrari 812 Superfast', 'Lamborghini Aventador'];
document.write('<div><h2>Favorite Cars</h2><br>');
document.write(`${cars.toString()}<br>`);
document.write(`First index of the array: ${cars.indexOf('Chevrolet Corvette')}<br>
Car at first index of the array: ${cars[0]}<br>
Last index of the array: ${cars.length - 1}<br>
Car at last index of the array: ${cars[cars.length - 1]}</div>`);

// Task 11
document.write('<strong>Task 11</strong><p>');
var studentsName = ['Ali', 'Yasir', 'Talha'];
var scoresStudent = [350, 380, 420];
for(var i = 0; i < studentsName.length; i++){
  document.write(`Score of ${studentsName[i]} is ${scoresStudent[i]}. Percentage: ${(scoresStudent[i] / 500) * 100}%<br>`);
}
document.write('</p>');

// Task 12
document.write('<strong>Task 12</strong>');
var colorNames = ['red', 'blue', 'green'];
document.write(`<p>Color names (original): ${colorNames.toString()}<br>`);
var userBeginning = prompt('Enter color to the beginning of the array');
colorNames.unshift(userBeginning);
document.write(`Color names (beginning): ${colorNames.toString()}<br>`);
var userEnd = prompt('Enter color to the end of the array');
colorNames.push(userEnd);
document.write(`Color names (end): ${colorNames.toString()}<br>`);
colorNames.unshift('violet', 'yellow');
document.write(`Color names (add two in beginning): ${colorNames.toString()}<br>`);
colorNames.shift();
document.write(`Color names (first color delete): ${colorNames.toString()}<br>`);
colorNames.pop();
document.write(`Color names (last collor delete): ${colorNames.toString()}<br>`);
var userIndex = Number(prompt('Enter index you want to add the color'));
var userColor = prompt('Enter color name you want to add on that index');
colorNames[userIndex] = userColor;
document.write(`Color names (user add on index): ${colorNames.toString()}<br>`);
var userIndexDelete = Number(prompt('Enter index where you want to start to delete the color'));
var userHowManyColor = Number(prompt('Enter how many color you want to delete from that index'));
colorNames.splice(userIndexDelete, userHowManyColor);
document.write(`Color names (delete from ${userIndexDelete} delete count ${userHowManyColor}): ${colorNames.toString()}</p>`);

// Task 13
document.write('<strong>Task 13</strong>');
var scoreOfStudents = [350, 380, 420, 720, 490, 130, 245];
document.write(`<p>Scores of Students: ${scoreOfStudents.toString()}<br>`);
scoreOfStudents.sort();
document.write(`Ordered Scores of Students: ${scoreOfStudents.toString()}</p>`);

// Task 14
document.write('<strong>Task 14</strong>');
var fruits = ['strawberry', 'apple', 'orange', 'banana'];
document.write(`<p>Fruits List:<br>${fruits.toString()}<br><br>`);
fruits.sort();
document.write(`Ordered fruits list:<br>${fruits.toString()}</p>`);

// Task 15
document.write('<strong>Task 15</strong>');
var citiesList = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var selectedCitiesList = citiesList.slice(2, 4);
document.write(`<p>Cities list:<br>${citiesList.toString()}<br><br>
Selected cities list:<br>${selectedCitiesList.toString()}</p>`);

// Task 16
document.write('<strong>Task 16</strong>');
var arr = ['This ',  ' is ', ' my ', ' cat'];
document.write(`<p>Array:<br>${arr.toString()}<br><br>
String:<br>${arr.join('')}</p>`);

// Task 17
document.write('<strong>Task 17</strong>');
var devices = [];
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
document.write(`<p>Devices:<br>${devices.toString()}<br><br>`)
for(var i = 0; i < devices.length; i++){
  document.write(`Out:<br>${devices[i]}<br>`);
}
document.write('</p>');

// Task 18
document.write('<strong>Task 18</strong>');
var devices = [];
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
document.write(`<p>Devices:<br>${devices.toString()}<br><br>`)
devices.reverse();
for(var i = 0; i < devices.length; i++){
  document.write(`Out:<br>${devices[i]}<br>`);
}
document.write('</p>');

// Task 19
document.write('<strong>Task 19</strong>');
var phones = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<p><select>');
for(var i = 0; i < phones.length; i++){
  document.write(`<option value="${phones[i]}">${phones[i]}</option>`);
}
document.write('</select></p>');

// Task 20
var multiDimensionalArrays = [[], [], []]; // multi-dimensional array

// Task 21
document.write('<strong>Task 21</strong>');
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
]
document.write('<p>');
for(var i = 0; i < matrix.length; i++){
  for(var j = 0; j < matrix[i].length; j++){
    document.write(`${matrix[i][j]} `);
  }
  document.write('<br>');
}
document.write('</p>');
