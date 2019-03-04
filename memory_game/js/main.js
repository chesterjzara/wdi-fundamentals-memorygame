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

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    }
    else {
        alert("Sorry bud, try again.");
    }
}

var flipCard = function (cardId) {
    console.log("User flipped "+ cards[cardId].rank);
    console.log("It was a "+ cards[cardId].suit);
    console.log("Img in "+ cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
}



flipCard(0);
flipCard(2);

//git add -A (or check status and specify files)
//git commit -m 'Added object array'
//git push origin master