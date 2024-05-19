function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = " You are lose ";
        } else if (computerMove === 'paper') {
            result = "You are win";
        } else if (computerMove === 'scissor') {
            result = "Tie";
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = " You are win ";
        } else if (computerMove === 'paper') {
            result = "You are Tie";
        } else if (computerMove === 'scissor') {
            result = "You are lose";
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = " Tie ";
        } else if (computerMove === 'paper') {
            result = "You are Lose";
        } else if (computerMove === 'scissor') {
            result = "You are win";
        }
    }
    alert(`The computer selected ${computerMove} ${result}`);
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor'
    }

    return computerMove;
}
