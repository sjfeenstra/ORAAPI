import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { controles } from '../controles';
import { batches } from '../batch';
import { orders } from '../orders';
import { rols } from '../rol';

@Component({
  selector: 'app-rol-data',
  templateUrl: './rol-data.component.html',
  styleUrls: ['./rol-data.component.css']
})
export class RolDataComponent implements OnInit {

  rol: any;
  controles = controles;

  displayedColumns: string[] = ['controle', 'succesvol uitgevoerd', 'toelichting', 'medewerker'];

  constructor(private location: Location, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.rol = rols.find(e => e.rolId === params.get('rolId'));
      this.controles = controles.filter(row => row.id === this.rol.rolId);
    });
  }
  

  back(): void {
    this.location.back()
  }

}
