import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
 // public filterCategory : any
  // searchKey:string ="";
  // public quantity=0;
  itemExists:number[]=[];
  en:boolean=false
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      // this.filterCategory = res;
      this.productList.forEach((a:any) => {
        // if(a.category ==="women's clothing" || a.category ==="men's clothing"){
        //   a.category ="fashion"
        // }
        Object.assign(a,{quantity:1,total:a.price});
      });
      // console.log(this.productList)
    });

    // this.cartService.search.subscribe((val:any)=>{
    //   // this.searchKey = val;
    // })
  }
  addtocart(item: any){
      this.cartService.addtoCart(item);
      this.en=true
  }
  viewProduct(item:any){
    this.cartService.addto(item)

  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  enableBtn(item:any)
  {
    if(this.cartService.cartProduct(item)!=0)
    {
      return true;
    }
    else{
      return false;
    }
  }
  // filter(category:string){
  //   this.filterCategory = this.productList
  //   .filter((a:any)=>{
  //     if(a.category == category || category==''){
  //       return a;
  //     }
  //   })
  // }

}
