import { autoplay_musicas, retoma_musicas, para_musicas } from "./modules/audio";

let icone_som = document.querySelector(".volume_icon") as HTMLImageElement;
let tocando_musica = true;

icone_som.addEventListener("click", () => {
    if(tocando_musica){
        para_musicas()
        tocando_musica = false;
        icone_som.src = "./images/volumeOf_icon.png"
    }
    else{
        retoma_musicas()
        tocando_musica = true;
        icone_som.src = "./images/volumeOn_icon.png"
    }
})

autoplay_musicas()