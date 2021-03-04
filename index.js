let randomNumber1 = randomNumberGenerator();
let randomNumber2 = randomNumberGenerator();

changeDiceOne(randomNumber1);
changeDiceTwo(randomNumber2);
pickWinner(randomNumber1, randomNumber2);



function randomNumberGenerator() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  return randomNumber;
}

function changeDiceOne(randomNumber1){
    if (randomNumber1 === 1) {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice1.png");
      } else if (randomNumber1 === 2) {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice2.png");
      } else if (randomNumber1 === 3) {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice3.png");
      } else if (randomNumber1 === 4) {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice4.png");
      } else if (randomNumber1 === 5) {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice5.png");
      } else {
        return document
          .querySelector("img.img1")
          .setAttribute("src", "images/dice6.png");
      }
}

function changeDiceTwo(randomNumber2){
    if (randomNumber2 === 1) {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice1.png");
      } else if (randomNumber2 === 2) {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice2.png");
      } else if (randomNumber2 === 3) {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice3.png");
      } else if (randomNumber2 === 4) {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice4.png");
      } else if (randomNumber2 === 5) {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice5.png");
      } else {
        return document
          .querySelector("img.img2")
          .setAttribute("src", "images/dice6.png");
      }
      
}

function pickWinner(randomNumber1, randomNumber2){
    if (randomNumber1 === randomNumber2){
        return document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2){
        return document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else {
        return document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
}
