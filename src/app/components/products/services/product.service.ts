import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  inject  
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../models/product.interface';


@Injectable({providedIn: 'root'})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly endPoint = `${environment.baseApiUrl}${environment.apiUrlProducts}`;

  constructor() {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endPoint);
  }
}
