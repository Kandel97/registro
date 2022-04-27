import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  usuario: UserI []= [];

  constructor(private authService: AuthService){}

  validate(){
    return this.authService.loggedIn()
  }
  sale(){
    return this.authService.logout()
  }

  getNombre(){
    return String(this.authService.getNombre());
  }
}
