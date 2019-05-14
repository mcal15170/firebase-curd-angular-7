import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import * as $ from 'jquery';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private authService: AuthService,
    private router: Router) { }

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

  // create new user
  createNewUser() {
    this.router.navigate(['sign-up']);
  }

}
