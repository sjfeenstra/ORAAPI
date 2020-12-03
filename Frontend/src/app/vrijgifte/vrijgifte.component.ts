import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-vrijgifte',
  templateUrl: './vrijgifte.component.html',
  styleUrls: ['./vrijgifte.component.css']
})
export class VrijgifteComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

}
