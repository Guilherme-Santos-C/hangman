export {toca_musicas, para_musicas};
import { shuffleArray } from "./embaralhaArrays";

let index = 0;

const musicas_game:Array<HTMLAudioElement> = shuffleArray([
    new Audio('../../../public/music/game_music1.mp3'),
    new Audio('../../../public/music/game_music2.mp3'), 
    new Audio('../../../public/music/game_music3.mp3')
    ]) 

const toca_musicas = () => {
    musicas_game[index].play()
    musicas_game[index].addEventListener("ended" , () => {
        toca_musicas()
    })
    index += 1;
    if(index == 3){
        index = 0
    }
}

const para_musicas = () => {
    console.log("chamou")
    musicas_game[1-index].pause()
}


