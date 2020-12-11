import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-controle-loggen',
  templateUrl: './controle-loggen.component.html',
  styleUrls: ['./controle-loggen.component.css']
})
export class ControleLoggenComponent implements OnInit {
  abstractieLevel: String;
  controle: String;

  constructor(private location: Location) {
    this.controle = "Controle"
    this.abstractieLevel = "Opdracht"
   }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

  change(abstractie: String){
    this.abstractieLevel = abstractie
  }

  changeControl(controle: String){
    this.controle = controle
  }

}
