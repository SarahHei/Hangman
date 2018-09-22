<!DOCTYPE html>
<html lang="en-us">

<head>Welcome to Hangman!
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>

<script type="text/javascript">
    var wordbank= [
        "fran", 
        "storm", 
        "beer", 
        "hurricane", 
        "florence"
        ];

    var word = wordbank[Math.floor(Math.random() * wordbank.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = word.length;

    var start = prompt("Press any key to get started");
    console.log(start);
  

    //step 2b: for each letter that the user chooses, it is either displayed
    //in the blank space or in a NOPE location
    while (remainingLetters > 0); {
        alert(answerArray.join(" "));
        var userGuess = prompt("Pick a letter, any letter");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Enter only one letter!")
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                }
            }
        }
    }
        
            
            

    //step 3: the user gets to choose the number of letters that matches
    //word length +1; the computer tells the user how many attempts are remaining


    //step 4: if the player wins, the computer says "You Win" and click any key
    //to start again; if the player loses, the computer says "Sorry, Try Again" and
    //click any key to try again


   /*    
       var remainingLetters = word.length;
    while (remainingLetters > 0) {
    
        var guess = prompt("Pick a letter, any letter");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Enter one letter only");
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }

    }
*/

</script>
</body>
</html>