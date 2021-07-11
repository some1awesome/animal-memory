import { Component, VERSION } from '@angular/core';

class Card {
  animal: string;
  flipped?: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  cards: Card[] = [
    { animal: 'frog' },
    { animal: 'cow' },
    { animal: 'horse' },
    { animal: 'elephant' },
    { animal: 'frog' },
    { animal: 'cow' },
    { animal: 'horse' },
    { animal: 'elephant' },
    { animal: 'frog' },
    { animal: 'cow' },
    { animal: 'horse' },
    { animal: 'elephant' },
    { animal: 'frog' },
    { animal: 'cow' },
    { animal: 'horse' },
    { animal: 'elephant' }
  ];
}
