import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { hospitals } from './mock-hospitals';
import { departments } from './mock-hospitals';

@Injectable({
  providedIn: 'root',
})
export class HospitalsService {
  constructor() { }

  getHospitals(): Observable<any[]> {
    return of(hospitals);
  }

  getDepartments(name: string): Observable<any[]> {
    return of(departments.filter(a => a.hospitalname === name));
  }

  addDepratment(data, depratmentName: string): Observable<any> {
    if(depratmentName || data.departmentname){
      let index = departments.findIndex(item=>item.departmentname==depratmentName ||item.departmentname==depratmentName== data.departmentname)
      if (index > -1) {
        departments[index] = data;
        return of(departments);
      }
    }
    return of(departments.push(data));
  }

  deleteDepratment(departmentname): Observable<any> {
    let index = departments.findIndex(item=>item.departmentname==departmentname)
    if (index > -1) {
      departments.splice(index, 1);
    }
    return of(departments);
  }

  deleteHospital(hospitalName: string) {
    let index = hospitals.findIndex(item=>item.departmentname==hospitalName)
    if (index > -1) {
      hospitals.splice(index, 1);
    }
    return of(hospitals);
  }

  addHospital(data: any, hospitalName: string): Observable<any> {
    if(hospitalName || data.hospitalname){
      let index = hospitals.findIndex(item=>item.hospitalname==hospitalName || item.hospitalname==data.hospitalname)
      if (index > -1) {
        hospitals[index] = data;
        return of(hospitals);
      }
    }
    return of(hospitals.push(data));
  }
}

