import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-rol-data',
  templateUrl: './rol-data.component.html',
  styleUrls: ['./rol-data.component.css']
})
export class RolDataComponent implements OnInit {
  medewerker: string;

  constructor(private location: Location) {
    this.medewerker = "Medewerker"
   }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

  change(): void {
    if (this.medewerker == "Medewerker"){
      this.medewerker = "Apotheker"
    } else {
      this.medewerker = "Medewerker"
    }
  }
}
