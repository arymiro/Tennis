import { Component, Input, inject } from '@angular/core';
import { Router } from "@angular/router";
import { Menu } from '../../models/menu.interface';
import { CartService } from '../../../components/products/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() menu!: Menu;
  private router = inject(Router);
  private readonly cartService = inject(CartService);

  constructor() { }

  ngOnInit(): void {    
  }

  public changeParam(path: string): void {    
    this.router.navigate([path]);
  }

  public getLengthCartItems(){
    return this.cartService.getCartItems().length;
  }
}
