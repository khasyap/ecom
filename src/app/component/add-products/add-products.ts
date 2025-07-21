import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../services/product';

@Component({
  selector: 'app-add-products',
  standalone: false,
  templateUrl: './add-products.html',
  styleUrl: './add-products.css'
})
export class AddProducts {

    productForm:FormGroup=new FormGroup({});

    constructor(private fb:FormBuilder,private service:Product){
        this.productForm=this.fb.group({
          productId:['',Validators.required],
          productName:['',Validators.required],
          productDescription:['',Validators.required],
          productCategory:['',Validators.required],
          productPrice:['',Validators.required],
          productImage:['',Validators.required]
        })
    }
    result:any;
    submitProduct(){
      console.log(this.productForm.value)
      this.result=   this.service.addProducts(this.productForm.value);
      alert(this.result)
    }
  }