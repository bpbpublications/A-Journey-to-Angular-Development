import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from '../checkin/checkin.component';

const routes: Routes = [
  {
    path: '',
    component: CheckinComponent
  }
];

@NgModule({
  declarations: [CheckinComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CheckinModule { }
