
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://127.0.0.1:5500/Day5/Lab/E-Coomerce/api.json");

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        displayDataFormAJAXfile(JSON.parse(xhr.responseText));
    }
}

xhr.send();


function displayDataFormAJAXfile(jsonD) {
    for (let item of jsonD) {

        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        let img = document.createElement("img");
        img.setAttribute("src", item.image);
        productCard.appendChild(img);

        let title = document.createElement("p");
        title.classList.add("title");
        title.innerText=item.title;
        productCard.appendChild(title);

        let price = document.createElement("p");
        price.classList.add("price");
        price.innerText=item.price + " EGP";
        productCard.appendChild(price);

        let description = document.createElement("p");
        description.classList.add("description");
        description.innerText=item.description;
        productCard.appendChild(description);

        let rating = document.createElement("p");
        rating.classList.add(".rating");
        rating.innerText= "Rating: " + item.rating.rate;
        productCard.appendChild(rating);

        let category = document.createElement("p");
        category.classList.add("category");
        category.innerText=item.category;
        productCard.appendChild(category);
        
        let btn = document.createElement("button");
        btn.classList.add("add-cart");
        btn.innerText = "ADD TO CART";

        btn.addEventListener("click", function () {
            addToCart(item.id);
        });

        let detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.innerText = "View Details";


        detailsBtn.onclick = function () {
            localStorage.setItem("selectedProductId", item.id);
            location.href = "details.html";
        };
        
        productCard.appendChild(btn);
        productCard.appendChild(detailsBtn);

        document.querySelector(".product-list").appendChild(productCard);
    }
}


function addToCart(productId) {

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartItems.includes(productId)) {
        cartItems.push(productId);
    }


    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert("Product added to cart!");
}