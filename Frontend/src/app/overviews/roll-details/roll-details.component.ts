import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  roll_NR: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.roll = rollService.roll;
    this.roll_NR = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.roll_NR = params.get('roll_NR')!;
    });
    if (this.roll.roll_NR != this.roll_NR) {
      this.rollService.getRol(this.roll_NR).subscribe((data) => {
        this.roll = data;
      });
    }
  }

  back(): void {
    this.location.back();
  }
}
