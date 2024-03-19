let firstPlayerName = "";
let secondPlayerName = "";

let firstPlayerScore = 0;
let secondPlayerScore=0;

let totalScore = 0;

//onsubmit page always reloads, so you will only see it for a sec
//on reload everything is lost, we don't want it to reload, so we have a method preventDefault()


//how to get data present in form? we do DOM manipulation
/* In html everything is a document (it is also a object), we use
the object document method*/

function onSubmit(event){
    event.preventDefault();
    const formData = document.getElementsByTagName("input");
    //console.log(formData); 0,1,2 input we need to extract value (on entire DOM we have 6 input tags)
    firstPlayerName = formData[0].value;
    secondPlayerName = formData[1].value;
    totalScore = formData[2].value;
    //console.log(firstPlayerName,secondPlayerName,totalScore);
    //now we want to hide the form and show the board(we can use get element for class, or get element by ID)

    document.getElementById("form-container").style.display = "none";
    //now we got the document, now we want to do dom manipulation, change css
    //change the displays
    document.getElementById("board-container").style.display = "block";
    //try with getElementbyClassName

    //now we want to display the names
    //document.getElementById("player1");//now we want to change element h1
    //using nesting
    document.getElementById("player1").getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
    //difference between getElementsByClassName and getElementByClassName
    document.getElementById("player2").getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
};

function rollDice(playerIndex){
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    const playerNodes = document.getElementById(`player${playerIndex}`);
    //for images
    playerNodes.querySelector(".dice img").setAttribute("src",`./images/dice${randomNumber}.png`);
    switch(playerIndex){
        case 1: firstPlayerScore += randomNumber;
                playerNodes.getElementsByClassName("score")[0].innerHTML = firstPlayerScore;
                //after playing we need to disable p1 button and enable p2 button
                playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
                document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled")
                break;
        case 2: secondPlayerScore += randomNumber;
                playerNodes.getElementsByClassName("score")[0].innerHTML = secondPlayerScore;
                playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
                document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled")
                break;
        default:
            break

    }
    checkIfWinnerExists()
};

function getRandomNumber(){
    return Math.floor(Math.random()*6) + 1;
};

function checkIfWinnerExists(){
    if(firstPlayerScore>=totalScore){
        //injecting html directly 
        document.getElementById("player1").innerHTML += `<div class="winner"></div>`;
        //now user won toh disable other player button
        document.getElementById("player2").getElementsByTagName("input")[0].setAttribute("disabled",true);

    }
    if(secondPlayerScore>=totalScore){
        document.getElementById("player2").innerHTML += `<div class="winner"></div>`;
        //now user won toh disable other player button
        document.getElementById("player1").getElementsByTagName("input")[0].setAttribute("disabled",true);

    }
};

