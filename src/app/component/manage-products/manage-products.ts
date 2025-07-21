import { Component } from '@angular/core';
import { Product } from '../../services/product';
@Component({
  selector: 'app-manage-products',
  standalone: false,
  templateUrl: './manage-products.html',
  styleUrl: './manage-products.css'
})
export class ManageProducts {

      constructor(private service:Product){}
        myproducts:any;updateobj:any;
    
        ngOnInit(){
            this.service.getProducts().subscribe((data)=>{
              this.myproducts=data;
              console.log(this.myproducts)
            })
        }
        result:any;
        deleteNow(pid:any){
            this.result=this.service.deleteProduct(pid);
            alert(this.result);
        }

        updatecontent(content:any){
          this.updateobj=content;  
          console.log(this.updateobj);

        }

        updatenow(){
        this.result=  this.service.updateProduct(this.updateobj);
        alert(this.result);
        }

}
