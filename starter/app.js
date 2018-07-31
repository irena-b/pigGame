/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//определяем переменные через массив для каждого игрока
//variables for the round score and it need to be only one value
//who is active player 0 - active 1 - not active cuz we have array with indexes 0 and 1

//we make funsction to reset game 
// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

//let think about dice, we need to calculate random numbers Math.random() but we need number between 1-6 Math.floor(Math.random()*6)+1


// получаем элемент с id #current-0 - здесь мы храним то что получем с dice, но так как нам нужно управляьть двумя игроками то переназначаем 
//'#current-' + activePlayer

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
var scores, roundScore, activePlayer;
init()






document.querySelector('.btn-roll').addEventListener('click', function() {
   
    //1. we need a random number 
    var dice = Math.floor(Math.random() * 6 ) + 1;
    console.log(dice);
    //2 display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1)  {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
         //next player
    nextPlayer();
        

    }
});
//new listener for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 
    //check if player won the game
    if(scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        //next player
       nextPlayer();
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
