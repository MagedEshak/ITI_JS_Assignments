let form0 = document.forms[0];

form0.onsubmit = reDirect;


function reDirect(e) {
    let form0Elements = form0.elements;
    let fullNameInput = form0Elements[0].value;
    let emailInput = form0Elements[1].value;
    let passwordInput = form0Elements[2].value;
    let confirmPasswordInput = form0Elements[3].value;
    let selectInput = form0Elements[4].value;

if (fullNameInput.length <= 4 || emailInput === "" || selectInput.value === "Please, Select Your City") {
        alert("Please fill all required fields correctly.");
        e.preventDefault();
        return;
    }

if (passwordInput.length < 8) {
        alert("Password must be at least 8 characters.");
        e.preventDefault();
        return;
    }

if (passwordInput !== confirmPasswordInput) {
      alert("Passwords do not match.");
        e.preventDefault();
        return;
    }
    e.preventDefault(); // To don't send data to url
    let targetURL = `http://127.0.0.1:5500/SolveAssignment/ThankYou.html?fullName=${encodeURIComponent(fullNameInput)}&email=${encodeURIComponent(emailInput)}&city=${encodeURIComponent(selectInput)}`;
    location.replace(targetURL);
}