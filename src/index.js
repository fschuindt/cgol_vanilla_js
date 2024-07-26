import { Game } from './game.js';

document.getElementById("start-button").addEventListener("click", function() {
    Game.launch(80, 80, 100);
});
