import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  constructor(private cd: ChangeDetectorRef){

  }
  GetMessage(): void {
    console.log('Customer Add Component message');
  }
  HandleClick(): void  {
    this.cd.detectChanges();
  }
}
