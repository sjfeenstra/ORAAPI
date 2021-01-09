import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService} from '../services/api.service';
import { Controle, controles } from '../models/controle';

export interface Order {
  order_NR: string;
  institute: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Array<Order> = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  getOrder(order_NR: String) {
    return this.http
      .get(this.apiService.getApiUrl() + 'order/' + order_NR)
      .pipe(
        map((result) => {
          return result as Order;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getOrders() {
    return this.http
      .get(this.apiService.getApiUrl() + 'order/')
      .pipe(
        map((result) => {
          this.orders = result as Order[];
          return this.orders;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }
}
