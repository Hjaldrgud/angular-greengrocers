import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartTotalComponent } from './cart-total/cart-total.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
    CartTotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartItemComponent, 
    CartListComponent, 
    CartItemComponent
  ],
})

export class CartModule { }
