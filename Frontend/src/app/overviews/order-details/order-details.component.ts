import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  batches: any;
  order: Order;
  order_NR: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.order = this.orderService.order;
    this.order_NR = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.order_NR = params.get('order_NR')!;
    });
    if (this.order.order_NR != this.order_NR) {
      this.orderService.getOrder(this.order_NR).subscribe((data) => {
        this.order = data;
      });
    }
    this.batchService.getBatches(this.order_NR).subscribe((data) => {
      this.batches = data;
    });
  }

  setBatch(batch: Batch) {
    this.batchService.setBatch(batch);
  }

  back(): void {
    this.location.back();
  }
}
