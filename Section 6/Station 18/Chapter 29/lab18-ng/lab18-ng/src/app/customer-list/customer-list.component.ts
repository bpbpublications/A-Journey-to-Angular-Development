import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent{
  constructor(private app: ApplicationRef){

  }
  GetMessage(): void {
    console.log('Customer List Component message');
  }
  HandleClick(): void  {
    this.app.tick();
  }
}
