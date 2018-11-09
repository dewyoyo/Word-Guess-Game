// Game coding =======================================================================================
// VARIABLES
var wordList = ["discrete", "guru", "summit", "cumbersome", "relish", "frayed", "fleet", "reinforce", "eloquent", "respectively",
    "procrastination", "conundrum", "aesthetically", "recipient", "indecipherable", "dissect", "sleuthing", "labyrinth", "disparage", "tribute",
    "typography", "confrontation", "enhancement", "proactively", "radically"];
// var selectWord = "";
var selectWordArry = [];
var tempWordArry = [];
var winsCharArry = [];

var wins = 0;
var remainingNum = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var letterAlreadyText = document.getElementById("letteralready-text");
var winsText = document.getElementById("wins-text");
var remainingText = document.getElementById("remaining-text");

function funcSelectWord() {
    var gameword = wordList[Math.floor(Math.random() * wordList.length)];
    return gameword;
}

// $(document).ready(function () {
//     beginningGame();
// }
document.onkeyup = function (event) {

    var userInput = event.key;
    var selectWord = funcSelectWord();

    if (typeof (userInput) === 'string' || userInput instanceof String) {
        // initialization
        var userGuess = userInput.toLowerCase();
        if (remainingNum == 10) {
            // directionsText.textContent = "Press any alphabet key for guessing.";
            directionsText.textContent = selectWord;
            userChoiceText.textContent = "";
            winsText.textContent = "wins: " + 0;
            remainingText.textContent = "remaining: " + 0;

            for (var i = 0; i < selectWord.length; i++) {
                selectWordArry.push(selectWord.charAt(i));
                // console.log("Selected word array[" + i + "] is " + selectWordArry[i]);
            }

            for (var i = 0; i < selectWordArry.length; i++) {
                tempWordArry[i] = "____ ";
            }
            var tempWord = tempWordArry.join();
            userChoiceText.textContent = tempWord;
        }
        // reset
        else if (remainingNum == 0) {
            var selectWord = funcSelectWord();
            directionsText.textContent = selectWord;
            userChoiceText.textContent = "";
            winsText.textContent = "wins: " + 0;
            remainingText.textContent = "remaining: " + 0;
            remainingNum = 10;

            for (var i = 0; i < selectWord.length; i++) {
                selectWordArry.push(selectWord.charAt(i));
                // console.log("Selected word array[" + i + "] is " + selectWordArry[i]);
            }

            for (var i = 0; i < selectWordArry.length; i++) {
                tempWordArry[i] = "____ ";
            }
            var tempWord = tempWordArry.join();
            userChoiceText.textContent = tempWord;
        }
        remainingNum--;
        // if win
        if (selectWordArry.indexOf(userGuess) != -1) {
            wins++;
            winsCharArry.push(userGuess);

            letterAlreadyText.textContent = "winsCharArry:" + winsCharArry;
            winsText.textContent = "wins: " + wins;
            remainingText.textContent = "remaining: " + remainingNum;

            for (var i = 0; i < winsCharArry.length; i++) {
                for (var j = 0; j < selectWordArry.length; j++) {
                    if (selectWordArry[j] === winsCharArry[i]) {
                        tempWordArry[j] = winsCharArry[i];
                    }
                }
            }
            userChoiceText.textContent = tempWordArry;
            //if lose
        } else {
            remainingText.textContent = "remaining: " + remainingNum;
        }
    }
    else {
        alert("Please ues Alphabet to guess!!");
    }
}
