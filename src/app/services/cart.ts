import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart:any[]=[];
  addtocart(obj:any){
    const cartitem=this.cart.find(e=>e.productId==obj.productId);
    if(!cartitem){
      this.cart.push(obj);
      return "Added sucessfully"
    }
    else{
      
      return "Already added ";
    }
  }
  getCartLength(){
    return this.cart.length;
  }
  getCartItem(){
    return of(this.cart);
  }
}
