var x, y, z;
var name, enrollNo, num1, _isMale, $money;
// var 2name, .roll, &call, !oky, %percentage;

const heading = document.createElement('h1');
heading.textContent = 'Rules for naming JS variables';
const _blank1 = document.createElement('p');
_blank1.textContent = 'Variable name can only contain $, _ , or number';
const _blank2 = document.createElement('p');
_blank2.textContent = 'Variable must begin with a $name, _name, or name';
const _blank3 = document.createElement('p');
_blank3.textContent = 'Variable names are case sensitive';
const _blank4 = document.createElement('p');
_blank4.textContent = 'Variable names should not be JS Keywords';
document.body.appendChild(heading);
document.body.appendChild(_blank1);
document.body.appendChild(_blank2);
document.body.appendChild(_blank3);
document.body.appendChild(_blank4);

// document.write();