// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { HospitalsService } from '../hospitals.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalList$: any[];
  formHospital: FormGroup;
  hospitalName:string;
  submitted : boolean;
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private service: HospitalsService
  ) {}

  ngOnInit() {
    this.formHospital = this.formBuilder.group({
      hospitalname:  ['',[Validators.required ]],
      contactnumber:  ['', [Validators.required ]],
    });
    this.getHospitals();
  }
  get hospitalname() { return this.formHospital.get('hospitalname'); }
  get contactnumber() { return this.formHospital.get('contactnumber'); }
  private getHospitals() {
    this.service.getHospitals().subscribe(
      data => {
        this.hospitalList$ = data;
      },
      error => {

      });

  }

  onSubmit() {
    this.submitted = true;
    if (this.formHospital.invalid) {
      return;
    }
    this.service.addHospital(this.formHospital.value,this.hospitalName)
      .subscribe(
        data => {
            this.getHospitals(),
            this.formHospital.reset();
            this.hospitalName = '';
            this.submitted = false;
        },
        error => {

        });
  }
  edit(hospital: any) {
    this.hospitalName = hospital.hospitalname;
    this.formHospital.patchValue(hospital);
  }

  delete(hospitalName: string) {
    this.service.deleteHospital(hospitalName)
      .pipe(first())
      .subscribe(
        data => {
          this.getHospitals()
        },
        error => {
        });
  }

  compare(a, b) {
    const val1 = a.hospitalname.toUpperCase();
    const val2 = b.hospitalname.toUpperCase();

    let comparison = 0;
    if (val1 > val2) {
      comparison = 1;
    } else if (val1 < val2) {
      comparison = -1;
    }
    return comparison;
  }

  hospitalSort(){
    this.hospitalList$= this.hospitalList$.sort(this.compare);
  }

}
