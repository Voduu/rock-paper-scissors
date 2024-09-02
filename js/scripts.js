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