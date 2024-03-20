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
  filteredItems: StoreItem[] | null = null;
  filterType: string | null = null;
  sortDirection: string | null = null;

  async ngOnInit() {
    this.filterItemsByType(null);
  }

  filterItemsByType(type: string | null) {
    this.filterType = type;
    this.storeService.storeItems.then(items => {
      this.filteredItems = this.filterItems(items);
    });
  }
  
  sortItemsByPrice() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  
    if (this.filteredItems) {
      this.filteredItems = this.sortItems(this.filteredItems, 'price');
    }
  }
  
  sortItemsByName() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  
    if (this.filteredItems) {
      this.filteredItems = this.sortItems(this.filteredItems, 'name');
    }
  }
  
  resetFilter() {
    this.filterType = null;
    this.filterItemsByType(null);
  }
  
  filterItems(items: StoreItem[]): StoreItem[] {
    if (this.filterType === null) {
      return items;
    } else {
      return items.filter(item => item.type === this.filterType);
    }
  }
  
  sortItems(items: StoreItem[], sortBy: string): StoreItem[] {
    if (sortBy === 'price') {
      if (this.sortDirection === 'asc') {
        return items.slice().sort((a, b) => a.price - b.price);
      } else {
        return items.slice().sort((a, b) => b.price - a.price);
      }
    } else if (sortBy === 'name') {
      if (this.sortDirection === 'asc') {
        return items.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return items.slice().sort((a, b) => b.name.localeCompare(a.name));
      }
    }
    return items;
  }
  
  updateCart(item: StoreItem) {
    this.addToCart.emit(item);
  }
}
