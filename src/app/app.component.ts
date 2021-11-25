import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agent-app';
  submitted = false;
  distance: number;
  baggage: number;
  age: number;
  noOffers: boolean;
  priceMap = new Map();
  error = false;
  thereAreOffersFromAeroflot = false;
  thereAreOffersFromRZHD = false;

  getOffers() {

    if (this.age == undefined || this.age < 0 || this.baggage < 0 || this.baggage == undefined || this.distance < 1 || this.distance == undefined) {
      this.error = true;
      this.submitted = false;
      return;
    }

    this.priceMap.clear();
    this.thereAreOffersFromRZHD = false;
    this.thereAreOffersFromRZHD = false;
    this.submitted = true;
    this.error = false;

    if (this.baggage > 60) {
      this.noOffers = true;
      return;
    }
    
    if (this.baggage <=5 ) {
      this.thereAreOffersFromAeroflot = true;
      this.thereAreOffersFromRZHD = true;
      this.priceMap.set('aEconom', this.distance * 4);
      this.priceMap.set('aMiddle', (this.age <= 7) ? this.distance * 8 * 0.7 : this.distance * 8);
      this.priceMap.set('aLux', (this.age <= 16) ? this.distance * 15 * 0.7 : this.distance * 15);
      this.priceMap.set('rEconom', (this.age <= 5) ? this.distance * 0.5 * 0.5 : this.distance * 0.5);
      this.priceMap.set('rMiddle', (this.age <= 8) ? this.distance * 2 * 0.7 : this.distance * 2);
      this.priceMap.set('rLux', (this.age <= 16) ? this.distance * 4 * 0.8 : this.distance * 15);
      return;
    }
    else if (this.baggage > 5 && this.baggage <= 15) {
      this.thereAreOffersFromAeroflot = true;
      this.thereAreOffersFromRZHD = true;
      this.priceMap.set('aEconom', this.distance * 4 + 4000);
      this.priceMap.set('aMiddle', (this.age <= 7) ? this.distance * 8 * 0.7 : this.distance * 8);
      this.priceMap.set('aLux', (this.age <= 16) ? this.distance * 15 * 0.7 : this.distance * 15);
      this.priceMap.set('rEconom', (this.age <= 5) ? this.distance * 0.5 * 0.5 : this.distance * 0.5);
      this.priceMap.set('rMiddle', (this.age <= 8) ? this.distance * 2 * 0.7 : this.distance * 2);
      this.priceMap.set('rLux', (this.age <= 16) ? this.distance * 4 * 0.8 : this.distance * 15);
      return;
    }
    else if (this.baggage > 15 && this.baggage <= 20) {
      this.thereAreOffersFromAeroflot = true;
      this.thereAreOffersFromRZHD = true;
      this.priceMap.set('aEconom', this.distance * 4 + 4000);
      this.priceMap.set('aMiddle', (this.age <= 7) ? this.distance * 8 * 0.7 : this.distance * 8);
      this.priceMap.set('aLux', (this.age <= 16) ? this.distance * 15 * 0.7 : this.distance * 15);
      this.priceMap.set('rEconom', (this.age <= 5) ? this.distance * 0.5 * 0.5 + this.baggage * 50 : this.distance * 0.5 + this.baggage * 50);
      this.priceMap.set('rMiddle', (this.age <= 8) ? this.distance * 2 * 0.7 : this.distance * 2);
      this.priceMap.set('rLux', (this.age <= 16) ? this.distance * 4 * 0.8 : this.distance * 15);
      return;
    }
    else if (this.baggage > 20 && this.baggage <= 50) {
      this.thereAreOffersFromAeroflot = true;
      this.thereAreOffersFromRZHD = true;
      this.priceMap.set('aMiddle', (this.age <= 7) ? this.distance * 8 * 0.7 + 5000 : this.distance * 8 + 5000);
      this.priceMap.set('aLux', (this.age <= 16) ? this.distance * 15 * 0.7 : this.distance * 15);
      this.priceMap.set('rEconom', (this.age <= 5) ? this.distance * 0.5 * 0.5 + this.baggage * 50 : this.distance * 0.5 + this.baggage * 50);
      this.priceMap.set('rMiddle', (this.age <= 8) ? this.distance * 2 * 0.7 + this.baggage * 50 : this.distance * 2 + this.baggage * 50);
      this.priceMap.set('rLux', (this.age <= 16) ? this.distance * 4 * 0.8 : this.distance * 15);
      return;
    }
    else if (this.baggage > 50 && this.baggage <= 60) {
      this.thereAreOffersFromRZHD = true;
      this.priceMap.set('rMiddle', (this.age <= 8) ? this.distance * 2 * 0.7 + this.baggage * 50 : this.distance * 2 + this.baggage * 50);
      this.priceMap.set('rLux', (this.age <= 16) ? this.distance * 4 * 0.8 : this.distance * 15);
    }

  }

  
}


