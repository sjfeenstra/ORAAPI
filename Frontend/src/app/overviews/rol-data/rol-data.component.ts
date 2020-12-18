import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { Batch, batches } from '../../models/batch';
import { Order, orders } from '../../models/order';
import { Rol, rols } from '../../models/rol';

@Component({
  selector: 'app-rol-data',
  templateUrl: './rol-data.component.html',
  styleUrls: ['./rol-data.component.css'],
})
export class RolDataComponent implements OnInit {
  rol: any;
  controles = controles;

  displayedColumns: string[] = [
    'controle',
    'succesvol uitgevoerd',
    'toelichting',
    'medewerker',
  ];

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.rol = rols.find((e) => e.rolId === params.get('rolId'));
      this.controles = controles.filter((row) => row.id === this.rol.rolId);
    });
  }

  back(): void {
    this.location.back();
  }
}
