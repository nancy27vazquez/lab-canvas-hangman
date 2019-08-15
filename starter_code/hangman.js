let hangman;

class Hangman {
  constructor() {
    this.words = ["hola", "nan", "ernesto"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  getWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomWord];
    return this.words[randomWord];
  }
  checkIfLetter(a) {
    if (a <= 65 && a >= 90) {
      this.letters.push(a);
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(a) {
    if (this.letters.includes(a)) {
      return true;
    } else {
      return false;
    }
  }
  addCorrectLetter() {}
  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {}
}

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
