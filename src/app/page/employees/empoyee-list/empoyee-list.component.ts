import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { AngularFirestore } from '@angular/fire/firestore';
import swal from 'sweetalert';
import * as $ from 'jquery';
import { empty } from 'rxjs';

@Component({
  selector: 'app-empoyee-list',
  templateUrl: './empoyee-list.component.html',
  styleUrls: ['./empoyee-list.component.css']
})
export class EmpoyeeListComponent implements OnInit {
  list: Employee[];
  updatedData: {} = null;
  status: boolean = true;
  showSpinner: boolean = true;
  constructor(private service: EmployeeService,
    private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.getEmpCollection();
  }
  // get employee coollection
  getEmpCollection() {
    this.service.getEmployees().subscribe(
      (result) => {
        this.showSpinner = false
        this.list = result.map(
          item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as Employee;
          }
        )
      }
    );
  }

  // configiure inline edit html
  onEdit(trID: string, counter: number) {
    // if user set empty filed se set it

    if (this.status) {
      $('#txtName' + counter).val($('#spanName' + counter).text());
      $('#txtCode' + counter).val($('#spanCode' + counter).text());
      $('#txtPosition' + counter).val($('#spanPosition' + counter).text());
      $('#txtMobile' + counter).val($('#spanMobile' + counter).text());


      $("#" + trID).find("span").hide();
      $("#" + trID).find("input[type='text']").show();
      $("#" + trID + " #edit").hide();
      $("#" + trID + " #done").show();
      $("#" + trID + " #close").show();
      this.status = false;
    }


  }

  //  hide textbox and  display  span
  onClose(trID: string) {
    $(".error").hide();
    $("#" + trID).find("span").show();
    $("#" + trID).find("input[type='text']").hide();
    $("#" + trID + " #edit").show();
    $("#" + trID + " #done").hide();
    $("#" + trID + " #close").hide();
    this.status = true;

  }

  onDone(empID: string, counter: number) {
    let trID = 'trdata' + counter;
    // check validation
    if ($('#txtName' + counter).val() != "" && $('#txtPosition' + counter).val() != "" && $('#txtCode' + counter).val() != "" && $('#txtMobile' + counter).val() !== "") {
      //  data are valid
      this.updatedData = {
        fullName: $('#txtName' + counter).val(),
        position: $('#txtPosition' + counter).val(),
        empCode: $('#txtCode' + counter).val(),
        mobile: $('#txtMobile' + counter).val()
      };
      this.fireStore.doc('employees/' + empID).update(this.updatedData);
      this.updatedData = null;
      $("#" + trID).find("span").show();
      $("#" + trID).find("input[type='text']").hide();
      $("#" + trID + " #edit").show();
      $("#" + trID + " #done").hide();
      $("#" + trID + " #close").hide();
      this.status = true;

    } else {
      // ======================
      // data are in Valid
      // ======================

      // if name empty show error near name
      if ($('#txtName' + counter).val() == "") {
        $("#errName" + counter).show();
      }
      // if postion empty show error near postion
      if ($('#txtPosition' + counter).val() == "") {
        $("#errPosition" + counter).show();
      }
      // if code empty show error near code
      if ($('#txtCode' + counter).val() == "") {
        $("#errCode" + counter).show();
      }
      // if mobile empty show error near mobile
      if ($('#txtMobile' + counter).val() == "") {
        $("#errMobile" + counter).show();
      }
    }




  }



  // delete emp
  onDelete(id: string) {
    if (confirm('Are You Sure To Delete This Record?')) {
      this.fireStore.doc('employees/' + id).delete();
    }
  }
}
