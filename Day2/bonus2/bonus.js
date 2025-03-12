console.log("Day 2 bonus");
console.log("-".repeat(20));

let btn = document.getElementById("btn-datName");


btn.onclick = function () {
    let userDateInput = prompt("Enter your date: (ex: YYYY-MM-DD)");

    let dateObj = new Date(userDateInput);
        
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let getDay = dateObj.getDay();
        
        document.write(dayNames[getDay] + "<br>");

}

//-------------------------------------------------------------------
document.getElementById("register").onclick = function(){
    let phoneNum = document.getElementById("phone").value;

    let phoneRe = /^(20)(01)(1|2|5)(\d){8}$/;

    let validationResult = phoneRe.test(phoneNum);
    
    if (validationResult === false) {
        return false;
    }
    console.log(phoneNum.match(phoneRe));
    return true;
}

//-------------------------------------------------------------------

let btnAge = document.getElementById("btn-userAge");


btnAge.onclick = function () {
let userDateOfBirthInput = prompt("Enter your date: (ex: YYYY-MM-DD)");

    if (userDateOfBirthInput.length <= 10 && userDateOfBirthInput.charAt(4) === "-" && userDateOfBirthInput.charAt(7) === "-") {
        let date = new Date();
        let birth = new Date(userDateOfBirthInput);

        let day = birth.getDate();
        let month = birth.getMonth();
        let year = birth.getFullYear();

        let currDay = date.getDate();
        let currMonth = date.getMonth();
        let currYear = date.getFullYear();

        let ageYear = currYear - year;
        let ageMonth = currMonth - month;
        let ageDay = currDay - day;

    if (ageDay < 0) {
        let daysInPrevMonth = new Date(currYear, currMonth, 0).getDate();
        ageDay += daysInPrevMonth;
        ageMonth -= 1;
    }

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear -= 1;
        }
        
        document.write("<b>Age:</b> <span>" + ageYear + "</span><br>");
        document.write("<b>Month:</b> <span>" + ageMonth + "</span><br>");
        document.write("<b>Day:</b> <span>" + ageDay + "</span><br>");
    } else {
        console.log("Error");
    }
}

//-------------------------------------------------------------------
let birthDay = prompt("Enter your BirthDate: ");

let color = prompt("Enter your Color: \n(r) Red\n(b) Blue\n(g) Green:");

let colorMap = {
    r: "red",
    b: "blue",
    g: "green",
};

let selectColor = colorMap[color.toLocaleLowerCase()];
let dateNow = new Date().toLocaleDateString();

document.write("<b>Current Date:</b> <span style='color:" + selectColor + "'>" + dateNow + "</span>");

