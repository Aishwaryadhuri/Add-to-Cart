import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(private cartService : CartService,private api:ApiService,private acRoute: ActivatedRoute) { }
 
  public products : any = [];
 public productId:any

  ngOnInit(): void {
    this. productId = this.acRoute.snapshot.params['id'];
    this.loadProductDetails(this.productId);
    
  }
  loadProductDetails(productId:any){
    this.api.singleProductDetails(productId).subscribe(product => {
      this.products = product;
      console.log(this.products)
    });
  }


//   addtocart(item: any){
//     this.cartService.addtoCart(item);
   
// }

    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.product = res;
    //    this.grandTotal = this.cartService.getTotalPrice();
    //    console.log(this.grandTotal)
    //    console.log(this.product)
       
    // })
  }



