import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-rol-overview',
  templateUrl: './rol-overview.component.html',
  styleUrls: ['./rol-overview.component.css']
})
export class RolOverviewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }
  
}
