//welcome function
function goToNamepage() {
    setTimeout(function () {
        window.location.href = "namepg.html"; // Replace with the actual URL of the next page
    }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
    animateWords();
});

function animateWords() {
    const words = document.querySelectorAll('.word-animation span');
    let delay = 0;

    words.forEach(word => {
        word.style.animationDelay = delay + 's';
        delay += 0.5; // Adjust the delay between words
    });
}

//variable declaration
var playerX = 'X';
var playerO = 'O';
var currentPlayer = playerX;
var board = Array(9).fill('');
var gameActive = true;
var name1, name2; 
const playerNames = {
    'X': '',
    'O': ''
};

//input function for names
function InputNames() {
    var players = [];
    var a = window.location.search.substring(1).split("&")
    for(var i of a){
        players.push(i.split("=")[1])
    }
    playerNames['X'] = players[0];
    playerNames['O'] = players[1];
    console.log(name1,name2)
}
//game decision
function makeMove(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        updateBoard(index);

        if (checkWinner()) {
            const winnerName = playerNames[currentPlayer];
            endGame(`${winnerName} is winner!`);
            askToRestart();
        } else if (isBoardFull()) {
            endGame("It's a draw!");
            askToRestart();
        } else {
            nextPlayer();
        }
    }
}
//board update
function updateBoard(index) {
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
}

//winner pattern
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
    }

//To check whether board full or not
function isBoardFull() {
    return board.every(cell => cell !== ''); 
}

function nextPlayer() {
    if (currentPlayer === playerX) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
}

//end game winner will show
function endGame(message) {
    alert(message);
    gameActive = false; //game close and output will show
}

function submitbtn(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    console.log(name1,name2)
    window.location.href= "second.html?player1="+name1+"&player2="+name2 
};
    
function askToRestart() {
    const continuePlaying = confirm("Do you want to continue this game ?");
    if (continuePlaying) {
        resetGame();
    } else {
    window.location.href = "thanks.html"; 

    }
}

function resetGame() {
    // Reset the game state
    currentPlayer = playerX;
    board = Array(9).fill('');
    gameActive = true;
    // Clear the board in the UI
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }
}  

//thank you page function
function endpage() {
    setTimeout(2000);
}
document.addEventListener("DOMContentLoaded", function () {
    animateWords();
});

function animateWords() {
    const words = document.querySelectorAll('.word-animation span');
    let delay = 0;

    words.forEach(word => {
        word.style.animationDelay = delay + 's';
        delay += 0.5; 
    });
}
