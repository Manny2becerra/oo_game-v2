/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    //adds letter placeholders when the game starts
    addPhraseToDisplay() {
        const arr = this.phrase.split('');
        //console.log(arr);
        arr.forEach((letter) => { 
            const regex = /\w/;
            if (regex.test(letter)) {
                const phrase = document.getElementById('phrase');
                const space = document.createElement('li');
                space.className = `hide letter ${letter}`;
                space.textContent = letter;
                phrase.firstElementChild.appendChild(space);
            } else {
                const phrase = document.getElementById('phrase');
                const space = document.createElement('li');
                space.className = 'space';
                phrase.firstElementChild.appendChild(space);
            }
            
        });
    }

    //checks letter to see if its in the phrase
    checkLetter(letter) {
            const arr = this.phrase.split('');
            const phrase = this.phrase;
            //console.log(phrase);
            const guessedLetter = letter;
            const regex = new RegExp(guessedLetter);
           return regex.test(phrase);

    }
    // reveals matched letter selected by the player
    showMatchedLetter(letter) {
            const letterSpace = document.getElementsByClassName(`hide letter ${letter}`);

            // keeps the length of letterSpace array value constant
            const letterLength = letterSpace.length;
            
            /* loops through all classes with the 'hide letter (letter parameter)' 
            and changes the class name to 'show letter (letter parameter)'*/
            for (let i = 0; i < letterLength; i++) {
                letterSpace[0].className = `show letter ${letter}`;
            }
    }
        
}