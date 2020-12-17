import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { Controle,controles } from '../../models/controle';
import { Batch,batches } from '../../models/batch';
import { Order,orders } from '../../models/order';
import { Rol,rols } from '../../models/rol';


@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css']
})
export class BatchOverviewComponent implements OnInit {

  batches = batches;
  order: any;
  controles = controles;
  selectedBatch: Batch; 

  displayedColumns: string[] = ['controle', 'succesvol uitgevoerd', 'toelichting', 'medewerker'];

  constructor(private location: Location, private route: ActivatedRoute) { 
    this.selectedBatch = {batchId: '', zakjesAantal: 0}
  }

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

  checker(batch: Batch): Number {
    return controles.filter(row => row.id === batch.batchId).filter(row => row.controle === false).length;;
  }
  selectBatch(batch: Batch):void {
    if (batch != this.selectedBatch){
      this.selectedBatch = batch;
    }
    else {
      this.selectedBatch = {batchId: '', zakjesAantal: 0};
    }
  }
}
