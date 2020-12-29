import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';
import { Batch, batches } from '../models/batch';
import { Order, orders } from '../models/order';
import { Rol, rols } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  getOrder(orderId: String) {
    return orders.find((row) => row.orderId === orderId);
  }

  getOrders() {
    return orders;
  }
}
