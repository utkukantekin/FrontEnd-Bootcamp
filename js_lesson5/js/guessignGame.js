var wanted = Math.round(Math.random()*10);
var numGuess = 5;
var counter = 1;
var found = false;

while(!found && counter <= numGuess) {
    var guess = Number(prompt("Please enter your guess: "));
    switch(true){
        case (wanted == guess):
            alert(`You Guessed It!! It's Your ${counter}. Try`);
            found = true;
            break;
        case (wanted > guess):
            alert(`Higher!! You Got ${numGuess-counter} More Try(s)`);
            break;
        case (wanted < guess):
            alert(`Lower!! You Got ${numGuess-counter} More Try(s)`);
            break;
    }
    counter+=1;
}
