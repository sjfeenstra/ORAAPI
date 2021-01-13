import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css'],
})
export class BatchDetailsComponent implements OnInit {
  rolls: Array<Roll> = [];
  batch: Batch;
  batch_NR: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.batch = batchService.batch;
    this.batch_NR = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.batch_NR = params.get('batch_NR')!;
    });
    if (this.batch.batch_NR != this.batch_NR) {
      this.batchService.getBatch(this.batch_NR).subscribe((data) => {
        this.batch = data;
      });
    }
    this.rollService.getRols(this.batch_NR).subscribe((data) => {
      this.rolls = data;
    });
  }

  setRoll(roll: Roll) {
    this.rollService.setRoll(roll);
  }

  back(): void {
    this.location.back();
  }
}
