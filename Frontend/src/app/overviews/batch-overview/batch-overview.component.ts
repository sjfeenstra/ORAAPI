import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { batches } from '../batch';
import { orders } from '../orders';

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css']
})
export class BatchOverviewComponent implements OnInit {

  batches = batches;
  order: { orderId: string; controle1: boolean; controle1Desc: string; controle2: boolean; controle2Desc: string; controle3: boolean; controle3Desc: string; } | undefined;

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.order = orders.find(e => e.orderId === params.get('orderId'));
    });
  }

  back(): void {
    this.location.back()
  }

}
