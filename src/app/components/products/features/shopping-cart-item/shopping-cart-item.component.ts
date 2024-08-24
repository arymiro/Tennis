import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.interface';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
  @Input() cartItem!: CartItem;
  private readonly cartService = inject(CartService);
  

  public deleteItem(){
    this.cartService.deleteCartItem(this.cartItem);
  }

  public getMountByCountProduct(){
    return this.cartItem.cantidad * this.cartItem.producto.price.value;
  }

  public subtractItem(){
    this.cartService.subtractItem(this.cartItem);
  }

  public increaseItem(){
    this.cartService.increaseItem(this.cartItem);
  }
}
