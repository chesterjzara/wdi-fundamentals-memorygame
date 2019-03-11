console.log("Up and running!");

//var cards = ["queen", "queen", "king", "king"];
var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
]

var cardsInPlay = [];
var playerWins = 0;
var playerGames = 0;

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        playerWins ++;
    }
    else {
        alert("Sorry bud, try again.");
    }
    playerGames++;
}
var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped "+ cards[cardId].rank);
    console.log("It was a "+ cards[cardId].suit);
    console.log("Img in "+ cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
    updateScore();
}
var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        cardElement.className ='card-image';
        document.querySelector('#game-board').appendChild(cardElement);
    }
}
var resetBoard = function() {
    console.log("Reset triggered....");
    var cardsToReset = document.getElementsByClassName('card-image');
    cardsInPlay = []; 
    for (var i = 0; i < cards.length; i++) {
        cardsToReset[i].setAttribute('src', "images/back.png");
    }
}
var updateScore = function() {
    console.log("Wins:" + playerWins + " | Games: " + playerGames);
    document.getElementById('wins').textContent = playerWins;
    document.getElementById('loses').textContent = playerGames - playerWins;
}

createBoard();

var resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard);







//git add -A (or check status and specify files)
//git commit -m 'Added object array'
//git push origin master