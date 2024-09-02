playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const TOTAL_ROUNDS = 5;

    for (let i = 0; i < TOTAL_ROUNDS; i++) {
        let result = playRound();
        if (result == 1) {
            break;
        }
    }

    displayScore();

    function playRound() {
        const validChoices = ["rock", "paper", "scissors"]
        const humanChoice = getHumanChoice(validChoices);

        if (humanChoice == null) {
            console.log("Game canceled.");
            return 1;
        }

        const computerChoice = getComputerChoice(validChoices);
    
         if (checkChoices(humanChoice, computerChoice) == 'tie') {
            console.log(`It's a tie! We both chose ${humanChoice}.`);
         } else if (checkChoices(humanChoice, computerChoice) == 'player') {
            console.log(`Congratulations! You win: ${humanChoice} beats ` +
                `${computerChoice}!`);
            humanScore++;
         } else {
            console.log(`Too bad! I win: ${humanChoice} loses to ` +
                `${computerChoice}!`);
            computerScore++;
         }
    }
    
    function checkChoices(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return 'tie';
        }
    
        else if ((humanChoice == "rock" && computerChoice == "scissors") ||
                 (humanChoice == "paper" && computerChoice == "rock") ||
                 (humanChoice == "scissors" && computerChoice == "paper")) {
            return 'player';
        }
    
        else {
            return 'computer';
        }
    }
    
    function displayScore() {
        if (humanScore > computerScore) {
            console.log(`Well done! You win with ${humanScore} point(s) against`
                + ` my ${computerScore} point(s)!`);
        } else if (humanScore < computerScore) {
            console.log(`Better luck next time! You lose with ${humanScore} ` +
                `point(s) against my ${computerScore} point(s)!`)
        } else {
            console.log(`We both had ${humanScore} point(s)! Great game!`);
        }
    }
}

function getComputerChoice(validChoices) {
    choice = Math.floor(Math.random() * 3) + 1;
    return validChoices[choice - 1];
}

function getHumanChoice(validChoices) {
    let choice;

    while (validChoices.includes(choice) == false) {
        choice = prompt("Please select an option: rock, paper, or scissors?");
        
        if (choice == null) {
            break;
        }

        choice = choice.toLowerCase();
    }
    return choice;
}