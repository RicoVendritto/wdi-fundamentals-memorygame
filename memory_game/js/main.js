
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let checkForMatch = () => {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You Found A Match!");
		} else {
		console.log("Sorry Mate! Try Again!");
		}
	}
}

let flipCard = (cardId) => {
	console.log(`User flipped ${cards[cardId]}`);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);
