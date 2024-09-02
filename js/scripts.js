playGame();

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "error";
            break;
    }
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    
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
}