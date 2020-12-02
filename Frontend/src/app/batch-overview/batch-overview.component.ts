import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-batch-overview',
  templateUrl: './batch-overview.component.html',
  styleUrls: ['./batch-overview.component.css']
})
export class BatchOverviewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

}
