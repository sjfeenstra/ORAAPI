import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { ControleService } from '../../services/controle.service';
import { RolService, Rol } from '../../services/rol.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css'],
})
export class BatchOverviewComponent implements OnInit {
  batches: any;
  order: any;
  controles: any;
  selectedBatch: Batch;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedBatch = {
      batch_NR: '',
      start_datetime: new Date(),
      end_datetime: new Date(),
      total_NR_bags: 0,
      bags_checked: 0,
      bags_rejected: 0,
      NR_to_double_check: 0,
      double_checked: 0,
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.orderService.getOrder(params.get('order_NR')!).subscribe((data) => {
        this.order = data;
      });
      this.batchService
        .getBatches(params.get('order_NR')!)
        .subscribe((data) => {
          this.batches = data;
        });
    });
    this.controles = this.controleService.getControles(this.order.order_NR);
  }

  back(): void {
    this.location.back();
  }

  checker(batch: Batch): Number {
    return controles
      .filter((row) => row.id === batch.batch_NR)
      .filter((row) => row.controle === true).length;
  }

  selectBatch(batch: Batch): void {
    if (batch != this.selectedBatch) {
      this.selectedBatch = batch;
    } else {
      this.selectedBatch = {
        batch_NR: '',
        start_datetime: new Date(),
        end_datetime: new Date(),
        total_NR_bags: 0,
        bags_checked: 0,
        bags_rejected: 0,
        NR_to_double_check: 0,
        double_checked: 0,
      };
    }
  }
}
