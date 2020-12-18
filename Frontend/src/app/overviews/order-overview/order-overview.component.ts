import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { Batch, batches } from '../../models/batch';
import { Order, orders } from '../../models/order';
import { Rol, rols } from '../../models/rol';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css'],
})
export class OrderOverviewComponent implements OnInit {
  controles = controles;
  orders = orders;
  selectedOrder: Order;

  constructor(private location: Location) {
    this.selectedOrder = { orderId: '', institute: '' };
  }

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }

  checker(order: Order): Number {
    return controles
      .filter((row) => row.id === order.orderId)
      .filter((row) => row.controle === true).length;
  }
  selectOrder(order: Order): void {
    if (order != this.selectedOrder) {
      this.selectedOrder = order;
    } else {
      this.selectedOrder = { orderId: '', institute: '' };
    }
  }
}
