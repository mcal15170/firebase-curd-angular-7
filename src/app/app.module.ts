import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './page/user-login/user-login.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './page/employees/employees.component';
import { EmpoyeeComponent } from './page/employees/empoyee/empoyee.component';
import { EmpoyeeListComponent } from './page/employees/empoyee-list/empoyee-list.component';
import { EmployeeService } from './service/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './page/header/header.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ResetPassComponent } from './page/reset-pass/reset-pass.component';
import { VerifyEmailComponent } from './page/verify-email/verify-email.component';


const config = {/* your firebase web config */
  apiKey: "AIzaSyCBvVRMFYa4SMY7hPc3jj7tw2fmhzZ7xmU",
  authDomain: "fir-project-e5ee2.firebaseapp.com",
  databaseURL: "https://fir-project-e5ee2.firebaseio.com",
  projectId: "fir-project-e5ee2",
  storageBucket: "fir-project-e5ee2.appspot.com",
  messagingSenderId: "235823629643",
  appId: "1:235823629643:web:ffae96beb6c511c1"
}

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    EmployeesComponent,
    EmpoyeeComponent,
    EmpoyeeListComponent,
    HeaderComponent,
    SignUpComponent,
    ResetPassComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
