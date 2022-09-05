import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.products)
    
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    console.log(item)
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  inc(item:any){
    // console.log(item.quantity)
    this.cartService.increment(item);
    item.quantity=item.quantity+1
  }
  dec(item:any){
    this.cartService.removeCartItem(item);
    item.quantity=item.quantity-1
  }
  productQuantity(action:string,item:any)
  {
    this.cartService.setQuantity(action,item);
    this.grandTotal=this.cartService.getTotalPrice();
  }
}
