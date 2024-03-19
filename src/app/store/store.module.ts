import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreItemComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[
    StoreListComponent, StoreItemComponent
  ]
})
export class StoreModule { }
