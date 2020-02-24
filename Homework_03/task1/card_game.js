//class card

class Card {
    constructor(rank, suit) {
        this.suit = suit;
        this.isFaceCard = (rank < 2 || rank > 10) ? true : false;
        this.rank = rank;
    }

    toString() {
        let arr = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King' };
        let rankName = this.isFaceCard ? arr[this.rank] : this.rank;
        return (rankName + ' of ' + this.suit);
    }

    Compare(cardTwo) {
        let greatness = '';
        if (this.rank === cardTwo.rank) {
            console.log('cards are equal');
            return (greatness = 'equal');
        }
        if (this.rank !== 1 && cardTwo.rank !== 1) {
            greatness = (this.rank > cardTwo.rank) ? 'bigger' : 'less';
            console.log(`card ${this.toString()} is ${greatness} than ${cardTwo.toString()}`);
        } else {
            greatness = (this.rank === 1) ? 'bigger' : 'less';
            console.log(`card ${this.toString()} is ${greatness} than ${cardTwo.toString()}`);
        }
        return greatness;
    }
}

//class deck

const _count = Symbol('count');
class Deck {
    constructor() {
        this.cards = (function createCards() {
            let CardArr = [];
            let CardNames = ['Hearts', 'Diamonds', 'Clubs', 'Spides'];
            for (let j = 0; j < 4; j++) {
                for (let i = 1; i < 14; i++) {
                    let card = new Card(i, CardNames[j]);
                    CardArr.push(card);
                }
            }
            return CardArr;
        })();
        this[_count] = this.cards.length;
    }

    get count() {
        return this[_count];
    }

    set count(param) {
        throw new Error('This property is readonly');
    }

    shuffle() {
        return this.cards.sort((a, b) => {
            if ((a.rank + (Math.random() * 100)) > (b.rank + (Math.random() * 100))) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    draw(n) {
        for (let i = this.cards.length; i >= this.cards.length - n; i--) {
            console.log(this.cards[i]);
        }
        this.cards.length -= n;
    }

}

let deck = new Deck();


//class player
const _wins = Symbol('wins');
class Player {
    constructor(name, deck, wins = 0) {
        this.name = name;
        this.deck = deck;
        this[_wins] = wins;
    }
    get wins() {
        return this[_wins];
    }
    set wins(param) {
        throw new Error('This property is readonly');
    }

    Play(secondPlayer) {
        let cards = this.deck.cards;
        let thisPlayerCard = cards[cards.length - 1];
        let secondPlayerCard = cards[cards.length - 2];

        if (cards.length === 0) {
            console.log(`${this.name} wins = ${this[_wins]}`);
            console.log(`${secondPlayer.name} wins = ${secondPlayer[_wins]}`);
            return;
        }

        let greatness = thisPlayerCard.Compare(secondPlayerCard);
        switch (greatness) {
            case 'equal': console.log('Nobody wins');
                break;
            case 'bigger': console.log(`${this.name} wins`);
                this[_wins]++;
                break;
            case 'less': console.log(`${secondPlayer.name} wins`);
                secondPlayer[_wins]++;
                break;
        }

        cards.length -= 2;

    }

}

let pl = new Player('John', deck);
let pl2 = new Player('Steve', deck);
