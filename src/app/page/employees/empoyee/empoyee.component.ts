import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { NgForm } from '@angular/forms';
// import { firestore } from 'firebase';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import swal from 'sweetalert';
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-empoyee',
  templateUrl: './empoyee.component.html',
  styleUrls: ['./empoyee.component.css']
})
export class EmpoyeeComponent implements OnInit {
  registerForm: FormGroup;
  submitted: Boolean = false;
  constructor(private service: EmployeeService,
    private fb: FormBuilder,
    private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-z]*$')]],
      position: ['', [Validators.required, Validators.pattern('^[a-z]*$')]],
      empCode: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],

    });
  }


  // form submit
  //insert new recored
  insertEmp(data: Employee) {
    // console.log(data);
    this.fireStore.collection('employees').add(data);
    this.resetForm();
    swal("EMP. Register!", "Employee Save SuccessFully !", "success");

  }

  //get object of form controls
  get f() {
    return this.registerForm.controls;
  }

  // on form submit
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid && this.submitted) {
      swal("Opps!", "Form Data Invalid", "error");

    } else {
      // form data correct 
      this.insertEmp(this.registerForm.value);
    }

  }

  // form reset
  resetForm() {
    this.registerForm.reset();
    this.submitted = false;
  }


}
