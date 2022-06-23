var turn = "X";
var game = [["", "", ""], ["", "", ""], ["", "", ""]];

function load() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    var startContainer = document.getElementById("start-container");
    startContainer.style.display = "flex";
    gameContainer.style.display = "none";
    resContainer.style.display = "none";
    return;
}

function startButton() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    var startContainer = document.getElementById("start-container");
    gameContainer.style.display = "flex";
    resContainer.style.display = "none";
    startContainer.style.display = "none";
}

function reset() {
    load();
    game = [["", "", ""], ["", "", ""], ["", "", ""]];
    turn = "X";
    var elements = document.getElementsByClassName("box");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "";
        elements[i].classList.add("box-empty");
    }
}

function end(winner) {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    var winnerText = document.getElementById("winner");
    resContainer.style.display = "flex";
    gameContainer.style.display = "none";
    if (winner === "draw") {
        winnerText.innerHTML = "Draw!";
    }
    else {
        winnerText.innerHTML = winner + " wins!";
    }
}

function checkDraw() {
    for (let index = 0; index < game.length; index++) {
        for (let index2 = 0; index2 < game[index].length; index2++) {
            if (game[index][index2] == "") {
                return false;
            }
        }
    }
    return true;
}

function checkWin() {
    for (var i = 0; i < 3; i++) {
        if (game[i][0] == game[i][1] && game[i][0] == game[i][2] && game[i][0] == turn) {
            return turn;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] == turn) {
            return turn;
        }
    }
    if (game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] == turn) {
        return turn;
    }
    if (game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] == turn) {
        return turn;
    }
    if (checkDraw() === true) {
        return "draw";
    }
    return "false";
}

function slotClick(slot , tslot) {
    var slot = document.getElementById("slot-"+slot);
    slot.classList.remove("box-empty");
    var slotValue = slot.innerHTML;
    if (slotValue == "") {
        slot.innerHTML = turn;
        game[tslot[0]][tslot[1]] = turn;
    }
    var win = checkWin();
    if (win === "X") {
        end("X");
    }
    else if (win === "O") {
        end("O");
    }
    else if (win === "draw") {
        end("draw");
    }
    else {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }
}
