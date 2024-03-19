import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  constructor(private readonly storeService: StoreService) {
  }

  
  @Output('newitem') addToCart = new EventEmitter<StoreItem>(); 
  items:Promise<StoreItem[]> = this.storeService.storeItems;


  updateCart(item:StoreItem){
    this.addToCart.emit(item)
  }
}
