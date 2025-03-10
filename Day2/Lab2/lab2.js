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

