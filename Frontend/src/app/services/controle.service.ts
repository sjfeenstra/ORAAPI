import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';

@Injectable({
  providedIn: 'root',
})
export class ControleService {
  constructor() {}

  getControles(id: String) {
    return controles.filter((row) => row.id === id);
  }
}
