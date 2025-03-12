let userName = new URLSearchParams(location.search);
let user = userName.get("UserName");
document.getElementById("hi").innerHTML = `Welcome <b>${user}</b>`;