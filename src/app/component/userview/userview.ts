import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  standalone: false,
  templateUrl: './userview.html',
  styleUrl: './userview.css'
})
export class Userview {

  constructor(private service:Product,private router:Router){}
    myproducts:any;

    opendetails(pid:any){
      console.log(pid);
      this.router.navigateByUrl(`/user/details/${pid}`)
    }




    ngOnInit(){
        this.service.getProducts().subscribe((data)=>{
          this.myproducts=data;
          console.log(this.myproducts)
        })
    }

}