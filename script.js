let buttonOne = document.querySelector("#button-one");
let buttonTwo = document.querySelector("#button-two");
let buttonThree = document.querySelector("#button-three");
let buttonFour = document.querySelector("#button-four");
let buttonFive = document.querySelector("#button-five");
let buttonSix = document.querySelector("#button-six");
let variableText = document.querySelector("#variable-text");
let scoreText = document.querySelector("#score-text");
let timer = document.querySelector("#timer");
let result = document.querySelector("#result");

let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];
let dice = document.querySelectorAll("img");

let selectedVariable = 0;
let totalScore = 0;

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieValue = Math.floor(Math.random() * 6);
    console.log(dieValue + 1);
    document.querySelector("#die").setAttribute("src", images[dieValue]);
    document.querySelector("#total").innerText =
      "The dice roll is " + (dieValue + 1);
    if (dieValue + 1 === selectedVariable) {
      totalScore = totalScore + 1;
      scoreText.innerText = "Score: " + totalScore;
      result.innerText = "Yay!! you guessed it right";
    } else {
      result.innerText = "Better luck next time..";
    }
    selectedVariable = 0;
    variableText.innerText = "Selected variable: None";
  }, 1000);
  result.innerText = "Let's check your luck!";
}
roll();

setInterval(roll, 5000);

let counter = 5;
setInterval(() => {
  if (counter === 0) {
    counter = 5;
  }
  counter = counter - 1;
  timer.innerText = "The dice will roll in " + counter + " seconds";
}, 1000);

buttonOne.addEventListener("click", () => {
  selectedVariable = 1;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
buttonTwo.addEventListener("click", () => {
  selectedVariable = 2;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
buttonThree.addEventListener("click", () => {
  selectedVariable = 3;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
buttonFour.addEventListener("click", () => {
  selectedVariable = 4;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
buttonFive.addEventListener("click", () => {
  selectedVariable = 5;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
buttonSix.addEventListener("click", () => {
  selectedVariable = 6;
  variableText.innerText = "Selected variable: " + selectedVariable;
});
