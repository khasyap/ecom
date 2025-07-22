import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart:any[]=[
  ]
  addtocart(obj:any){
    this.cart.push(obj);
    return "added to cart"
  }
  getCartLength(){
    return this.cart.length;
  }
  getCartItem(){
    return of(this.cart);
  }
}
