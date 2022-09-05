//Display on result page
const dispResult = document.getElementById('dispResult')
const Result = document.querySelector('.result')
console.log(Result);


//Points
var playerPoints = 0;
var compPoints = 0;
const Ppoints = document.getElementById('Ppoints')
const Cpoints = document.getElementById('Cpoints')

//Rounds
let round = 1;
const Rounds = document.getElementById('Round');

//decision
const decision = document.getElementById('decision')

//Player name
let player = prompt("Enter your name");
let playerName = document.getElementById('player')
if (player != null) {
    playerName.innerText = player.toUpperCase();
}


//hide after randomly generating  && comp answer
let compChoiceName;
const getCompChoice = () => {
    let compChoices = document.querySelectorAll('.comp img')
    let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    compChoiceName = compChoice.id;
    console.log(compChoiceName);

    compChoices.forEach((e) => {
        setTimeout(() => {
            e.classList.add('hide2')
            compChoice.classList.remove('hide2')
        }, 100);
    })
}




//hide after player clicks  && Player answer
let playerChoices = document.querySelectorAll('.player img')
Array.from(playerChoices).forEach(elem => {
    elem.addEventListener('click', (test) => {
        let playerChoiceName = test.target.className
        console.log(playerChoiceName);
        getCompChoice()
        getResults(playerChoiceName, compChoiceName)
    })
})


//Results

const getResults = (playerChoiceName, compChoiceName) => {
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
    round++
    Rounds.innerHTML = round;
    Ppoints.innerHTML = playerPoints;
    Cpoints.innerHTML = compPoints

    let msg
    if (playerPoints == compPoints) {
        console.log("DRAW");
        msg = 'DRAW'
    } else if (playerPoints > compPoints) {
        console.log(`Computer won`);
        msg = 'Computer is leading'
    } else {
        console.log('player won');
        msg = player == null ? 'You are leading' : player + ' ' + 'is leading'
    }
    decision.style.padding = '0.333em'
    decision.innerHTML = msg;

    //results
    if (round >= 4 && compPoints > playerPoints) {
        setTimeout(() => {
            document.body.firstElementChild.style.display = 'none'
            Result.classList.remove('hide')
            dispResult.innerHTML = player == null ? 'You' : player;
        }, 1000);
    } else if (round >= 4 && playerPoints > compPoints) {
        setTimeout(() => {
            document.body.firstElementChild.style.display = 'none'
            Result.classList.remove('hide')
            dispResult.innerHTML = 'Computer';

        }, 1000);
    }
}
