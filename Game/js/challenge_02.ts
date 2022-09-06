// //Display on result page
// const dispResult = document.getElementById('dispResult')! as HTMLElement;
// const Result = document.querySelector('.result')! as HTMLElement;
// console.log(Result);


// //Points
// var playerPoints: number = 0;
// var compPoints: number = 0;
// const Ppoints = document.getElementById('Ppoints')! as HTMLElement;
// const Cpoints = document.getElementById('Cpoints')! as HTMLElement;

// //Rounds
// let round: number = 1;
// const Rounds = document.getElementById('Round')! as HTMLElement;

// //decision
// const decision = document.getElementById('decision')! as HTMLElement;

// //Player name
// let player: string | null = prompt("Enter your name");
// let playerName = document.getElementById('player')! as HTMLElement;
// if (player != null) {
//     playerName.innerText = player.toUpperCase();
// }


// //hide after randomly generating  && comp answer
// let compChoiceName: string;
// const getCompChoice = () => {
//     let compChoices = document.querySelectorAll('.comp img')! as NodeListOf<HTMLImageElement>;
//     let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
//     compChoiceName = compChoice.id;
//     console.log(compChoiceName);

//     compChoices.forEach((e) => {
//         setTimeout(() => {
//             e.classList.add('hide2')
//             compChoice.classList.remove('hide2')
//         }, 100);
//     })
// }




// //hide after player clicks  && Player answer
// let playerChoices = document.querySelectorAll('.player img')! as NodeListOf<HTMLImageElement>
// playerChoices.forEach(elem => {
//     elem.addEventListener('click', (e: MouseEvent) => {
//         let playerChoiceName: any = e.target.className;
//         console.log(playerChoiceName);
//         getCompChoice()
//         getResults(playerChoiceName, compChoiceName)
//     })
// })


// //Results

// const getResults = (playerChoiceName: string, compChoiceName: string) => {
//     switch (playerChoiceName + compChoiceName) {
//         case 'rockscissor':
//         case 'paperrock':
//         case 'scissorpaper':
//             // console.log("You WON");
//             compPoints++;
//             // console.log('Player' + ' ' + playerPoints);
//             break;

//         case 'scissorrock':
//         case 'rockpaper':
//         case 'paperscissor':
//             //     console.log("You LOST");
//             playerPoints++;
//             // console.log('Comp' + ' ' + compPoints);
//             break;

//         case 'rockrock':
//         case 'paperpaper':
//         case 'scissorscissor':
//             // console.log("Its a DRAW");
//             break;
//     }
//     round++
//     Rounds.innerText = String(round);
//     Ppoints.innerText = String(playerPoints);
//     Cpoints.innerText = String(compPoints);

//     let msg: string;
//     if (playerPoints == compPoints) {
//         console.log("DRAW");
//         msg = 'DRAW'
//     } else if (playerPoints > compPoints) {
//         console.log(`Computer won`);
//         msg = 'Computer is leading'
//     } else {
//         console.log('player won');
//         msg = player == null ? 'You are leading' : player + ' ' + 'is leading'
//     }
//     decision.style.padding = '0.333em'
//     decision.innerHTML = msg;

//     //results
//     if (round >= 4 && compPoints > playerPoints) {
//         setTimeout(() => {
//             document.body.firstElementChild.style.display = 'none'
//             Result.classList.remove('hide')
//             dispResult.innerHTML = player == null ? 'You' : player;
//             Result.classList.add('gifW')
//         }, 1000);
//     } else if (round >= 4 && playerPoints > compPoints) {
//         setTimeout(() => {
//             document.body.firstElementChild.style.display = 'none'
//             Result.classList.remove('hide')
//             dispResult.innerHTML = 'Computer';
//             Result.classList.add('gifL')

//         }, 1000);
//     }
// }
