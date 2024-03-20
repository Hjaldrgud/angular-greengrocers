import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input('cart') cart:CartItem[]|null = null;
  @Output('update') update = new EventEmitter<CartItem[]>();

  updateCart(item: CartItem){
    if(item && this.cart){
      switch(item.quantity){
        case 0:
          if(this.cart)this.cart.splice(this.cart.findIndex(c=>c.id == item.id), 1) 
          break;
        default:
  
         if(this.cart) this.update.emit(this.cart)
      }
    }
  }
}
