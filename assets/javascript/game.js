// Declaring variables
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from;
var wins = 0;
var losses = 0;
var guessesSoFar = []; // array to push the choices
var guessesLeft = 9;

// adding key press event to the document
document.onkeyup = function(event) {
    
    // press any key to start the function
    var userGuess = event.key;
    
    // computer guess is one of the computer choices
    var compGuess = compChoices[Math.floor(Math.random()* compChoices.length)];
    
    // pushing user guess in to guessesSoFar array
    guessesSoFar.push(userGuess);
    
    // game starts
    if (userGuess == compGuess) {
        wins++;
        alert("Yeah !! You Won !!")
        guessesLeft = 9; //reset guesses left to 9 
        guessesSoFar.length = 0; //reset getSoFar array to be empty   
    } else if (guessesLeft == 0) {
        alert("You Lost ! Try Again !");
        guessesLeft = 9; //reset guesses left to 9
        guessesSoFar.length = 0;  //reset getSoFar array to be empty
        losses++;
    } else if (userGuess !== compGuess) {
        guessesLeft--;
    };
    
    // adding html through an event listner
    document.querySelector("#user_Guess").innerHTML =  userGuess;
    document.querySelector("#wins").innerHTML =  wins;
    document.querySelector("#losses").innerHTML =  losses;
    document.querySelector("#guess_Left").innerHTML =  guessesLeft;
    document.querySelector("#guess_Arr").innerHTML =  guessesSoFar;
};



