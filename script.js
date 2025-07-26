const btnEle = document.getElementById("btn");
const animeContainerEle = document.querySelector(".anime-container");
const animeImgEle = document.querySelector(".anime-img");
const animeNameEle = document.querySelector(".anime-name");

btnEle.addEventListener("click", async function() {
    try {
        btnEle.disabled = true
        btnEle.innerText = "Loading...";
        animeNameEle.innerText = "Updating...";
        animeImgEle.src = "spinner.svg";
        const response = await fetch("https://api.waifu.im/search");
        const data = await response.json();
        btnEle.disabled = false;
        btnEle.innerText = "Get Anime";
        animeContainerEle.style.display = "block";
        animeImgEle.src = data.images[0].url;
        animeNameEle.innerText = "Unknown";
        // animeNameEle.innerText = data.artist;
    } catch (error) {
        btnEle.disabled = false;
        btnEle.innerText = "Get Anime";
        animeNameEle.innerText = "An error happend , Try Again !!";
    }

})