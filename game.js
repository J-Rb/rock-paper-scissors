import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

let draws = 0;
let wins = 0;
let losses = 0;


async function playRound() {
    let userChoice = (await rl.question("Pick Rock, Paper or Scissors: ")).toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    if (userChoice == computerChoice) {
        draws++;
        return "Draw!";
    }
    else {
        let selected = rules[userChoice];
        if (computerChoice == selected.beats) {
            wins++;
            return "You win! ";
        }
        else {
            losses++;
            return "Computer wins! ";
        }
    }
}

async function game() {
    for (let i = 0; i < 5; i++) {
        console.log(await playRound());
    }
    console.log(`Wins = ${wins}`);
    console.log(`Draws = ${draws}`);
    console.log(`Losses = ${losses}`);
    rl.close();
}

let rules = {
    rock: {
        beats: "scissors",
        beatenBy: "paper"
    },
    paper: {
        beats: "rock",
        beatenBy: "scissors"
    },
    scissors: {
        beats: "paper",
        beatenBy: "rock"
    }
}


game();













/* check generation is fair
let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;

for (let i = 0; i < 100000; i++) {
    let choice = getComputerChoice();
    switch (choice) {
        case "rock":
            rockCount++;
            break;
        case "paper":
            paperCount++;
            break;
        case "scissors":
            scissorsCount++;
            break
        default:
            break;
    }
}


console.log(rockCount, paperCount, scissorsCount); */