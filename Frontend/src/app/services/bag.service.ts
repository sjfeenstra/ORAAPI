import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService } from './api.service';

export interface Bag {
  bag_NR: string;
  roll_NR: string;
  bag_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class BagService {
  bags: Array<Bag> = [];
  bag: Bag;

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {
    this.bag = {
      bag_NR: '',
      roll_NR: '',
      bag_type: '',
    };
  }


  getBag(bag_NR: String) {
    return this.http
      .get(this.apiService.getApiUrl() + 'bag/' + bag_NR + '/')
      .pipe(
        map((result) => {
          this.bag = result as Bag;
          return this.bag;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getBags(roll_NR: string) {
    return this.http
      .get(this.apiService.getApiUrl() + 'bag/?roll_NR=' + roll_NR)
      .pipe(
        map((result) => {
          this.bags = result as Bag[];
          return this.bags;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }
}
