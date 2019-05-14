import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from 'firebase';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // login
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        // this.router.navigate(['employees']);
      } else {
        // user not login
        this.router.navigate(['user-login']);
        localStorage.setItem('user', null);
      }
    })
  }

  // login
  async  login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['employees']);
    } catch (e) {
      swal('Oops', e.message, 'error');
    }
  }

  // logout
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['user-login']);
  }

  // check user is login or not
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }


  // create new user + singup
  async emailSignUp(email: string, password: string) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['user-login']);
    } catch (e) {
      swal('Oops', e.message, 'error');
    }


  }

  // login with google
  async googleSignIn() {
    try {
      const provider = new auth.GoogleAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
      this.router.navigate(['employees']);
    }
    catch (e) {
      swal('Oops', e.message, 'error');
    }

  }



  // async googleSiignOut() {
  //   await this.afAuth.auth.signOut();
  //   this.router.navigate(['/']);
  // }

  // password reset()
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/reset-pass' });
  }


  // EMAIL VERIFICATION
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        swal('Email Verification', 'We have sent a verification mail to jay.patel8965@gmail.com . Please activate your account with the link in this mail. if you cannot find the mail, please also check Junk/Spam Folder!');
        this.router.navigate(['verify-email']);
      })
  }



}
