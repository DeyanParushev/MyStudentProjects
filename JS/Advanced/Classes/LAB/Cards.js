let result = (function () {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♠',
        CLUBS: '♠',
        DIAMONDS: '♠',
    };

    class Card {
        constructor(number, suit) {
            this.face = number;
            this.suit = suit;
        };

        set face(newFace) {
            if (faces.includes(newFace.toString())) {
                this.innerFace = newFace;
            } else {
                throw new Error('No such face');
            };
        };

        get face() {
            return this.innerFace;
        };

        set suit(suit) {
            if (Object.values(Suits).includes(suit)) {
                this.innerSuit = suit;
            } else {
                throw new Error('No such suit');
            };
        };

        get suit() {
            return this.innerSuit;
        };
    };

    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suit = result.Suits;

let card = new Card("3", Suit.CLUBS);
