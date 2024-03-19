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
  }

  addToCart(item:StoreItem){
  }

  calculateTotal(){
  }

}
