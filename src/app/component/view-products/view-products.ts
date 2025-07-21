import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-view-products',
  standalone: false,
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts {

    constructor(private service:Product){}
    myproducts:any;

    ngOnInit(){
        this.service.getProducts().subscribe((data)=>{
          this.myproducts=data;
          console.log(this.myproducts)
        })
    }

}
