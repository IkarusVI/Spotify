let playPrincipal = document.querySelector("#play-pause");
let secundario = document.querySelectorAll(".album-play");
let secundarioImg = document.querySelectorAll(".album-img");
let secundarioTittle = document.querySelectorAll(".album-tittle");
let player = document.querySelector("#music-player");
let play = document.querySelector("#player");
let imgPlayer = document.querySelector("#img-player");
let currentSongName = document.querySelector("#current-song-name");

let pressed = false;

playPrincipal.addEventListener("click", () => {
    if (!pressed) {
        player.style.display = "flex";
        play.play();
        playPrincipal.src = "images/pause.png"; 
        pressed = true;

        let ruta = secundarioImg[0].src; 
        let tittle = secundarioTittle[0].textContent;  
        imgPlayer.src = ruta;
        currentSongName.textContent = tittle;
    } else {
        playPrincipal.src = "images/play.png"; 
        play.pause();
        player.style.display = "none";
        pressed = false;
    }
});

secundario.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (element.src.includes("images/play.png")) {
            player.style.display = "flex";
            element.src = "images/pause.png"
            play.play();
            
            let ruta = secundarioImg[index].src;
            let tittle = secundarioTittle[index].textContent;
            imgPlayer.src = ruta;
            currentSongName.textContent = tittle;
        } else {
            element.src = "images/play.png"
            play.pause();
            player.style.display = "none";   
        }
        
    });
});
