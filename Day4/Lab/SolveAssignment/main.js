let form0 = document.forms[0];
console.log(form0.inp);
form0.onsubmit = reDirect;


function reDirect(e) {
    let form0Elements = form0.elements;
    let fullNameInput = form0Elements[0].value;
    let emailInput = form0Elements[1].value;
    let passwordInput = form0Elements[2].value;
    let confirmPasswordInput = form0Elements[3].value;
    let selectInput = form0Elements[4].value;

if (emailInput === "" || selectInput.value === "Please, Select Your City") {
        alert("Plz correct the validation errors first.");
        e.preventDefault();
        return;
    }

if (form0Elements[0] == 'number') {
        alert("fullNameInput must be characters.");
        e.preventDefault();
        return;
    }

if (passwordInput.length < 8) {
        alert("Password must be at least 8 characters.");
        e.preventDefault();
        return;
    }

    if (passwordInput !== confirmPasswordInput) {
        let conPass = form0.elements["conPass"];
        if (true) {
                conPass.nextElementSibling.style.backgroundColor = '#EEEE';
                conPass.nextElementSibling.style.color = '#950f0f';
                conPass.nextElementSibling.innerText = "password and repeat password should be the sam";
                conPass.style.border = '6px solid red';
                conPass.style.backgroundColor = 'grey';
                conPass.focus();
            } else {
                        conPass.nextElementSibling.innerText = "";
                        conPass.style.backgroundColor = '#fffffff';
                        conPass.style.border = '';
            }
        e.preventDefault();
        return;
    }

    e.preventDefault(); // To don't send data to url
    let targetURL = `./ThankYou.html?fullName=${encodeURIComponent(fullNameInput)}&email=${encodeURIComponent(emailInput)}&city=${encodeURIComponent(selectInput)}`;
    location.replace(targetURL);
}


form0.elements["fullName"].onblur = function () {
    if (this.value.length <= 3 && this.value !== "") {
        this.nextElementSibling.style.backgroundColor = '#EEEE';
        this.nextElementSibling.style.color = '#950f0f';
        this.nextElementSibling.innerText = "invalid name";
        this.style.border = '6px solid blue';
         this.style.backgroundColor = 'grey';
        this.select();
        this.focus();
    } else {
       
        this.nextElementSibling.innerText = "";
        this.style.border = '';
        this.style.backgroundColor = '#ffff';
    }
}

