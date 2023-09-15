import { playRound } from './game.js';

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.getElementById("playerScore")
const computerScoreText = document.getElementById("computerScore");
const closer = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-content");
const result = document.querySelector(".result");
closer.onclick = () => {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");


[rock, paper, scissors].forEach(element => {
    element.addEventListener("click", () => {
        const elementName = element.classList[0];
        const selection = document.querySelector(".player-side .player-selection");
        const image = document.createElement("img");
        image.src = `./images/${elementName}.png`;
        selection.replaceChildren(image);

        const outcomeText = playRound(elementName);
        showModal(outcomeText);
        showScores();
    })
});

function showScores() {
    playerScoreText.textContent = `Score: \n\r${playerScore}`;
    computerScoreText.textContent = `Score: \n\r${computerScore}`;
}

function drawOpponentChoice(opponentChoice) {
    const newImg = document.createElement("img");
    const opponent_selection = document.querySelector(".opponent-side .opponent-selection");
    newImg.src = `./images/${opponentChoice}.png`;
    opponent_selection.replaceChildren(newImg)
}

function showModal(outcomeText) {
    result.textContent = outcomeText;
    modalBox.style["background-color"] = evalResult(outcomeText);
    modal.style.display = "flex";
    setTimeout(() => modal.style.display = "none", 1000);

}

function evalResult(outcomeText) {
    let bgColor;
    switch (outcomeText) {
        case "You win!":
            bgColor = "green";
            playerScore++;
            break;
        case "Computer wins!":
            bgColor = "red";
            computerScore++;
            break;
        case "Draw!":
            bgColor = "white";
            break;
        default:
    }
    return bgColor;
}

showScores();

export { drawOpponentChoice };