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
  rolls: any;
  batch: any;
  batches: any;
  controles: any;
  selectedRol: Roll;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rolService: RollService,
    private batchService: BatchService,
    private orderService: OrderService
  ) {
    this.selectedRol = {
      roll_NR: 0,
      batch_NR: '',
      patient: '',
      packaging_code: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.batchService.getBatch(params.get('batch_NR')!).subscribe((data) => {
        this.batch = data;
      });
      this.rolService.getRols(params.get('batch_NR')!).subscribe((data) => {
        this.rolls = data;
      });
    });
  }

  back(): void {
    this.location.back();
  }

  selectRol(rol: Roll): void {
    if (rol != this.selectedRol) {
      this.selectedRol = rol;
    } else {
      this.selectedRol = {
        roll_NR: 0,
        batch_NR: "",
        patient: '',
        packaging_code: '',
      };
    }
  }
}
