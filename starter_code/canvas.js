var canvas = document.getElementById("hangman");
var ctx = canvas.getContext("2d");

// Hang structure
ctx.lineWidth = 3;
ctx.beginPath(0, 0);
ctx.moveTo(150, 660);
ctx.lineTo(90, 715);
ctx.lineTo(210, 715);
ctx.lineTo(150, 660);
ctx.stroke();

ctx.beginPath(150, 660);
ctx.moveTo(150, 660);
ctx.lineTo(150, 100);
ctx.lineTo(450, 100);
ctx.lineTo(450, 150);
ctx.stroke();

// Poor man's head
ctx.beginPath();
ctx.arc(450, 200, 50, 0, Math.PI * 2);
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

// Poor man's body
ctx.beginPath(0, 0);
ctx.moveTo(450, 250);
ctx.lineTo(450, 450);
ctx.stroke();

// Poor man's right arm
ctx.beginPath();
ctx.moveTo(450, 290);
ctx.lineTo(380, 370);
ctx.stroke();

// Poor man's left arm
ctx.beginPath();
ctx.moveTo(450, 290);
ctx.lineTo(520, 370);
ctx.stroke();

// Poor man's right leg
ctx.beginPath();
ctx.moveTo(450, 450);
ctx.lineTo(370, 570);
ctx.stroke();

// Poor man's left leg
ctx.beginPath();
ctx.moveTo(450, 450);
ctx.lineTo(520, 570);
ctx.stroke();

// Secret word lines
ctx.

/* ============= */
//We also want to store in a variable the secret word.

class HangmanCanvas {
  constructor(secretWord){
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }
  createBoard(){
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawLines(){}
  writeCorrectLetter(index){
    ctx.font = '48px Arial';
    // Write letter
    ctx.fillText(this.writeCorrectLetter, 300,600);
  }
  writeWrongLetter(letter, errorsLeft){}
  drawHangman(){}
  gameOver(){
    var img = new Image();
    img.src = 'images/gameover.png';
    img.onload = function(){
      this.ctx.drawImage(img, 315,280,570,240)
    }
  }
  winner(){
    var img = new Image();
    img.src = 'images/awesome.png';
    img.onload = function(){
      this.ctx.drawImage(img, 164,91,872,618)
    }
  }
}