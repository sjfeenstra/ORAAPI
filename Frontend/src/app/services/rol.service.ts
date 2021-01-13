import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export interface Rol {
  roll_NR: number;
  batch_NR: String;
  patient: string;
  packaging_code: string;
}

@Injectable({
  providedIn: 'root',
})
export class RolService {
  rols: Array<Rol> = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  getRol(roll_NR: String) {
    return this.http.get(this.apiService.getApiUrl() + 'roll/' + roll_NR).pipe(
      map((result) => {
        return result as Rol;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }

  getRols(batch_NR: string) {
    return this.http.get(this.apiService.getApiUrl() + 'roll/').pipe(
      map((result) => {
        this.rols = result as Rol[];
        return this.rols;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }
}
