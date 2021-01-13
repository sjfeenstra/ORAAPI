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
  selectedOrder: Order;

  constructor(
    private location: Location,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedOrder = { order_NR: '', institute: '', order_released: false };
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }

  selectOrder(order: Order): void {
    if (order != this.selectedOrder) {
      this.selectedOrder = order;
    } else {
      this.selectedOrder = {
        order_NR: '',
        institute: '',
        order_released: false,
      };
    }
  }
}
