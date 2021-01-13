import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css'],
})
export class OrderOverviewComponent implements OnInit {
  orders: any;

  constructor(
    private location: Location,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }
}
