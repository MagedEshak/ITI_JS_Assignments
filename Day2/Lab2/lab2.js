console.log("Day 2 Lab");
console.log("-".repeat(20));

let tips = ["Use let and const, not var.", "Use === instead of ==.", "Keep code modular.", "Learn .map(), .filter(), .reduce().","Avoid frequent DOM manipulation.","null ≠ undefined.","Use try...catch for errors.","Arrow functions don't have this.","Use console.log() for debugging.","Test in multiple browsers."];
let random = Math.floor(Math.random() * tips.length);

for (let i = 0; i < tips.length; i++) {
    if (i === random) {
        document.write(tips[i] + "<hr>");
    }
}

//-------------------------------------------------------------------

let btn = document.getElementById("btn-dateTime");
let date = new Date();
btn.onclick = function () {
    document.write(date.toLocaleString() + "<br>");
}

//-------------------------------------------------------------------

let userEmail = prompt("Enter Your Email: ");

for (let i = 0; i < userEmail.length; i++) {
    if (userEmail.includes("@") && userEmail.indexOf("@") !== 0 && userEmail.indexOf("@") !== userEmail.length-1 ) {
        document.write(`userEmail: <b>${userEmail}</b><hr>`);
        break;
} else {
        document.write("Please Enter your Email Like => abc@def.cc"+ "<hr>");
        break;
}
    
}

//-------------------------------------------------------------------


let bt = document.getElementById("btn-name");

bt.onclick = function () {
    let userInput = prompt("Enter your Full Name: ");
    
    let nameReg = new RegExp(/^[A-Za-z]{3,}( [A-Za-z]{3,})+$/);
    let emailReg = new RegExp(/^[A-Za-z0-9._]{3,}@[a-zA-Z]{3,}\.eg$/);

    let nameCheck = nameReg.test(userInput);

    do {

        nameCheck = nameReg.test(userInput);

        if (nameCheck === true) {
            userEmail = prompt("Enter Your Email: ");

            let emailCheck = emailReg.test(userEmail);

            if (emailCheck === true) {

                document.write(`
                Your Full Name: <b>${userInput}</b><hr>
                Your Email: <b>${userEmail}</b><hr>
                `);
                break;
            }
        }

    } while (true);
}

//-------------------------------------------------------------------

let studentsGradesArr = [60, 100, 10, 15, 85];

studentsGradesArr.sort(function (start, end) {
    return end - start;
});

console.log(studentsGradesArr);

console.log("-".repeat(5) + " the highest student degree " + "-".repeat(5) );


console.log(studentsGradesArr.find(grade => grade <= 100));

console.log("-".repeat(5) + " the grades of all students with grades below 60 " +"-".repeat(5) );


console.log(studentsGradesArr.filter(grades => grades < 60));

//-------------------------------------------------------------------


let studentsNamesAndDeg = [
    { name: "Maged", degree: 100 },
    { name: "Eshak", degree: 95 },
    { name: "Mina", degree: 55 },
    { name: "Kha", degree: 90 },
    { name: "Mo", degree: 60 },
    { name: "vu", degree: 80 },
];

console.log("-".repeat(5) + " who got degree between 90 and 100  " + "-".repeat(5) );


console.log(studentsNamesAndDeg.find(student => student.degree >= 90 && student.degree <= 100).name);

console.log("-".repeat(5) + " the grades of all students with grades below 60 " +"-".repeat(5) );

let std =studentsNamesAndDeg.filter(student => student.degree <= 60);

for (let student of std) {
    console.log(student.name);
}

console.log("-".repeat(5) + " Push " +"-".repeat(5) );

studentsNamesAndDeg.push({ name: "Ahmed", degree: 10 });
studentsNamesAndDeg.push({ name: "Mohamed", degree: 40 });

for (const key in studentsNamesAndDeg) {
console.log(studentsNamesAndDeg[key]);
}

console.log("-".repeat(5) + " pop " + "-".repeat(5));

studentsNamesAndDeg.pop();
console.log(studentsNamesAndDeg);
for (const key in studentsNamesAndDeg) {
console.log(studentsNamesAndDeg[key]);
}

console.log("-".repeat(5) + " sort " + "-".repeat(5));

studentsNamesAndDeg.sort((a, b) => a.name.localeCompare(b.name))
console.log(studentsNamesAndDeg);

console.log("-".repeat(5) + " splice " + "-".repeat(5));

studentsNamesAndDeg.splice(2, 0, { name: "Mona", degree: 91 }, { name: "Tamer", degree: 75 });
console.log(studentsNamesAndDeg);
for (const key in studentsNamesAndDeg) {
console.log(studentsNamesAndDeg[key]);
}


console.log("-".repeat(5) + " splice remove " + "-".repeat(5));

studentsNamesAndDeg.splice(3,1);
console.log(studentsNamesAndDeg);
for (const key in studentsNamesAndDeg) {
console.log(studentsNamesAndDeg[key]);
}

//-------------------------------------------------------------------

let btnBirth = document.getElementById("btn-date");

btnBirth.onclick = function validat() {
    let userBirth = prompt("Enter date in format: (DD-MM-YYYY)   ex. 22–01–1999");

    if (userBirth.length <= 10 && userBirth.charAt(2) === "-"  && userBirth.charAt(5) === "-") {

        let day = parseInt(userBirth.substring(0, 2));
        let month = parseInt(userBirth.substring(3, 5));
        let year = parseInt(userBirth.substring(6));

        let date = new Date(year, month - 1, day);

        alert("Your birth date is: " + date.toDateString());

    } else {
        alert("Wrong Date Format");
    }
}