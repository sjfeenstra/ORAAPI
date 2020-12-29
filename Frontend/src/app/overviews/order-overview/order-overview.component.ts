import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css'],
})
export class OrderOverviewComponent implements OnInit {
  orders: Order[];
  selectedOrder: Order;

  constructor(
    private location: Location,
    private controleService: ControleService,
    private rolService: RolService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedOrder = { orderId: '', institute: '' };
    this.orders = this.orderService.getOrders();
  }

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }

  checker(order: Order): Number {
    return this.controleService
      .getControles(order.orderId)
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
