/*
CHALLENGE RULES:
1) A player looses the entire score when he rolls two 6 in a row
logic:
create lastDice 
check if dice and lastDice equil to 6
then scores active player gets to 0 
DOM change to 0
next Player
2) create input field where players can put score
logic:
html input with class final-score
do it in hold-btn cuz now it is 100
check value of input
undefined, 0, null or "" are COERCED to false
if input has anything which is not undefined, 0, null or "" then winning score == input
check if scores[activePlayer] >= winningScore
*/


var scores, roundScore, activePlayer;
var gamePlaying;
//state variable that game is playing

init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying) {
        //1. we need a random number 
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;

        //console.log(dice);
        //2 display the result
        document.getElementById ('dice-1').style.display = 'block';
        document.getElementById ('dice-2').style.display = 'block';
        document.getElementById ('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById ('dice-1').src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number was NOT a 1

        if(dice1 !== 1 && dice2 !==1)  {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
        nextPlayer();
     }
    }

       /*  for challenge 2
       if (dice === 6 && lastDice === 6) {
        //scores = 0
        scores[activePlayer] = 0;
        nextPlayer();
        } else if(dice !== 1)  {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
        //next player
        nextPlayer();
     }
        lastDice = dice;
    }*/
});
//new listener for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to GLOBAL score
    if(gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = '0';

        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        //undefined, 0, null or "" are COERCED to false
        //anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        //check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById ('dice-1').style.display = 'none';
        document.getElementById ('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
           nextPlayer();
        }  
    }

});

//DRY thats why we do new function nextPlayer which we can use after without repeating ourself
        
function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.getElementById ('dice-1').style.display = 'none';
        document.getElementById ('dice-2').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById ('dice-1').style.display = 'none';
    document.getElementById ('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');







}
