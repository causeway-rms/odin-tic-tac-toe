const cells = [0,1,2,3,4,5,6,7,8];
const values = [0,0,0,0,0,0,0,0,0];
const winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
const playerXValue = 10;
const playerOValue = 100;
let gameEnd = false;
const startGameBtn = document.querySelector("#start-game");

startGameBtn.addEventListener('click', startGame);

function startGame() {
    displayBoard();
    console.log(" ");
    playGame();
}

function displayBoard() {
    console.log(`${cells[0]} - ${cells[1]} - ${cells[2]}`);
    console.log(`${cells[3]} - ${cells[4]} - ${cells[5]}`);
    console.log(`${cells[6]} - ${cells[7]} - ${cells[8]}`);
}

function playGame() {
    for (let i=0; i < 4; i++) {
        if (gameEnd != true) {
            getPlayerXChoice();
            if (gameEnd != true) {
                getPlayerOChoice();
            }
        }
    }
    if (gameEnd != true) {
        getPlayerXChoice();
        if (gameEnd != true) {
            console.log("It's a Draw!")
        }
    }
}

function getPlayerXChoice() {
    const playerXChoice = prompt("Enter Player X Choice: ");
    cells[playerXChoice] = "X";
    displayBoard();
    console.log(" ");
    values[playerXChoice] = playerXValue;
    console.log(" ");
    findWinner();
}

function getPlayerOChoice() {
    const playerOChoice = prompt("Enter Player O Choice: ");
    cells[playerOChoice] = "O";
    displayBoard();
    console.log(" ");
    values[playerOChoice] = playerOValue;
    console.log(" ");
    findWinner();
}

function findWinner() {
    let winningCombinationsItem = [];
    let winningCombinationSum = 0;

    for (let i = 0; i < winningCombinations.length; i++) {
        winningCombinationsItem = winningCombinations[i];
        for (let j = 0; j < winningCombinationsItem.length; j++) {
            const winningCombinationCell = winningCombinationsItem[j];
            winningCombinationSum += values[winningCombinationCell];
        }
        if (winningCombinationSum == 30) {
            declareWinner("Player X", winningCombinationsItem);
        }
        else if (winningCombinationSum == 300) {
            declareWinner("Player O", winningCombinationsItem);
        }
        else {
            winningCombinationSum = 0;
        }
    }
}

function declareWinner(name, wCombination) {
    console.log(`${name} Wins!`);
    console.log(`Winning Combination: ${wCombination}`);
    gameEnd = true;
}