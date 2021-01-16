var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


// document.querySelector('#score-0').textContent;
// document.querySelector('.dice').getElementsByClassName.display = 'none';

document.getElementsById("score-0").textContent = '0';
document.getElementsById("score-1").textContent = '0';
document.getElementsById("current-0").textContent = '0';
document.getElementsById("current-1").textContent = '0';

function btn(){
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score If the rolled number was NOT a 1

}

document.querySelector(".btn-roll").addEventListener('click',btn); // btn is callback function here, so we don't need to put btn();