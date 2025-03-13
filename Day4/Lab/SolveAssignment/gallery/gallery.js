let allImgs = document.querySelectorAll(".imgsClass1");
let imgs = document.getElementById("img");
let playbtn = document.getElementById("play");
let nextbtn = document.getElementById("next");
let stopbtn = document.getElementById("stop");
let previousbtn = document.getElementById("previous");

let intervalFun;

let imagesArr = [
    "../../Resources for Assignments/Images For Slide Show/1.jpg",
    "../../Resources for Assignments/Images For Slide Show/2.jpg",
    "../../Resources for Assignments/Images For Slide Show/3.jpg",
    "../../Resources for Assignments/Images For Slide Show/4.jpg",
    "../../Resources for Assignments/Images For Slide Show/5.jpg",
    "../../Resources for Assignments/Images For Slide Show/6.jpg",
    "../../Resources for Assignments/Images For Slide Show/7.jpg"
];
let imgCounter = 0;

playbtn.addEventListener("click", function () {
    intervalFun = setInterval(() => {
        imgCounter++;
        if (imgCounter >= imagesArr.length) {
            imgCounter = 0
        }
        imgs.src = imagesArr[imgCounter];
    }, 500);
        
});

imgs.onmouseover = function() {
   intervalFun = setInterval(() => {
        imgCounter++;
        if (imgCounter >= imagesArr.length) {
            imgCounter = 0
        }
        imgs.src = imagesArr[imgCounter];
    }, 500);
}

stopbtn.addEventListener("click", function () {
    clearInterval(intervalFun);
});

imgs.onmouseleave =  function () {
    clearInterval(intervalFun);
}

nextbtn.addEventListener("click", function () {
    imgCounter++;
        if (imgCounter >= imagesArr.length) {
            imgCounter = 0
        }
        imgs.src = imagesArr[imgCounter-1];
});

previousbtn.addEventListener("click", function () {
    
    imgCounter--;
        if (imgCounter < 0) {
            imgCounter = imagesArr.length - 1;
    }
        imgs.src = imagesArr[imgCounter];
});


for (const img of allImgs) {
    img.onmousemove = over;
    img.onmouseleave = leave;
}

function over(e) {
    e.target.classList.remove("imgsClass1");
    e.target.classList.add("imgsClass");
}

    function leave(e) {
    e.target.classList.remove("imgsClass");
    e.target.classList.add("imgsClass1");
    }


    let img = document.createElement("img");
        img.setAttribute("src", "../../Resources for Assignments/Images For Slide Show/3.jpg");

        let container = document.getElementById("imgsId");

        container.appendChild(img);

    let img2 = document.createElement("img");
        img2.setAttribute("src", "../../Resources for Assignments/Images For Slide Show/1.jpg");
        container.insertBefore(img2, container.firstChild);

    let img3 = document.createElement("img");
        img3.setAttribute("src", "../../Resources for Assignments/Images For Slide Show/7.jpg");
                container.appendChild(img3);

    alert("Before remove: " + container.childNodes.length);
        
    container.removeChild(img2);

    alert("After remove: " + container.childNodes.length);

