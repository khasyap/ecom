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
  pid:any;
  obj:any;
  result:any;
  addNow(){
      this.result=this.cart.addtocart(this.obj);
      alert(this.result)
      }
  ngOnInit(){
    this.pid =this.bs.snapshot.paramMap.get("id");
    console.log("coming from details "+this.pid);
    this.obj=this.service.getProductById(this.pid);
  }
}
