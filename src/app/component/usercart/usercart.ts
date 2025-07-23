import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-usercart',
  standalone: false,
  templateUrl: './usercart.html',
  styleUrl: './usercart.css'
})
export class Usercart {
  constructor(private cart: Cart,private service:Product) { }
  cartObj:any[]= [];
  ngOnInit() {
    this.cart.getCartItem().subscribe((res) => { this.cartObj = res });
  }
}
