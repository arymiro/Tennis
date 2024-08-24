import { Component, inject  } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShoppingCartItemComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  private readonly cartService = inject(CartService);
   

  ngOnInit(): void {    
  }

  public getCartItems(){
    return this.cartService.getCartItems();
  }

}
