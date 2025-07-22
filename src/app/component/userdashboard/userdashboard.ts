import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.html',
  styleUrl: './userdashboard.css'
})
export class Userdashboard {
  len=0;
  constructor(private cart:Cart){}
  ngDoCheck(){
    this.len=this.cart.getCartLength();
  }
}
