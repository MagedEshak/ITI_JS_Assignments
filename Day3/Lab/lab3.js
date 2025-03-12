
//----------------- Task 1 -------------------------

let textbox = document.getElementById("keyPress");

function keyPress(e) {
    alert(`Pressed Key: ${e.key}`);
}

  textbox.addEventListener("mousedown", function(event) {
    let buttonName = "";
    switch(event.button) {
      case 0:
        buttonName = "Left Mouse Button";
        break;
      case 1:
        buttonName = "Middle Mouse Button";
        break;
      case 2:
        buttonName = "Right Mouse Button";
        break;
    }
    alert("Mouse button clicked: " + buttonName);
  });
  
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

