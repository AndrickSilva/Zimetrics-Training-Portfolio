//Display on result page
var dispResult = document.getElementById('dispResult');
var Result = document.querySelector('.result');
console.log(Result);
//Points
var playerPoints = 0;
var compPoints = 0;
var Ppoints = document.getElementById('Ppoints');
var Cpoints = document.getElementById('Cpoints');
//Rounds
var round = 1;
var Rounds = document.getElementById('Round');
//decision
var decision = document.getElementById('decision');
//Player name
var player = prompt("Enter your name");
var playerName = document.getElementById('player');
if (player != null) {
    playerName.innerText = player.toUpperCase();
}
//hide after randomly generating  && comp answer
var compChoiceName;
var getCompChoice = function () {
    var compChoices = document.querySelectorAll('.comp img');
    var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    compChoiceName = compChoice.id;
    console.log(compChoiceName);
    compChoices.forEach(function (e) {
        setTimeout(function () {
            e.classList.add('hide2');
            compChoice.classList.remove('hide2');
        }, 100);
    });
};
//hide after player clicks  && Player answer
var playerChoices = document.querySelectorAll('.player img');
playerChoices.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        var playerChoiceName = e.target.className;
        console.log(playerChoiceName);
        getCompChoice();
        getResults(playerChoiceName, compChoiceName);
    });
});
//Results
var getResults = function (playerChoiceName, compChoiceName) {
    switch (playerChoiceName + compChoiceName) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            // console.log("You WON");
            compPoints++;
            // console.log('Player' + ' ' + playerPoints);
            break;
        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            //     console.log("You LOST");
            playerPoints++;
            // console.log('Comp' + ' ' + compPoints);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            // console.log("Its a DRAW");
            break;
    }
    round++;
    Rounds.innerHTML = String(round);
    Ppoints.innerHTML = String(playerPoints);
    Cpoints.innerHTML = String(compPoints);
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
    //results
    if (round >= 4 && compPoints > playerPoints) {
        setTimeout(function () {
            document.body.firstElementChild.style.display = 'none';
            Result.classList.remove('hide');
            dispResult.innerHTML = player == null ? 'You won' : player + ' ' + 'won';
            Result.classList.add('gifW')
        }, 1000);
    }
    else if (round >= 4 && playerPoints > compPoints) {
        setTimeout(function () {
            document.body.firstElementChild.style.display = 'none';
            Result.classList.remove('hide');
            dispResult.innerHTML = 'Computer won';
            Result.classList.add('gifL')

        }, 1000);
    }
};
