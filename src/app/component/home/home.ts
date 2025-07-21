import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  admin:any;
username:any;
constructor(private router:Router){

}
ngOnInit(){
  if(localStorage.getItem("loggedin")!=null){
    alert("welcome to admin page");
    this.admin=localStorage.getItem("loggedin");
    this.admin=JSON.parse(this.admin);
    this.username=this.admin.username;
  }
  else{
    this.router.navigateByUrl('');
  }
}
}
