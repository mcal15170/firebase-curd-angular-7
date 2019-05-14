import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from "../../service/auth.service";
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  // show password
  showPassword() {
    if ($('#txtPass').val()) {
      $('#passLock').hide();
      $('#passEye').hide();
      $('#passUnlock').show();
      $('#passEyeClose').show();
      $("#txtPass").attr('type', 'text');
    }
  }

  // hide password
  hidePassword() {
    $('#passLock').show();
    $('#passEye').show();
    $('#passUnlock').hide();
    $('#passEyeClose').hide();
    $("#txtPass").attr('type', 'password');

  }


  checkConfirmPass(pass: string, confirmPass: string) {
    if (pass !== '' && confirmPass !== '') {
      if (pass == confirmPass) {
        // match
        $('#ok').show();
        $('#what').hide();
        $('#wrong').hide();

      } else {
        // un match
        $('#ok').hide();
        $('#what').hide();
        $('#wrong').show();

      }


    } else {
      $('#ok').hide();
      $('#what').show();
      $('#wrong').hide();
    }
  }

  // check pass
  checkPass(pass: string, confirmPass: string) {
    if (pass !== '' && confirmPass !== '') {
      if (pass == confirmPass) {
        // match
        $('#ok').show();
        $('#what').hide();
        $('#wrong').hide();

      } else {
        // un match
        $('#ok').hide();
        $('#what').hide();
        $('#wrong').show();

      }


    }

  }

  // create new user
  createUser(email: string, pass: string, conPass: string, name: string) {
    if (email !== '' && pass !== '' && conPass !== '' && name !== '') {
      if (pass !== conPass) {
        swal('Oops', 'Password & Confirm Password Are Not Match', 'error');
      }
      else {
        this.authService.emailSignUp(email, pass);
      }
    } else {
      swal('Oops', 'Form Data Are InValid', 'error');

    }



  }

}
