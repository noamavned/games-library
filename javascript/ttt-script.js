var turn = "X";
var game = [["", "", ""], ["", "", ""], ["", "", ""]];

function load() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    gameContainer.style.display = "none";
    resContainer.style.display = "none";
}

function startButton() {
    var resContainer = document.getElementById("res-container");
    var gameContainer = document.getElementById("game-container");
    var startButton = document.getElementById("btn-start");
    gameContainer.style.display = "flex";
    resContainer.style.display = "none";
    startButton.style.display = "none";
}

function checkDraw() {
    console.log(game);
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
            console.log(i+", "+0+" "+1+" "+2);
            return turn;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] == turn) {
            console.log(i+", "+"i0"+" "+"i1"+" "+"i2");
            return turn;
        }
    }
    if (game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] == turn) {
        console.log(00+" "+11+" "+22);
        return turn;
    }
    if (game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] == turn) {
        console.log("02"+" "+11+" "+20);
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
    game[tslot[0]][tslot[1]] = turn;
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
