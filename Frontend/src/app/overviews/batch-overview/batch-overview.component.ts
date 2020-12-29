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
import { from } from 'rxjs';

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css'],
})
export class BatchOverviewComponent implements OnInit {
  batches = batches;
  order: any;
  controles = controles;
  selectedBatch: Batch;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedBatch = { batchId: '', zakjesAantal: 0 };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.order = this.orderService.getOrder(params.get('orderId')!);
      this.batches = this.batchService.getBatches(this.order.orderId);
      this.controles = this.controleService.getControles(this.order.orderId);
    });
  }

  back(): void {
    this.location.back();
  }

  checker(batch: Batch): Number {
    return controles
      .filter((row) => row.id === batch.batchId)
      .filter((row) => row.controle === true).length;
  }
  selectBatch(batch: Batch): void {
    if (batch != this.selectedBatch) {
      this.selectedBatch = batch;
    } else {
      this.selectedBatch = { batchId: '', zakjesAantal: 0 };
    }
  }
}
