import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: false,
  templateUrl: './userhome.html',
  styleUrl: './userhome.css'
})
export class Userhome {
admin:any;
username:any;
constructor(private router:Router){

}
ngOnInit(){
  if(localStorage.getItem("loggedin")!=null){
    alert("welcome to user page");
    this.admin=localStorage.getItem("loggedin");
    this.admin=JSON.parse(this.admin);
    this.username=this.admin.username;
  }
  else{
    this.router.navigateByUrl('');
  }
}
}
