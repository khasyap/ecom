import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-userhome',
  standalone: false,
  templateUrl: './userhome.html',
  styleUrl: './userhome.css'
})
export class Userhome {
admin:any;
username:any;
constructor(private router:Router,private product:Product,private cart:Cart){

}
len=0;
price=0;
orders=0;
carts=0;
  ngDoCheck(){
    this.len=this.product.productlist.length;
    this.carts=this.cart.getCartLength()

    this.product.getProducts().subscribe((product)=>{
      this.price=product.reduce((total,p)=>total+Number(p.productPrice),0)
    })
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
