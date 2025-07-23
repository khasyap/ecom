import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-viewdetails',
  standalone: false,
  templateUrl: './viewdetails.html',
  styleUrl: './viewdetails.css'
})
export class Viewdetails {

  constructor(private bs:ActivatedRoute, private service:Product, private cart:Cart){}
  pid:any;obj:any;
  result:any;
  product:any;
  
  
  addNow(obj:any){
      this.result=this.cart.addtocart(obj);
      alert(this.result)
      }
  selectproduct(obj:any){
    this.product=obj;
  }
  user:any;
  username:any;
  address:any;
  phone:any;

  ngOnInit(){
    if(localStorage.getItem("user")!=null){
      this.user=localStorage.getItem("user");
      this.user=JSON.parse(this.user);
      this.username=this.user.username;

    }
    
    this.pid =this.bs.snapshot.paramMap.get("id");
    console.log("coming from details "+this.pid);
    this.obj=this.service.getProductById(this.pid);
  }
}
