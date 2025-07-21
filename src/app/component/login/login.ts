import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: any;
  
  constructor(private fb:FormBuilder, private router: Router) {
    this.loginForm=this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });
  }
  reqpwd: any;
checkLogin(){
  console.log(this.loginForm.value)
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == '12345') {
      //redirect to admin dashboard
      localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value))
      this.router.navigate(["/admin/home"]);
    }
    else{
      //userdashboard
      this.reqpwd = this.loginForm.value.username.slice(0, 3) + "123";
            localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value))

      this.router.navigate(['/user/home']);
    }
  }
}
