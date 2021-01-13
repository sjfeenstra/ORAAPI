import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export interface Batch {
  batch_NR: string;
  start_datetime: Date;
  end_datetime: Date;
  total_NR_bags: number;
  bags_checked: number;
  bags_rejected: number;
  NR_to_double_check: number;
  double_checked: number;
}

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  batches: Array<Batch> = [];
  batch: Batch;

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {
    this.batch = {
      batch_NR: '',
      start_datetime: new Date(),
      end_datetime: new Date(),
      total_NR_bags: 0,
      bags_checked: 0,
      bags_rejected: 0,
      NR_to_double_check: 0,
      double_checked: 0,
    };
  }

  getBatch(batch_NR: String) {
    return this.http
      .get(this.apiService.getApiUrl() + 'batch/' + batch_NR + '/')
      .pipe(
        map((result) => {
          this.batch = result as Batch;
          return this.batch;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getBatches(order_NR: string) {
    return this.http
      .get(this.apiService.getApiUrl() + 'batch/?order_NR=' + order_NR)
      .pipe(
        map((result) => {
          this.batches = result as Batch[];
          return this.batches;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }
}
