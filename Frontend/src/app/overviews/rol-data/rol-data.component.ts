import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { Batch, batches } from '../../models/batch';
import { Order, orders } from '../../models/order';
import { Rol, rols } from '../../models/rol';
import { ControleService } from '../../services/controle.service';
import { RolService } from '../../services/rol.service';
import { BatchService } from '../../services/batch.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-rol-data',
  templateUrl: './rol-data.component.html',
  styleUrls: ['./rol-data.component.css'],
})
export class RolDataComponent implements OnInit {
  rol: any;
  controles = controles;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.rol = this.rolService.getRol(params.get('rolId')!);
      this.controles = this.controleService.getControles(this.rol.rolId);
    });
  }

  back(): void {
    this.location.back();
  }
}
