export {autoplay_musicas, para_musicas, retoma_musicas};
import { shuffleArray } from "./embaralhaArrays";

let index = 0;

const musicas_game:Array<HTMLAudioElement> = shuffleArray([
    new Audio('./music/game_music1.mp3'),
    new Audio('./music/game_music2.mp3'), 
    new Audio('./music/game_music3.mp3')
    ]) 

const autoplay_musicas = () => {
    if(index >= musicas_game.length){
        index = 0
    }
    musicas_game[index].play()
    musicas_game[index].addEventListener("ended" , () => {
        index += 1;
        autoplay_musicas()
        })
    }

const para_musicas = () => {
    musicas_game[index].pause()
}

const retoma_musicas = () => {
    musicas_game[index].play()
}