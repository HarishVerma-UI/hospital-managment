import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospitalListComponent } from './hospitals/hospital-list.component';
import { DepartmentListComponent } from './departmants/department-list.component';

const heroesRoutes: Routes = [
  { path: 'hospitals', redirectTo: '/hospitals' },
  { path: 'hospitals',  component: HospitalListComponent },
  { path: 'department/:id', component: DepartmentListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HospitalsRoutingModule { }
