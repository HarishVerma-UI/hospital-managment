import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HospitalListComponent } from './hospitals/hospital-list.component';
import { DepartmentListComponent } from './departmants/department-list.component';
import { HospitalsRoutingModule } from './hospitals-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HospitalsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    HospitalListComponent,
    DepartmentListComponent,
  ]
})
export class HospitalsModule {}
