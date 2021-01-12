import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { ControleService } from '../../services/controle.service';
import { RolService, Rol } from '../../services/rol.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';

@Component({
  selector: 'app-rol-overview',
  templateUrl: './rol-overview.component.html',
  styleUrls: ['./rol-overview.component.css'],
})
export class RolOverviewComponent implements OnInit {
  rols: any;
  batch: any;
  batches: any;
  controles: any;
  selectedRol: Rol;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedRol = {
      roll_NR: 0,
      batch_NR: 0,
      patient: '',
      packaging_code: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.batchService.getBatch(params.get('batch_NR')!).subscribe((data) => {
        this.batch = data;
      });
      this.rolService.getRols(this.batch.batch_NR).subscribe((data) => {
        this.rols = data;
      });
      this.controles = this.controleService.getControles(this.batch.batch_NR);
    });
  }

  back(): void {
    this.location.back();
  }

  // checker(rol: Rol): Number {
  //   return controles
  //     .filter((row) => row.id === rol.roll_NR)
  //     .filter((row) => row.controle === true).length;
  // }
  selectRol(rol: Rol): void {
    if (rol != this.selectedRol) {
      this.selectedRol = rol;
    } else {
      this.selectedRol = {
        roll_NR: 0,
        batch_NR: 0,
        patient: '',
        packaging_code: '',
      };
    }
  }
}
