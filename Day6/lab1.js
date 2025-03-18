console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

//for..in.. => print indexes
console.log("-".repeat(20));
console.log("I'm in for..in..");
console.log("-".repeat(20));

for (let key in friends) {
    console.log(key);
}

//for..of.. => print values
console.log("-".repeat(20));
console.log("I'm in for..of..");
console.log("-".repeat(20));

for (let ele of friends) {
    console.log(ele);
}

//forEach => print values but must carry call back function
console.log("-".repeat(20));
console.log("I'm in forEach");
console.log("-".repeat(20));

friends.forEach(e => {
    console.log(e);
});

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let studentData = {
    Std_name: "Maged",
    uni_name: "EELU",
    fac_name: "IT",
    grad: "Good",
}

console.log(`${studentData.Std_name} is a student in faculty of ${studentData.fac_name} in university ${studentData.uni_name} and his final grad is ${studentData.grad}.`);

//--------------- 3 -------------------------
console.log("Assignment Three:-");
console.log("=".repeat(20));

let str = "hello";

if (str.includes("e")) {
    console.log(true);
} else {
    console.log(false);
}

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let employeeData = {
    empName: "Maged",
    empCompany: "ITI",
    empSalary: 15000,
    city: null ?? "Cairo",
}

console.log(employeeData.city);

//--------------- 5 -------------------------
console.log("=".repeat(20));
console.log("Assignment Five:-");
console.log("=".repeat(20));

let numbersArr = [1, 5, 3, 4, 2, 4, 6, 8, 5];

//--------------- a -------------------------
console.log(" the odd values. ");
console.log("-".repeat(20));

let oddArr = numbersArr.filter(e => {
    return e % 2 != 0;
});

console.log(oddArr);

//--------------- b -------------------------
console.log("-".repeat(20));

numbersArr.forEach(e => {
    if (e % 2 === 0) {
       console.log(e);
    }
});

//--------------- c -------------------------
console.log("-".repeat(20));

let firstNum = numbersArr.find(e => {
    return e > 5;
});
console.log(firstNum);

//--------------- d -------------------------
console.log("-".repeat(20));

let doubleArrValue = numbersArr.map(e => {
    return e * 2;
});
console.log(doubleArrValue);

//--------------- 6 -------------------------
console.log("=".repeat(20));
console.log("Assignment Six:-");
console.log("=".repeat(20));

(function (num1, num2) {
    console.log(`The Sum of ${num1} + ${num2} = ${num1 + num2}`);

    return alert(`The Sum of ${num1} + ${num2} = ${num1 + num2}`);
})(5, 6);

//--------------- 7 -------------------------
console.log("=".repeat(20));
console.log("Assignment Seven:-");
console.log("=".repeat(20));

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//______________________________ a __________________________________
console.log("-".repeat(20));

fruits.forEach(e => {
    if (typeof e === 'string') {
        console.log("Yes every element in the given array is a string");
    } else {
        console.log("No every element in the given array is not a string");
    }
});
//______________________________ b __________________________________
console.log("-".repeat(20));

let startWithA = fruits.filter(e => e.startsWith('a'));

if (startWithA.length > 0) {
    console.log("Yes that some of array elements starts with \"a\" :- " + startWithA);
} else {
console.log('No, none of the array elements start with "a".');
}
//______________________________ c __________________________________
console.log("-".repeat(20));

let startWith_B_S = fruits.filter(e => e.startsWith('b') || e.startsWith('s') );

if (startWith_B_S.length > 0) {
    console.log("Yes that some of array elements starts with \"b or S\":- " + startWith_B_S);
} else {
console.log('No, none of the array elements start with "a".');
}
//______________________________ d __________________________________
console.log("-".repeat(20));

startWith_B_S.forEach(e => console.log(e));

