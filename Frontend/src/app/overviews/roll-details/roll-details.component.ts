import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Controle, controles } from '../../models/controle';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';

@Component({
  selector: 'app-roll-details',
  templateUrl: './roll-details.component.html',
  styleUrls: ['./roll-details.component.css'],
})
export class RollDetailsComponent implements OnInit {
  roll: Roll;
  controles: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.roll = {
      roll_NR: -1,
      batch_NR:  "",
      patient: "",
      packaging_code: "",
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.rollService.getRol(params.get('roll_NR')!).subscribe((data) => {
        this.roll = data;
      });
    });
  }

  back(): void {
    this.location.back();
  }
}
