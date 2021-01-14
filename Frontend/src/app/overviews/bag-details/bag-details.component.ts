import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';
import {
  BagService,
  Bag,
  Error,
  MissingPictures,
  MissingPills,
} from '../../services/bag.service';

@Component({
  selector: 'app-bag-details',
  templateUrl: './bag-details.component.html',
  styleUrls: ['./bag-details.component.css'],
})
export class BagDetailsComponent implements OnInit {
  errors: Error[] = [];
  missingPictures: MissingPictures[] = [];
  missingPills: MissingPills[] = [];
  bag: Bag;
  controles: any;
  bag_NR: string;

  displayedColumns: string[] = ['pil_ID', 'medication_name', 'free_text'];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService,
    private bagService: BagService
  ) {
    this.bag = bagService.bag;
    this.bag_NR = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bag_NR = params.get('bag_NR')!;
    });
    if (this.bag.bag_NR != this.bag_NR) {
      this.bagService.getBag(this.bag_NR).subscribe((data) => {
        this.bag = data;
      });
    }
    this.bagService.getErrors(this.bag_NR).subscribe((data) => {
      this.errors = data;
    });
    this.bagService.getMissingPictures(this.bag_NR).subscribe((data) => {
      this.missingPictures = data;
    });
    this.bagService.getMissingPills(this.bag_NR).subscribe((data) => {
      this.missingPills = data;
    });
  }

  back(): void {
    this.location.back();
  }
}
