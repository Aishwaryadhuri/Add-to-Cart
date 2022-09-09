import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './gurd/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products',component: ProductsComponent,canActivate:[AuthGuard]},
  {path:'cart', component: CartComponent,canActivate: [AuthGuard]},
  {path:'singleproduct/:id' ,component:SingleProductComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password' ,component:ForgotPasswordComponent},
  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
