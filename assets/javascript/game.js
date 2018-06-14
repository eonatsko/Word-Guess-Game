
var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x", "z","y"];
    var wins = 0;
    var losses = 0;
    var tries = 9;
    var letterTried = [];

    document.onkeyup = function(event) {

        var userGuess = event.key;
  
        // Logic
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        if (userGuess === computerGuess || userGuess !== computerGuess ) {
            tries--;
            if(userGuess!==computerGuess && (tries!==9)){
                letterTried+= userGuess + ", ";
            }
            if(tries===0 && (userGuess !== computerGuess)){
                losses++;
                tries=9;
                letterTried=[];
                }
                if(tries===0 && (userGuess === computerGuess)){
                    wins++;
                    tries=9;
                    letterTried=[];
                    }
            if (userGuess===computerGuess){
                wins++;}


                
            }
            
            

            var html =
            "<h1>The Psychic Game</h1>"+
            "<p>Guess what letter I am thinking of</p>"+
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + tries + "</p>"+
            "<p>Your guesses so far: " + letterTried +" </p>";
  
          // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;
        }
    
    
