/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer, dice, gamePlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;//0 for the first player, 1 for the second player
gamePlaying = true;
//By default when the web page is been loaded default value should be 0 in all aspects
document.querySelector('#score-0').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-1').textContent = '0';
//the image of the dice should not be visible
document.querySelector('.dice').style.display = 'none';

//ROLL DICE 
document.querySelector('.btn-roll').addEventListener('click', function() {
    //here called is anonymous function
    if(gamePlaying) {
        //1.Random number generation
    dice = Math.floor(Math.random() * 6 + 1);
    // console.log(dice);

    //2.Update UI
    document.querySelector('.dice').style.display = 'block'; 
    document.querySelector('.dice').src = 'dice-' + dice + '.png';//type coercion

    //3.Check if the player rolls 1
    if(dice !== 1) {
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next Player
        nextPlayer();
    }
}
    
});

//HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //1.Add current score to Global score
    scores[activePlayer] += roundScore;
    //2. Reflect it in UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = '0';
    //3.Check whether the player has won or not
    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add = 'winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove = 'active';
        gamePlaying = false;
    } else {
        nextPlayer();
    }
}
    
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
