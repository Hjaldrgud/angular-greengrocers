import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  constructor(private readonly storeService: StoreService) {}

  @Output('newitem') addToCart = new EventEmitter<StoreItem>(); 
  items: Promise<StoreItem[]> = this.storeService.storeItems;
  filteredItems: Promise<StoreItem[]> | null = null;
  filterType: string | null = null;

  async ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItemsByType(type: string) {
    if (this.filterType === type) {
      this.filterType = null; // Reset filter if it's already active
      this.filteredItems = this.items; // Assign the Promise itself
    } else {
      this.filterType = type;
      this.filteredItems = this.items.then(items => items.filter(item => item.type === type));
    }
  }
  

  updateCart(item: StoreItem) {
    this.addToCart.emit(item);
  }
}
