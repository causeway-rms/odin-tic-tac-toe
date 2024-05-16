const cells = [0,1,2,3,4,5,6,7,8];
const values = [0,0,0,0,0,0,0,0,0];
const startGameBtn = document.querySelector("#start-game");
const playerXValue = 10;
const playerOValue = 100;
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

function displayValues() {
    console.log(`${values[0]} - ${values[1]} - ${values[2]}`);
    console.log(`${values[3]} - ${values[4]} - ${values[5]}`);
    console.log(`${values[6]} - ${values[7]} - ${values[8]}`);
}

function playGame() {
    for (let i=0; i < 4; i++) {
        getPlayerXChoice();
        getPlayerOChoice();
    }
    getPlayerXChoice();
}

function getPlayerXChoice() {
    const playerXChoice = prompt("Enter Player X Choice: ");
    cells[playerXChoice] = "X";
    displayBoard();
    console.log(" ");
    values[playerXChoice] = playerXValue;
    displayValues();
    console.log(" ");
}

function getPlayerOChoice() {
    const playerOChoice = prompt("Enter Player O Choice: ");
    cells[playerOChoice] = "O";
    displayBoard();
    console.log(" ");
    values[playerOChoice] = playerOValue;
    displayValues();
    console.log(" ");
}