import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form:any): void {
    this.authService.register(form.value).subscribe(res => {
      sessionStorage.setItem("userName", res.dataUser.nombreUsuario);
      this.router.navigateByUrl('/login');
    });
  }  
}
