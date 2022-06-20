var turn = "X";
var game = [["", "", ""], ["", "", ""], ["", "", ""]];

function load() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    gameContainer.style.display = "none";
    resContainer.style.display = "none";
}

function checkWin() {
    for (var i = 0; i < 3; i++) {
        if (game[i][0] == game[i][1] && game[i][0] == game[i][2] && game[i][0] != turn) {
            return turn;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] != turn) {
            return turn;
        }
    }
    if (game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] != turn) {
        return turn;
    }
    if (game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] != turn) {
        return turn;
    }
    if (win === false) {
        if (checkDraw() === true) {
            return "draw";
        }
    }
    return false;
}

function checkDraw() {
    game.forEach(i => {
        i.forEach(j => {
            if (i === "") {
                return false;
            }
        });
    });
    return true;
}

function startButton() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    var startButton = document.getElementById("btn-start");
    gameContainer.style.display = "flex";
    resContainer.style.display = "none";
    startButton.style.display = "none";
}

function slotClick(slot) {
    var slot = document.getElementById("slot-"+slot);
    var slotValue = slot.innerHTML;
    if (slotValue == "") {
        slot.innerHTML = turn;
    }
    var win = checkWin();
    if (win === "X") {
        alert("X wins!");
    }
    else if (win === "O") {
        alert("O wins!");
    }
    else if (win === "draw") {
        alert("Draw!");
    }
    else {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }
}
