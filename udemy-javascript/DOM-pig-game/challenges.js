/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//
var scores, roundScore, activePlayer, gameplaying, lastDice;
scores = [0,0];
roundScore = 0;
activePlayer = 0;//0 for the first player and 1 for the second player
gameplaying = true; //it is state variable which controls or says that after 100 points game cannot be played

//******************************************************************* */
//CHALLENGE 1
//last dice is done to store the previous value if 2 sixes is rolled in a row the global score is set to 0
//******************************************************************* */
//CHALLENGE 2
//insert an input bar for user to select the total amount

// console.log(dice);

//DOM manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice //it selects the same way as css but it selects the first thing in the process; the textContent makes what to appear; in other way it is same as of;;; var score-0Change = document.getElementById('') then innerHTML  and this is longer process and the above code does the same

//if the ddeveloper wants to insert or push the html element we have to use INNERHTML element 
//document.querySelector('#current-' + activePlayer).innerHTML = <em>dice</em>
//we could also insert HTML tags into it

//when displayed by default it will be 0
//player1
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
//player2
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

var x = document.querySelector('#score-0').textContent;
console.log(x);
//when the site is opened the dice image should be disappeared
document.querySelector('.dice').style.display = 'none';
//.dice is used because it is class in index.html (line num:36)

//Event Listener for ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameplaying) {
        //1.Random number generation
    var dice = Math.floor(Math.random() * 6 + 1 );

    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; //type coercion

    //3.update the round score if the rolled number is NOT 1
    if(dice === 6 && lastDice === 6) {
        //player looses the score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if(dice !== 1) {
        //Add to score
        roundScore = roundScore + dice;

        //the updated round score should appear in interface
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
    }
        //the previous score is stored 
        lastDice = dice;
        console.log(lastDice);
}
    
})

//Event Listener for HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gameplaying) {
        //1.Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    //2.update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //CHALLENGE 2
    var input = document.querySelector('.final-score').value;
    var winningScore;
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    //3.check the player has WON or not 
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameplaying = false;
    } else {
        //Next player
        nextPlayer();
    }
}
    
    
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //Player Active
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', function() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    //player1
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    //player2
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //this is to rename the name of the player 
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
});

