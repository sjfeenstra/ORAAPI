import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  medewerker: string;

  constructor() {
    this.medewerker = 'Apotheker';
  }

  ngOnInit(): void {}

  change(): void {
    if (this.medewerker == 'Medewerker') {
      this.medewerker = 'Apotheker';
    } else {
      this.medewerker = 'Medewerker';
    }
  }
}
