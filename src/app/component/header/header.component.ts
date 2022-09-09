import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  show:boolean=false;
  // public searchTerm !: string;
  constructor(private cartService : CartService,private auth: AuthService) { }

  ngOnInit(): void {
console.log("before")
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      if(this.auth.getToken!=null){
        this.show=true
        console.log("logged in")
      }
    })
  
  
  }
  logout(): void {
    this.auth.logout();
    this.show=false
    
  }
  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }
}
