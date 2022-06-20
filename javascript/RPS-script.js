function load() {
    var Cconntainer = document.getElementById("choice-container");
    Cconntainer.style.display = "none";
}

function randomChoice() {
    var choices = ["rock", "paper", "scissors"];
    var choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function startGame() {
    var Cconntainer = document.getElementById("choice-container");
    var btn = document.getElementById("btn-start");
    btn.style.display = "none";
    Cconntainer.style.display = "flex";
}

function restart() {
    var Cconntainer = document.getElementById("choice-container");
    var btn = document.getElementById("btn-start");
    var btnEnd = document.getElementById("btn-end");
    var winner = document.getElementById("winner");
    var rescon = document.getElementById("res-container");
    rescon.style.display = "none";
    winner.style.display = "none";
    btnEnd.style.display = "none";
    btn.style.display = "flex";
    Cconntainer.style.display = "none";
}

function showWinner({ playerChoice, computerChoice, state, win }) {
    var btn = document.getElementById("btn-end");
    btn.style.display = "flex";
    var Cconntainer = document.getElementById("choice-container");
    Cconntainer.style.display = "none";
    var rescon = document.getElementById("res-container");
    rescon.style.display = "flex";
    var winner = document.getElementById("winner");
    winner.style.display = "flex";
    if (state == "win") {
        winner.innerHTML = "You win!";
        winner.style.color = "var(--win)";
    }
    else if (state == "lose") {
        winner.innerHTML = "You lose!";
        winner.style.color = "var(--lose)";
    }
    else {
        winner.innerHTML = "Draw!";
        winner.style.color = "var(--tie)";
    }
    var playerchoiceimg = document.getElementById("playerChoice");
    winnerimg = document.getElementById("winnerImg");
    var botchoiceimg = document.getElementById("botChoice");
    playerchoiceimg.src = "/images/rps/" + playerChoice + ".svg";
    botchoiceimg.src = "/images/rps/" + computerChoice + ".svg";
    winnerimg.src = "/images/rps/" + win + ".svg";
}

function choice(ch) {
    var computerChoice = randomChoice();
    var winner = "", state = "";
    if (ch == computerChoice) {
        state = "tie";
        winner = "tie";
    }
    else if (ch == "rock" && computerChoice == "scissors") {
        state = "win";
        winner = "rock";
    }
    else if (ch == "rock" && computerChoice == "paper") {
        state = "lose";
        winner = "paper";
    }
    else if (ch == "paper" && computerChoice == "rock") {
        state = "win";
        winner = "paper";
    }
    else if (ch == "paper" && computerChoice == "scissors") {
        state = "lose";
        winner = "scissors";
    }
    else if (ch == "scissors" && computerChoice == "paper") {
        state = "win";
        winner = "scissors";
    }
    else if (ch == "scissors" && computerChoice == "rock") {
        state = "lose";
        winner = "rock";
    }
    var data = {
        "playerChoice": ch,
        "computerChoice": computerChoice,
        "state": state,
        "win": winner
    };
    showWinner(data);
}
