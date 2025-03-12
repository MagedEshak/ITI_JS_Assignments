
let score = 0;

let img = document.querySelectorAll("img");
function scoreCounter() {
    ++score;
    alert("Score: " + score);
}

img.forEach(imgs => imgs.addEventListener("click", scoreCounter));

setTimeout(function () {
    img.forEach(imgs => {
        imgs.removeEventListener("click", scoreCounter);

        imgs.addEventListener("click", function () {
        alert("Game Over");
    });

    });
    
}, 5000);


