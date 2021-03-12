/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.getElementById("btn__reset");
const overlay = document.getElementById('overlay');
const youlost = document.createElement('h3');
const youWon = document.createElement('h3');
youWon.className = 'Win';
youlost.className = 'lose';
youWon.style.background = '#3a3f58';
youlost.style.background = '#3a3f58';
overlay.appendChild(youlost);
overlay.appendChild(youWon);
youlost.style.display = "none";
youWon.style.display = "none";
youlost.textContent = "Sorry you lost. Play Again!"
youWon.textContent = "You won! Play Again!"
youWon.style.backgroundColor = "var(--color-win)";
youlost.style.backgroundColor = "#f5785f";


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