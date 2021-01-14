import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RollService, Roll } from '../../services/roll.service';
import { BatchService, Batch } from '../../services/batch.service';
import { OrderService, Order } from '../../services/order.service';
import { BagService, Bag } from '../../services/bag.service';

@Component({
  selector: 'app-bag-details',
  templateUrl: './bag-details.component.html',
  styleUrls: ['./bag-details.component.css']
})
export class BagDetailsComponent implements OnInit {
  bag: Bag;
  controles: any;
  bag_NR: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rollService: RollService,
    private batchService: BatchService,
    private orderService: OrderService,
    private bagService: BagService,
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
  }

  back(): void {
    this.location.back();
  }

}
