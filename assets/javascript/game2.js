var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from;
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 9;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var userGuess = event.key;

    var compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];

    var userWon = function() {
        wins++;
        alert("Yeah You Won !");
    }
    var userLost = function() {
        losses++;
        alert("You Lost ! Try Again !");
    }
    var guessesReset = function() {
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    var guessesRemaining = function() {
        guessesLeft--;
    }
    var guessesPush = function() {
        guessesSoFar.push(userGuess);
    }
    guessesPush();


    if (userGuess == compGuess) {
        userWon();
        guessesReset();
    } else if (guessesLeft == 0) {
        userLost();
        guessesReset();
    } else if (userGuess !== compGuess) {
        guessesRemaining();
    }

    document.querySelector("#user_Guess").innerHTML =  userGuess;
    document.querySelector("#wins").innerHTML =  wins;
    document.querySelector("#losses").innerHTML =  losses;
    document.querySelector("#guess_Left").innerHTML =  guessesLeft;
    document.querySelector("#guess_Arr").innerHTML =  guessesSoFar;
};