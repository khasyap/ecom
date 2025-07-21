import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-userview',
  standalone: false,
  templateUrl: './userview.html',
  styleUrl: './userview.css'
})
export class Userview {
  constructor(private service:Product){}
      myproducts:any;
  
      ngOnInit(){
          this.service.getProducts().subscribe((data)=>{
            this.myproducts=data;
            console.log(this.myproducts)
          })
      }
  
}
