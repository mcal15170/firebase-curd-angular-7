import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import * as $ from 'jquery';
import swal from 'sweetalert';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any[];
  panelOpenState = false;
  passReset: boolean = false;
  isSetUserImg: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUserData();

  }

  getUserData() {
    if (this.authService.isLoggedIn) {
      this.userData = JSON.parse(localStorage.getItem('user'));
      console.log(this.userData);

      if (this.userData['photoURL'] != null) {
        this.isSetUserImg = true;
      } else {
        this.isSetUserImg = false;
      }

    }

  }

  // password reset
  resetPassword(email: string) {
    // console.log(email);
    this.authService.resetPassword(email)
      .then(() => {
        this.passReset = true,
          swal("Sent Email SuccessFull", "A password reset link has been sent to your email address");
      })
      .catch(e => alert('An error occurred while attempting to resetyour password')
      );
  }



}
