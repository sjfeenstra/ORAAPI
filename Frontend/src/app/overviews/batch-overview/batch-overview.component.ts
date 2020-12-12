import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { controles } from '../controles';
import { batches } from '../batch';
import { orders } from '../orders';
import { rols } from '../rol';

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css']
})
export class BatchOverviewComponent implements OnInit {

  batches = batches;
  order: any;
  controles = controles;

  displayedColumns: string[] = ['controle', 'succesvol uitgevoerd', 'toelichting', 'medewerker'];

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.order = orders.find(e => e.orderId === params.get('orderId'));
      this.batches = batches.filter(row => row.batchId.includes(this.order.orderId));
      this.controles = controles.filter(row => row.id === this.order.orderId);
    });
  }

  back(): void {
    this.location.back()
  }

}
