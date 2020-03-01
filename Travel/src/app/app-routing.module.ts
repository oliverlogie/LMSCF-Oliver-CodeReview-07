import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path: 'infos/:infoId', component: BlogComponent
},{
  path: 'cart', component: CartComponent
},{
  path: 'blog', component: BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
