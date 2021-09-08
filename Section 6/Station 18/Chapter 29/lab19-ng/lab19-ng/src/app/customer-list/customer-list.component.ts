import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.cd.detach();
  }

  GetMessage(): void {
    console.log('Customer List Component message');
  }
  HandleClick(): void {
    this.cd.detectChanges();
  }
}
