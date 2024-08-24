import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  constructor() { }

  public addToCart(cartItem: CartItem) {
    var cartItemExist = this.findCartItemById(cartItem.producto.id);
    if(cartItemExist){
      cartItemExist.cantidad = cartItemExist.cantidad + 1;
    } else {
      this.cartItems.push(cartItem);     
    }    
  }

  public getCartItems(){
    return this.cartItems;
  }

  public findCartItemById(id: number){
    return this.cartItems.find((i) => i.producto.id == id);
  }  

  public deleteCartItem(cartItem: CartItem){
    this.cartItems = this.cartItems.filter((i) => i.producto.id != cartItem.producto.id);
  }

  public subtractItem(cartItem: CartItem){
    if(cartItem.cantidad >= 2){
      this.modifyQuantityItem(cartItem, -1);
    }
  }

  public increaseItem(cartItem: CartItem){    
    this.modifyQuantityItem(cartItem, 1);
  }

  private modifyQuantityItem(cartItem: CartItem, value: number){
    cartItem.cantidad = cartItem.cantidad + value;    
  }
}
