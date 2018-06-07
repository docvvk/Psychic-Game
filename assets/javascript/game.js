// Declaring variables
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from;
var wins = 0;
var losses = 0;
var guessesSoFar = []; // array to push the choices
var guessesLeft = 9;

// adding game sounds
var keySound = new Audio("./assets/sounds/typewriter-key.wav");
var winSound = new Audio("./assets/sounds/you-win.wav");
var lostSound = new Audio("./assets/sounds/you-lose.wav");

// adding key press event to the document
document.onkeydown = function(event) {
    
    // press any key to start the function
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        keySound.play();
    }
    // removing the guessed letter from compChoices array
    function spliced() {
        var a = compChoices.indexOf(userGuess);
        if (a >= 0) {
            compChoices.splice(a,1);
        }
     };
     spliced();
    
    // computer guess is one of the computer choices
    var compGuess = compChoices[Math.floor(Math.random()* compChoices.length)];
    
    // pushing user guess in to guessesSoFar array
    function pushGuess(letter) {
        if (guessesLeft > 0) {
            if (guessesSoFar.indexOf(letter) === -1) {
                guessesSoFar.push(letter);
                guessesLeft--;
            }
        }
    };
    pushGuess(userGuess);

    // game starts
    if (userGuess == compGuess) {
        winSound.play();
        wins++;
        alert("Yeah !! You Won !!")
        guessesLeft = 9; //reset guesses left to 9 
        guessesSoFar.length = 0; //reset getSoFar array to be empty   
    } else if (guessesLeft == 0) {
        lostSound.play();
        alert("You Lost ! Try Again !");
        guessesLeft = 9; //reset guesses left to 9
        guessesSoFar.length = 0;  //reset getSoFar array to be empty
        losses++; 
    };

    // adding html through an event listner
    document.querySelector("#user_Guess").innerHTML = userGuess;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guess_Left").innerHTML = guessesLeft;
    document.querySelector("#guess_Arr").innerHTML = guessesSoFar;
};



