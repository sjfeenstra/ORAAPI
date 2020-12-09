import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'
import { orders } from '../orders';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {
  orders = orders;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }
}
