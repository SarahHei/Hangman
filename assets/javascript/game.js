//start by creating a word bank array of words around the theme of hurricanes
var wordbank = [
    "flood",
    "storm",
    "beer",
    "hurricane",
    "florence"
];

//declare all needed variables first
//introduce two elements into html, to create a space on the page to place the scores; the html will contain a reference to the elements and then look to the javascript to grab the element; there need to be references to the elements in the html
//this information captures how html and javascript talk to each other; this is not the logic of the game yet

var remainingGuesses = 10;
var incorrectChoices = [];
var incorrectChoicesText = document.getElementById("IncorrectChoices");
incorrectChoicesText.textContent = incorrectChoices;
var remainingGuessesText = document.getElementById("RemainingGuesses");



/*var attempts = 0;
var numberAttempts = document.getElementById("NumberofAttempts");
attempts = 10;
*/

var answerArrayDiv = document.getElementById("AnswerArrayDiv");

var splitWord = [];
var userGuess;
var answerArray = [];

//from this point on, we are playing the game
//when we tell the computer to do something, we have to introduce a function
//declare the syntax for the function
//execute the syntax
//step 1a: the computer chooses a random word from the word bank

/*function attemptsFunction() {
    console.log("This works");
    numberAttempts.textContent = attempts;
}
attemptsFunction();
*/

function startGame() {
    var word = wordbank[Math.floor(Math.random() * wordbank.length)];
    console.log(word);
    splitWord = word.split("");
    console.log(splitWord);

    //assign underscores based on word length for randomly chosen word
    for (var i = 0; i < splitWord.length; i++) {
        answerArray[i] = "_";
    }

    answerArrayDiv.textContent = answerArray;
}
startGame();
    console.log(answerArray);

//match user's guess to the answer array and assign to the right spot
//when there is a match, the answerArray needs to display the match at that position; change from underscore to the letter
//if splitword at j = userGuess at position XX, then change the answerArray at j
//once a variable is defined globally, don't use var again

function playGame(x) {
    var correctGuess = false;
    var keypress = x;
    for (var j = 0; j < splitWord.length; j++) {
        if (splitWord[j] === keypress) {
            answerArray[j] = keypress;
            answerArrayDiv.textContent = answerArray;        
            correctGuess = true;
              }
    }
    if (correctGuess === false) {
        incorrectChoices.push(keypress);
        incorrectChoicesText.textContent = incorrectChoices;
        remainingGuesses--;
        remainingGuessesText.textContent = remainingGuesses;
        console.log(remainingGuesses);
    }
}

document.onkeyup = function (event) {
    playGame(event.key);
}

//check out innerHTML versus textContent







