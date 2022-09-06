var dispResult = document.getElementById('dispResult');
var Result = document.querySelector('.result');
console.log(Result);
var playerPoints = 0;
var compPoints = 0;
var Ppoints = document.getElementById('Ppoints');
var Cpoints = document.getElementById('Cpoints');
var round = 1;
var Rounds = document.getElementById('Round');
var decision = document.getElementById('decision');
var player = prompt("Enter your name");
var playerName = document.getElementById('player');
if (player != null) {
    playerName.innerText = player.toUpperCase();
}
var compChoiceName;
var getCompChoice = function () {
    var compChoices = document.querySelectorAll('.comp img');
    var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    compChoiceName = compChoice.id;
    console.log(compChoiceName);
    compChoices.forEach(function (e) {
        setTimeout(function () {
            e.classList.add('hide2');
            e.style.transform = "translateY(120%)";
            compChoice.classList.remove('hide2');
            compChoice.style.transform = "translateY(0%)";
        }, 100);
    });
};
var playerChoices = document.querySelectorAll('.player img');
playerChoices.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        var playerChoiceName = e.target.className;
        console.log(playerChoiceName);
        getCompChoice();
        getResults(playerChoiceName, compChoiceName);
    });
});
var getResults = function (playerChoiceName, compChoiceName) {
    switch (playerChoiceName + compChoiceName) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            compPoints++;
            break;
        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            playerPoints++;
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            break;
    }
    round++;
    Rounds.innerText = String(round);
    Ppoints.innerText = String(playerPoints);
    Cpoints.innerText = String(compPoints);
    var msg;
    if (playerPoints == compPoints) {
        console.log("DRAW");
        msg = 'DRAW';
    }
    else if (playerPoints > compPoints) {
        console.log("Computer won");
        msg = 'Computer is leading';
    }
    else {
        console.log('player won');
        msg = player == null ? 'You are leading' : player + ' ' + 'is leading';
    }
    decision.style.padding = '0.333em';
    decision.innerHTML = msg;
    if (round >= 4 && compPoints > playerPoints) {
        setTimeout(function () {
            document.body.firstElementChild.style.display = 'none';
            Result.classList.remove('hide');
            dispResult.innerHTML = player == null ? 'You won' : player + ' ' + 'won';
            Result.classList.add('gifW');
        }, 1000);
    }
    else if (round >= 4 && playerPoints > compPoints) {
        setTimeout(function () {
            document.body.firstElementChild.style.display = 'none';
            Result.classList.remove('hide');
            dispResult.innerHTML = 'Computer won';
            Result.classList.add('gifL');
        }, 1000);
    }
};
