import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';



@NgModule({
  declarations: [ErrorsComponent],
  exports: [
    ErrorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
