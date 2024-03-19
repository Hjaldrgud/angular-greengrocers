import { Injectable, inject } from '@angular/core';
import { StoreItem } from '../models/StoreItem';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  http = inject(HttpClient);

  get storeItems(): Promise<StoreItem[]>{ 
      // @ts-ignore
      return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`)); 
    }
}
