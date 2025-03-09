'use strict';
console.log("Day 1 Lab");
console.log("-".repeat(20));



var btn = document.getElementById('btn');
var temperature = document.getElementById('Temperature');
var temperature2 = document.getElementById('Temperature2');
var faculty = document.getElementById('Faculty');
var odd = document.getElementById('Odd');
var mathExpressin = document.getElementById('mathExpression');
var promp = document.getElementById('prom');



function Sum(numberOne, numberTwo) {
    numberOne = parseInt(prompt("Enter First Number: "));
    numberTwo = parseInt(prompt("Enter Second Number: "));
    console.log("-".repeat(20));
    return `The Total of Sum =  ${numberOne + numberTwo}`;
}

btn.onclick = function () {
    console.log(Sum());
}

//------------------------------------------------------------------


function Temperature(todayTemperature) {
    todayTemperature = parseInt(prompt("Enter Today's Temperature: "));

    todayTemperature >= 30 ? console.log("HOT") : console.log("Cold");
    console.log("-".repeat(20));
}

temperature.onclick = function () {
    Temperature();
}

//------------------------------------------------------------------


function Temperature2(todayTemperature, actualFeel) {
    todayTemperature = parseInt(prompt("Enter Today's Temperature: "));
    actualFeel = parseInt(prompt("Enter Actual Feel: "));

    if (25 >= todayTemperature && actualFeel <= 30) {

        console.log("Normal");

    } else if (todayTemperature && actualFeel < 25) {
        
        console.log("Cold");

    } else if (todayTemperature && actualFeel > 30) {
        
        console.log("Hot");

    } else {

        console.log("Ambiguous, can’t detect");

    }
    console.log("-".repeat(20));
}

temperature2.onclick = function () {
    Temperature2();
}

// --------------------------------------------------------



function Faculty(studentFaculty) {
    studentFaculty = prompt("Enter Your Faculty Name: ");

    switch (studentFaculty) {
        case 'FCI':
            console.log("You’re eligible to Programing tracks");
            break;
        case 'Engineering':
            console.log("You’re eligible to Network and Embedded tracks");
            break;
        case 'Commerce':
            console.log("You’re eligible to ERP and Social media tracks");
            break;
        default:
            console.log("You’re eligible to SW fundamentals track");
            break;
    }
    console.log("-".repeat(20));
}

faculty.onclick = function () {
    Faculty();
}

// --------------------------------------------------------

function Odd(start, end) {

    start = parseInt(prompt("Enter Num 1: "));
    end = parseInt(prompt("Enter Num 2: "));

var s = (start % 2 !==0) ? start : start + 1;

    for (let i = s; i <= end; i+=2) {
        console.log(i);
    }
    console.log("-".repeat(20));
}
odd.onclick = function () {
    Odd();
}

// --------------------------------------------------------

function mathExpression(ex) {

    ex = prompt("Enter Math Expression (Ex. 3+4*5/10*8)");

    var result = eval(ex);

    console.log(result);

    console.log("-".repeat(20));

    return alert(`You entered: ${ex}, and the result is: ${result}`);
}

mathExpressin.onclick = function () {
    mathExpression();
}

// --------------------------------------------------------

function prom() {

    do {
        var name = prompt("Enter Your Name: ");
        if (name && isNaN(name)) {
            break;
        }
    } while (true);

    do {
        var birthYear = prompt("Enter Your birth year (must be less than 2010): ");
        birthYear = parseInt(birthYear);

        if (!isNaN(birthYear && birthYear < 2010)) {
            break;
        }
    } while (true);

    var age = 2025 - birthYear;

    var div = document.querySelector('div');

        div.innerHTML = `Name: ${name} <br>
                        Birth Year: ${birthYear} <br>
                        Age: ${age}`;
}

promp.onclick = function () {
    prom();
}

//------------------------------------------------------------------------------------------

// Review and test the following:
// 1-	Try this code using strict mode and without strict mode,
// what’s the difference? And why?

/**
 * with strict mode the code does not run because y is not defined
 * 
 * without strict mode the code does run without any error
 */

// function foo() {
//     var x;
//     x = 5;
//     y = 6;
    
//     return x + y;
// }
// console.log(foo());

console.log("-".repeat(20));


// 2-	Will this code work with strict mode? Explain why?
/**
 * because y is defined 
 * 
 * because x is defined after hoisting
 */


// var y;	
// y = 10;
// x = 5; 
// console.log(x); 
// console.log(y); 
// var x;

console.log("-".repeat(20));

//3-	What’s the value of y variable in the following code? And why?

/**
 * the value of y variable is undefined  
 * 
 * y is already declared due to hoisting.
        But y is not yet assigned a value
 */

// var x = 5; 
// console.log(x); 
// console.log(y); 
// var y = 7; 

console.log("-".repeat(20));

//4- What are the expected errors (2 errors or undefined output)
// from the following code? And why?
// What’s the difference between var & let?


/** 
 * 
alert(x) Error/Output
ReferenceError: Cannot access 'x' before initialization
Reason :	let in TDZ before initialization.

console.log(i) Error/Output
	ReferenceError: i is not defined	
    Reason : i is block-scoped inside the for loop

            var             ||      let
Scope:	Function-scoped     ||	Block-scoped {}

Hoisting:	Yes (initialized as undefined) ||	Yes (but in TDZ, not usable)

Re-declaration :allowed	Yes (in the same scope) ||	No (in the same scope)

Accessibility before declaration:	Accessible (value = undefined)	|| Not accessible → TDZ → ReferenceError



*/

// function test() {
// 	for (let i = 0; i < 10; i++) {
//         alert(i);
// 		alert (x);
// 		let x=10;
// 	}
// console.log(i);
// }
