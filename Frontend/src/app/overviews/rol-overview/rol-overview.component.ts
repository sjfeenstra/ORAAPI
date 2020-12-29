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
  selector: 'app-rol-overview',
  templateUrl: './rol-overview.component.html',
  styleUrls: ['./rol-overview.component.css'],
})
export class RolOverviewComponent implements OnInit {
  rols = rols;
  batch: any;
  batches = batches;
  controles = controles;
  selectedRol: Rol;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedRol = { rolId: '', Patient: '' };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.batch = this.batchService.getBatch(params.get('batchId')!);
      this.rols = this.rolService.getRols(this.batch.batchId);
      this.controles = this.controleService.getControles(this.batch.batchId);
    });
  }

  back(): void {
    this.location.back();
  }

  checker(rol: Rol): Number {
    return controles
      .filter((row) => row.id === rol.rolId)
      .filter((row) => row.controle === true).length;
  }
  selectRol(rol: Rol): void {
    if (rol != this.selectedRol) {
      this.selectedRol = rol;
    } else {
      this.selectedRol = { rolId: '', Patient: '' };
    }
  }
}
