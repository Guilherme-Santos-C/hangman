import { autoplay_musicas, retoma_musicas, para_musicas } from "./modules/audio";

let icones_som:HTMLImageElement[] = [document.querySelector(".volume_icon")!, document.querySelector(".volume_icon_mobile")!];
let tocando_musica = true;

icones_som.forEach((iconeDeSom, index) => {
    iconeDeSom.addEventListener("click", () => {
        if(tocando_musica){
            para_musicas()
            tocando_musica = false;
            iconeDeSom.src = "./images/volumeOff_icon.png"
            iconeDeSom.textContent = "Música: Off"
        }
        else{
            retoma_musicas()
            tocando_musica = true;
            iconeDeSom.src = "./images/volumeOn_icon.png"
            iconeDeSom.textContent = "Música: On"
        }
    })    
})

autoplay_musicas()

// Aplicação da lógica do funcionamento das músicas através das funções importadas,
// somente uma vez através do forEach, para as duas mediaQuerys o icone(anchor Element) do mobile esta sendo tratado como imagem para facilitar implementação  





























