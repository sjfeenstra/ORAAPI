import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Controle, controles } from '../models/controle';

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  getBatch(batch_NR: String) {
    return this.http
      .get(this.apiService.getApiUrl() + 'batch/' + batch_NR)
      .pipe(
        map((result) => {
          return result as Batch;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getBatches(order_NR: string) {
    return this.http
      .get(this.apiService.getApiUrl() + 'batch/')
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
