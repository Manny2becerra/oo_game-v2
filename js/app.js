/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.getElementById("btn__reset");

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
 
document.addEventListener('click', (event) => {
    const start = document.getElementById('overlay');
    if (start.style.display === 'none') {
        // console.log(event.target.textContent); 
         const regex = /^[A-Za-z]/;
        // console.log(regex.test(event.target.texContent));
        if (event.target.className === 'key') {
            if (regex.test(event.target.texContent)) {
                const letter = event.target.textContent;
                game.handleInteraction(letter);
            }
        }
    }
 });