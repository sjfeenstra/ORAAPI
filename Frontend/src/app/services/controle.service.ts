import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export interface Check {
  order_NR: string;
  batch_NR: string;
  roll_NR: string;
  bag_NR: string;
  check_type: string;
  checked_by: string;
  check_remarks: string;
}

@Injectable({
  providedIn: 'root',
})
export class ControleService {
  checks: Check[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  getChecks(bag_NR: string) {
    return this.http.get(this.apiService.getApiUrl() + 'check/' + bag_NR).pipe(
      map((result) => {
        this.checks = result as Check[];
        return this.checks;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }
  createCheck(check: Check) {
    return this.http.post(this.apiService.getApiUrl() + 'check/', check).pipe(
      map((result) => {
        this.checks = result as Check[];
        return this.checks;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }
}
