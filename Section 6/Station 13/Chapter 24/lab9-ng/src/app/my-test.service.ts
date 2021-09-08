import { Injectable } from '@angular/core';
import { TransactionModule } from './transaction/transaction.module';

@Injectable({
  providedIn: TransactionModule
})
export class MyTestService {

  counter=0;
  constructor() {

    this.counter++;
  }
}
