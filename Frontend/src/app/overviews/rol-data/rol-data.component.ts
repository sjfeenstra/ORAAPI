import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { batches } from '../batch';
import { orders } from '../orders';
import { rols } from '../rol';

@Component({
  selector: 'app-rol-data',
  templateUrl: './rol-data.component.html',
  styleUrls: ['./rol-data.component.css']
})
export class RolDataComponent implements OnInit {

  rols = rols;
  rol: { rolId: string; controle1: boolean; controle1Desc: string; controle2: boolean; controle2Desc: string; controle3: boolean; controle3Desc: string; } | undefined;

  constructor(private location: Location, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.rol = rols.find(e => e.rolId === params.get('rolId'));
    });
  }
  

  back(): void {
    this.location.back()
  }

}
