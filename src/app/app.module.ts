import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsfilterPipe } from './product/productsfilter.pipe';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRoleComponent } from './user-role/user-role.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: {
      title: 'Product list'
    }
  },
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsfilterPipe,
    UserComponent,
    UserDetailComponent,
    UserRoleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

