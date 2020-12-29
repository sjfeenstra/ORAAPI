import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';
import { Batch, batches } from '../models/batch';
import { Order, orders } from '../models/order';
import { Rol, rols } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  constructor() {}

  getRol(rolId: String) {
    return rols.find((row) => row.rolId === rolId);
  }

  getRols(batchId: string) {
    return rols.filter((row) => row.rolId.includes(batchId));
  }
}
