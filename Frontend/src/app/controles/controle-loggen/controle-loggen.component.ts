import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-controle-loggen',
  templateUrl: './controle-loggen.component.html',
  styleUrls: ['./controle-loggen.component.css']
})
export class ControleLoggenComponent implements OnInit {
  title = "Controle loggen"
  abstractieLevel = "Opdracht";
  controle = "Controle"

  constructor(private location: Location) {
   }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }
}
