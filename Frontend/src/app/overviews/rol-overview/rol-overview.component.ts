import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { batches } from '../batch';
import { orders } from '../orders';
import { rols } from '../rol';

@Component({
  selector: 'app-rol-overview',
  templateUrl: './rol-overview.component.html',
  styleUrls: ['./rol-overview.component.css']
})
export class RolOverviewComponent implements OnInit {

  rols = rols;
  batch: { batchId: string; controle1: boolean; controle1Desc: string; controle2: boolean; controle2Desc: string; controle3: boolean; controle3Desc: string; } | undefined;
  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.batch = batches.find(e => e.batchId === params.get('batchId'));
    });
  }

  back(): void {
    this.location.back()
  }
  
}
