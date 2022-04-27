import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:any):void{
    this.authService.login(form.value).subscribe(
      (res:any) =>{
        if(res.dataUser.status === 200){
          sessionStorage.setItem("UserName", res.dataUser.nombreUsuario);
          this.router.navigateByUrl('/register');
        }

      }
    );
  }
}
