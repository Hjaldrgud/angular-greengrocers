import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem';
@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})

export class StoreItemComponent {
  @Input('item') item:StoreItem | null = null;
  @Output('update') update = new EventEmitter<StoreItem>();
 
  UpdateCart(){
   if(!this.item){
     throw new Error("Cannot find grocery!")
   }
  this.update.emit(
    this.item
  );
  }
 }
