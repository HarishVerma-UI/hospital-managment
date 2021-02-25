import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalsService } from '../hospitals.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './department-list.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  $departments:any[];
  formDepratment: FormGroup;
  departmentsName:string;
  submitted:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: HospitalsService
  ) {}


  ngOnInit() {
    this.generateForm();
    this.getDepartments()
  }
  generateForm(){
    this.formDepratment = this.formBuilder.group({
      departmentname: ['', Validators.required],
      head:  ['', Validators.required],
      contactnumber:  ['', Validators.required],
      hospitalname: [this.route.snapshot.paramMap.get('id'), Validators.required],
    });
  }

  getDepartments() {
    this.service.getDepartments(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.$departments = data;
      },
      error => {
        //handle err
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formDepratment.invalid) {
      return;
    }
    this.service.addDepratment(this.formDepratment.value,this.departmentsName)
      .subscribe(
        data => {
          this.getDepartments()
          this.generateForm();
          this.departmentsName = '';
          this.submitted = false;
        },
        error => {
          //handle err
        });
  }

  edit(department: any) {
    this.departmentsName = department.departmentname;
    this.formDepratment.patchValue(department);
  }

  delete(department: string) {
    this.service.deleteDepratment(department)
      .subscribe(
        data => {
          this.getDepartments()
        },
        error => {
          //handle err
        });
  }

  compare(a, b) {
    const val1 = a.departmentname.toUpperCase();
    const val2 = b.departmentname.toUpperCase();

    let comparison = 0;
    if (val1 > val2) {
      comparison = 1;
    } else if (val1 < val2) {
      comparison = -1;
    }
    return comparison;
  }

  departmentSort(){
    this.$departments= this.$departments.sort(this.compare);
  }
  get departmentname() { return this.formDepratment.get('departmentname'); }
  get head() { return this.formDepratment.get('head'); }
  get contactnumber() { return this.formDepratment.get('contactnumber'); }
}
