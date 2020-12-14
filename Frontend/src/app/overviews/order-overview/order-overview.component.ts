import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'
import { controles } from '../controles';
import { batches } from '../batch';
import { orders } from '../orders';
import { rols } from '../rol';
import { Order } from '../../models/order'

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {
  controles = controles;
  orders = orders;
  selectedOrder: Order; 

  constructor(private location: Location) {
    this.selectedOrder = {orderId: '', institute: ''}
   }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

  checker(order: Order): Number {
    return controles.filter(row => row.id === order.orderId).filter(row => row.controle === false).length;;
  }
  selectOrder(order: Order):void {
    this.selectedOrder = order;
  }
}
