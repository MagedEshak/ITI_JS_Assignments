
//----------------- Task 1 -------------------------
function keyPress(e) {
    alert(`Pressed Key: ${e.key}`);
}

//----------------- Task 2 -------------------------
var tim;
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "div-id");

document.getElementById("strClok").onclick = function () {

    alert("Clock Started");

    tim = setInterval(function () {
        let displayClock = new Date().toLocaleTimeString();
        document.body.appendChild(newDiv);
        newDiv.innerHTML = displayClock;
    }, 1000);
}


document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toLowerCase() === "w") {
      clearInterval(tim); // Stop the clock
      alert("Clock stopped");
    }
});
  


//----------------- Task 3 -------------------------

