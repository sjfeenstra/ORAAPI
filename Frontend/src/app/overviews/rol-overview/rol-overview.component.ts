import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { Controle,controles } from '../../models/controle';
import { Batch,batches } from '../../models/batch';
import { Order,orders } from '../../models/order';
import { Rol,rols } from '../../models/rol';


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
  selectedRol: Rol; 

  displayedColumns: string[] = ['controle', 'succesvol uitgevoerd', 'toelichting', 'medewerker'];

  constructor(private location: Location, private route: ActivatedRoute) {
    this.selectedRol = {rolId: '', Patient: ''}
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

  checker(rol: Rol): Number {
    return controles.filter(row => row.id === rol.rolId).filter(row => row.controle === false).length;;
  }
  selectRol(rol: Rol):void {
    this.selectedRol = rol;
  }
  
}
