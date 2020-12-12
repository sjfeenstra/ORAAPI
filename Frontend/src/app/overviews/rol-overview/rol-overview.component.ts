import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { controles } from '../controles';
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
  batch: any;
  batches = batches;
  controles = controles;

  displayedColumns: string[] = ['controle', 'succesvol uitgevoerd', 'toelichting', 'medewerker'];

  constructor(private location: Location, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (this.batches.find(e => e.batchId === params.get('batchId'))){
      this.batch = this.batches.find(e => e.batchId === params.get('batchId'));
      // Hiervoor is een datamodel nodig om de juiste rollen bij batches te linken.
      this.rols = rols.filter(row => row.rolId.includes(this.batch.batchId));
      this.controles = controles.filter(row => row.id === this.batch.batchId);
      }
    });
  }

  back(): void {
    this.location.back()
  }
  
}
