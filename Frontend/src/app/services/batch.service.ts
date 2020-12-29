import { Injectable } from '@angular/core';
import { Controle, controles } from '../models/controle';
import { Batch, batches } from '../models/batch';
import { Order, orders } from '../models/order';
import { Rol, rols } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  constructor() {}

  getBatch(batchId: String) {
    return batches.find((row) => row.batchId === batchId);
  }

  getBatches(orderId: string) {
    return batches.filter((row) => row.batchId.includes(orderId));
  }
}
