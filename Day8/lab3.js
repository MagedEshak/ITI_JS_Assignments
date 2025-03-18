//? ---------------------------------------------------- */
//!                     Promises                        */
//? -------------------------------------------------- */


fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        data.forEach(element => {
            console.log(element);
            let lis = document.createElement("li");
            lis.classList.add("li-selctor");

            let liink = document.createElement("a");
            liink.innerText = element.name;
            lis.appendChild(liink);

            liink.addEventListener("click", async () => {
                try {
                    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`);
                    let posts = await res.json();

                    if (posts.length > 0) {
                        let pos = `<h2 class="news-titles">${element.name}</h2>`;

                        posts.forEach(e => {
                            pos += `<p class="news-p">${e.title}</p>`
                        });
                        document.querySelector(".News").innerHTML = pos;
                    }
                } catch (error) {
                    console.log("er", error);
                    
                }
            });

            document.querySelector(".ul-Selectors").appendChild(lis);
        });
    }).catch((err) => {
        console.log("error", err);
    });