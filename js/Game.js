/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [new Phrase("A Dime A Dozen"), new Phrase("A Piece of Cake"), new Phrase("Back to Square One"), new Phrase("Beating Around the Bush"), new Phrase("Assistant to the regional manager")];
         this.activePhrase = null;
         this.missed = 0;
     }

     getRandomPhrase() {
         const randomNumber = Math.floor(Math.random() * 5);
         const randomPhrase = this.phrases[randomNumber];
         return randomPhrase;
     }
     // letter parameter is the key board letter selected
     handleInteraction(letter) { 
   //console.log(letter);
            if (this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);

                /* loops through keyboard elements to find which element matches 
                the selected letter then adds the disabled class */
                const keyboardElements = document.getElementsByClassName('key');
                for (let i = 0; i < keyboardElements.length; i++) {
                    if (keyboardElements[i].textContent === letter)  {
                        keyboardElements[i].setAttribute('disabled', true);
                        keyboardElements[i].className = 'chosen';
                    }
                }
                if (this.checkForWin()) {
                    this.gameOver();
                }
            } 
            
            else {
                /* loops through keyboard elements to find which element matches 
                the selected letter then changes the class name to 'wrong' */
                const keyboardElements = document.getElementsByClassName('key');
                for (let i = 0; i < keyboardElements.length; i++) {
                    if (keyboardElements[i].textContent === letter)  {
                        keyboardElements[i].className = 'wrong';
                    }
                }
                this.removeLife();
            }
        }


    removeLife() {
        const lifeDiv = document.getElementById('scoreboard');
        const lifeOl = lifeDiv.firstElementChild;
        const heart = lifeOl.getElementsByClassName('tries');
        const image = heart[0].firstElementChild;

        for (let i = 0; i < heart.length; i++) {
            const image = heart[i].firstElementChild;
          console.log(image.src);
            if (image.src === "file:///Users/manuelbecerra/Downloads/oop_game-v2/oo_game-v2/images/liveHeart.png" || image.src === "file:///Users/manuelbecerra/Downloads/oo_game-v2-master/images/liveHeart.png" || image.src === "http://127.0.0.1:5500/oo_game-v2/images/liveHeart.png") {
                image.src = "images/lostHeart.png";
                this.missed += 1;
                break;
            }
        }
        //console.log(this.missed);
        
        if (this.missed === 5) {
           this.gameOver(); 
           //console.log(true);
        }
    }

    checkForWin() {
        let lettersMatched = 0;
        const Oarr = this.activePhrase.phrase.split('');
        const arr = Oarr.filter(letter => letter !== ' ');
        //console.log(arr);
        const phrase = document.getElementById('phrase');
        const ul = phrase.firstElementChild;
        const li = ul.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            const regex = /show letter [A-Za-z]/;
            if (regex.test(li[i].className)) {
                lettersMatched += 1;            
            }
        }
        //console.log(lettersMatched);
        //console.log(arr.length);
        if (lettersMatched === arr.length) {
            return true;
        }
    }
    // removes start game overlay
    startGame() {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    gameOver() {
        const startScreen = document.getElementById('overlay');
        startScreen.removeAttribute('style');
       
        // resets all key elements
        const keyDiv = document.getElementById('qwerty');
        const keys = keyDiv.querySelectorAll('button');
       // console.log(keys.length);
        for (let i = 0; i < keys.length; i++) {
            keys[i].removeAttribute('disabled'); 
            keys[i].className = 'key';
        }

        // resets all hearts to full
        const lifeDiv = document.getElementById('scoreboard');
        const lifeOl = lifeDiv.firstElementChild;
        const heart = lifeOl.getElementsByClassName('tries');
        for (let i = 0; i < heart.length; i++) {
            const image = heart[i].firstElementChild;
            image.src = "images/liveHeart.png";
        }
         
        // resets ul element holding spaces to be
        const phraseDiv = document.getElementById('phrase');
        const phraseUL = phraseDiv.firstElementChild;
        const phrase = phraseUL.querySelectorAll('li');
        for (let i = 0; i < phrase.length; i++) {
            phrase[i].remove();
        }

    }
 }