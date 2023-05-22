const btnE1 = document.getElementById('btn');
const animeContainerE1 = document.querySelector('.anime-container')
const animeImgEl = document.querySelector(".anime-img");
const animeName = document.querySelector('.anime-name')

btnE1.addEventListener('click',async function(){
    try{
        btnE1.disabled = true;
        btnE1.innerText = "loading...";
        animeName.innerText = "Updating...";
        animeImgEl.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        animeContainerE1.style.display = "block";
        animeImgEl.src = data.url;
        animeName.innerText = data.artist;
    } catch(error){
        console.log(error);
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        amineNameEl.innerText = "An error happened, please try again";

    }
});