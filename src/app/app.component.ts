import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseCRUDopration';

  constructor(
    private location: Location,
     private router: Router
  ){

  }
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('user')){
      if(this.location.path()=='/user-login'){
        this.router.navigate(['employees']);
      }
      // this.router.navigate([this.location.path()]);
    }
  }
}
