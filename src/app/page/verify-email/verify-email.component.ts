import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  userData: any[];
  mailId: string;
  emailVerified: boolean = false;

  constructor(
    private authService: AuthService,
    private _location: Location
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.userData = JSON.parse(localStorage.getItem('user'));
      this.mailId = this.userData['email'];
      this.emailVerified = this.userData['emailVerified'];
      console.log(this.emailVerified);
    }
  }
  // go back
  goBack() {
    this._location.back();
  }

}
