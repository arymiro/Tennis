import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  inject  
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Menu } from '../models/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly http = inject(HttpClient);
  private readonly endPoint = `${environment.baseApiUrl}${environment.apiUrlMenu}`;
  
  constructor() { }

  public getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this.endPoint);
  }
}
