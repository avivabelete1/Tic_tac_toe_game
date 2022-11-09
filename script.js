let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);
let currentPlayer = 'x';
let player = document.querySelector('.player');
let countMoves = 0;
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        countMoves++;
        if (cell.innerHTML != "") return // if the player has already clicked then he cannot switch the cell
        cell.innerHTML = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
        player.innerHTML = currentPlayer;
    })
});

function restartGame() {
    let restart = document.querySelector('.restart');
    restart.addEventListener('click', function () {
        cells.forEach(function (cell) {
            cell.innerHTML = "";
        })
    })
    countMoves = 0;
}

function checkForWinner() {
    winningCombinations.forEach(function (combination) {
        let checkCombination = combination.every(index => cells[index].innerHTML == currentPlayer);
        if (checkCombination) {
            alert('The Winner is ' + currentPlayer);
            startAgain();
        }
        else if (countMoves === 9 && (!checkCombination)) {
            alert('Tie');
            startAgain();
        }
    })
}

function startAgain() {
    cells.forEach(function (cell) {
        cell.innerHTML = "";
    })
    countMoves = 0;
}