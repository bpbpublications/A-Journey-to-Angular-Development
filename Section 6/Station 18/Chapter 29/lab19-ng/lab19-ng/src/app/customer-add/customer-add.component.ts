import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomerAddData } from '../customer-add-data';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerAddComponent {
  @Input() cData: CustomerAddData;
  constructor(){

  }
  GetMessage(): void {
    console.log('Customer Add Component message');
  }
  HandleClick(): void  {
  }
}
