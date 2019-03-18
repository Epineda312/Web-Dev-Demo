//create secret number
var secretNumber = 4;

//ask user for guess
var StringGuess = prompt("Guess a number");
var guess = Number(StringGuess);

//check if guess is right
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT");
}

//check if guess is to high or to low
else if(guess > secretNumber){
    alert("Too high. Guess again!");
}

else {
    alert("Too low. Guess again!");
}