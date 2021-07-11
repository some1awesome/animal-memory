import { Component, VERSION } from '@angular/core';

const BABY_IMAGE_URL =
  "url('https://github.com/some1awesome/animal-memory/blob/master/src/assets/babies.png?raw=true')";
const ADULT_IMAGE_URL =
  "url('https://github.com/some1awesome/animal-memory/blob/master/src/assets/adults.png?raw=true')";

class Card {
  flipped?: boolean;
  row?: number;
  col?: number;
  position?: string;
  url?: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  cards: Card[] = [];

  usedAnimals = {};

  prevCard: Card;

  constructor() {
    this.init();
  }

  init() {
    this.cards = [];
    this.usedAnimals = {};
    this.prevCard = null;
    for (let i = 0; i < 6; i++) {
      let animalRow;
      let animalCol;
      do {
        animalRow = this.getRandom(1, 3);
        animalCol = this.getRandom(1, 4);
      } while (this.usedAnimals[`${animalRow},${animalCol}`]);
      this.usedAnimals[`${animalRow},${animalCol}`] = true;
      this.cards.push({
        row: animalRow,
        col: animalCol,
        position: `${100 * animalRow} ${100 * animalCol}`,
        url: BABY_IMAGE_URL
      });
      this.cards.push({
        row: animalRow,
        col: animalCol,
        position: `${100 * animalRow} ${100 * animalCol}`,
        url: ADULT_IMAGE_URL
      });
    }
    this.shuffleArray(this.cards);
  }

  refresh() {
    this.cards.forEach((card, index) => {
      setTimeout(() => (card.flipped = false), (index % 4) * 100);
    });
    setTimeout(() => this.init(), 600);
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  flip(card: Card) {
    card.flipped = !card.flipped;
    if (this.prevCard) {
      if (this.prevCard.row !== card.row || this.prevCard.col !== card.col) {
        setTimeout(() => {
          card.flipped = false;
          this.prevCard.flipped = false;
          this.prevCard = null;
        }, 1000);
      } else {
        this.prevCard = null;
      }
    } else {
      this.prevCard = card;
    }
  }
}
