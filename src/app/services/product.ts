import { Injectable } from '@angular/core';
import {products} from './productmodel'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Product {
  
  productlist:products[]=[
    {
      productId:"1",
      productName:"Asus Tuf Gaming a15",
      productDescription:"best gaming laptop with RTX 3050 for great experience",
      productCategory:"laptop",
      productPrice:"56000",
      productImage:"https://dlcdnwebimgs.asus.com/gain/7909b0a1-1457-4953-a9e7-41b2be78affa/"
    },
{
  productId:"2",
      productName:"Acer aspire 7",
      productDescription:"best gaming laptop with RTX 2050 for great experience",
      productCategory:"laptop",
      productPrice:"46000",
      productImage:"https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/b/6/o/-original-imah8yymchnjsxzn.jpeg?q=90&crop=false"
    },
    {
      productId:"3",
      productName:"Lenovo Ligeon",
      productDescription:"best gaming laptop with RTX 2050 for great experience",
      productCategory:"laptop",
      productPrice:"45000",
      productImage:"https://p3-ofp.static.pub//fes/cms/2024/09/12/elsxf6rwrtxudesy107rsj88cg0qhx499173.png"
    },
  ];


  getProducts(){
    return of(this.productlist);
  }

  addProducts(proobj:products){
    
    let ob=new products(); 
    let prokeys=Object.keys(proobj);
    let obkeys=Object.keys(ob) 
    if(obkeys.every(k=>prokeys.includes(k))) 
    {
      this.productlist.push(proobj);
    return "product added successfully";
    }
    else{
      return "something went wrong"
    }
  }

  deleteProduct(pid:any){
    const index=this.productlist.findIndex((e)=>e.productId==pid);
    if(index!=-1){
      this.productlist.splice(index,1);
      return "deleted successfully"
    }
    else{
      return "something went wrong"
    }
  }

  updateProduct(obj:any){
    const index=this.productlist.findIndex((e)=>e.productId==obj.productId);
    this.productlist.splice(index,1,obj);
    return "product updated"
  }


}