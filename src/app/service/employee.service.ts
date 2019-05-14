import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
formData:Employee;


  constructor(private fireStore:AngularFirestore) { }

  // get all employess
  getEmployees(){
    return this.fireStore.collection('employees').snapshotChanges(); 
  }
}
