/*
CHALLENGE RULES:
1) A player looses the entire score when he rolls two 6 in a row

*/


var scores, roundScore, activePlayer;
var gamePlaying;
var lastDice;
//state variable that game is playing

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying) {
        //1. we need a random number 
        var dice = Math.floor(Math.random() * 6 ) + 1;
        console.log(dice);
        //2 display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice ==== 6 && lastDice === 6) {
            //scores = 0
            roundScore = '0';
            document.querySelector('#current-' + activePlayer).textContent = '0';

        }
        if(dice !== 1)  {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
        nextPlayer();
     }
    }
});
//new listener for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to GLOBAL score
    if(gamePlaying) {
        scores[activePlayer] += roundScore;

        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     
        //check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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
        document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
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
