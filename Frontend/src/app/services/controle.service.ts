import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';
import { Batch, batches } from '../models/batch';
import { Order, orders } from '../models/order';
import { Rol, rols } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class ControleService {
  constructor() {}

  getControles(id: String) {
    return controles.filter((row) => row.id === id);
  }
}
