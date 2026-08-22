import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  constructor(private httpservice : HttpServiceService, private router : Router) { }
    form : any = {
    data: {},

}
}