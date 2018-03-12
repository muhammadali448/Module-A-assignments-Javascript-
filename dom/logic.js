console.log('Connected');
// Task 1
function js_style() {
  let selectPara = document.getElementById('text');
  selectPara.setAttribute('class', 'changeFont');
}

// Task 2
function getFormvalue() {
  let selectInput1 = document.querySelector('[name=fname]').value;
  let selectInput2 = document.querySelector('[name=lname]').value;
  let selDiv = document.getElementById('task2');
  const newPara = document.createElement('p');
  let newText = document.createTextNode(`${selectInput1} ${selectInput2}`);
  newPara.appendChild(newText);
  selDiv.appendChild(newPara);
  return false;   
}

// Task 3
function set_background() {
  let selectPara1 = document.querySelector('#task3 p');
  let selectPara2 = document.querySelector('#task3 p + p');
  selectPara1.setAttribute('style', 'background-color: yellow;');
  selectPara2.setAttribute('style', 'background-color: green;');
}

// Task 4
function getAttributes() {
  let selectLink = document.getElementById('w3r').attributes;
  let selectDiv = document.getElementById('task4');
  let newPara = document.createElement('p');
  let attributesValue = '';
  for (var i = 0; i < selectLink.length; i++) {
    attributesValue += selectLink[i].nodeValue + ', ';
  }
  let newParaText = document.createTextNode(attributesValue);
  newPara.appendChild(newParaText);
  selectDiv.appendChild(newPara);
}

// Task 5
function insert_Row() {
  const selectTable = document.getElementById('sampleTable');
  const newRow = document.createElement('tr');
  const newCol1 = document.createElement('td');
  const newCol2 = document.createElement('td');
  let row = 3 , col = 1;
  newCol1.textContent = 'Row' + (row) + 'Col' + (col);
  col++;
  newCol2.textContent = 'Row' + (row++) + 'Col' + (col++);
  row++;
  newRow.appendChild(newCol1);
  newRow.appendChild(newCol2);
  selectTable.appendChild(newRow);
}