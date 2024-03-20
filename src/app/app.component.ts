import { Component } from '@angular/core';
import { StoreItem } from "./models/StoreItem";
import { CartItem } from "./models/CartItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-green-grocers';

  cart:CartItem[]= [];
  cartItem:CartItem | null = null
  total:number = 0;

  updateCart(cart:CartItem[]){
    this.cart = cart;
    this.calculateTotal();
  }

  addToCart(item: StoreItem) {
    let cartIndex = this.cart.findIndex(c=>c.id == item.id)
 
    if(cartIndex>=0){
      this.cart[cartIndex].quantity = this.cart[cartIndex].quantity + 1;
    } else{
      this.cartItem = {...item, quantity: 1 } 
      this.cart.push(this.cartItem)
      this.cartItem = null;
    }

    this.calculateTotal();
  }

  calculateTotal(){
    this.total = 0;
    for(let i = 0; i<this.cart.length; i++){
      this.total += this.cart[i].price *this.cart[i].quantity;
    }
    this.total = parseFloat(this.total.toFixed(2));
  }

}
