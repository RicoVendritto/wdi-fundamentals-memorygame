
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

/*
console.log("User flipped " +cardOne);
console.log("User flipped " +cardTwo);
*/

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Found A Match!");
	} else {
		alert("Sorry Mate! Try Again");
	}

	console.log("User flipped " +cardOne);
	console.log("User flipped " +cardTwo);
}